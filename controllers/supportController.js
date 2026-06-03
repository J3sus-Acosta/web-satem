const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

// ────────────────────────────────────────────────────────────────────────────
// Configuración de extensiones y tamaño permitidos
// ────────────────────────────────────────────────────────────────────────────
const ALLOWED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.txt', '.zip'];
const MAX_FILE_SIZE_MB = 10;

// ────────────────────────────────────────────────────────────────────────────
// Sanitizar texto de entrada (prevenir inyecciones en el cuerpo del correo)
// ────────────────────────────────────────────────────────────────────────────
function sanitize(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/&/g, '&amp;')
        .trim()
        .slice(0, 5000); // limitar longitud máxima
}

// ────────────────────────────────────────────────────────────────────────────
// Validar formato de email con regex RFC5322-compatible
// ────────────────────────────────────────────────────────────────────────────
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

// ────────────────────────────────────────────────────────────────────────────
// Crear transporter SMTP reutilizable
// ────────────────────────────────────────────────────────────────────────────
function createTransporter() {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
        tls: {
            rejectUnauthorized: true,
        },
    });
}

// ────────────────────────────────────────────────────────────────────────────
// Generar HTML del correo para FreeScout
// ────────────────────────────────────────────────────────────────────────────
function buildEmailHTML(data, file) {
    const { nombre, correo, empresa, asunto, descripcion, fecha } = data;

    let adjuntosText = 'Sin archivos adjuntos';
    if (file) {
        const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
        adjuntosText = `📎 <strong>${file.originalname}</strong> (${sizeMB} MB)`;
    }

    return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Nueva Solicitud de Soporte</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f7fa;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f7fa;padding:30px 0;">
<tr>
<td align="center">

<table width="650" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e5e5;">

    <!-- Header -->
    <tr>
        <td style="background:#074a77;padding:25px 30px;">
            <h1 style="margin:0;color:#ffffff;font-size:24px;">
                🎫 Nueva Solicitud de Soporte
            </h1>
            <p style="margin:8px 0 0 0;color:#bfe4f2;font-size:14px;">
                SATEM Soluciones Inteligentes
            </p>
        </td>
    </tr>

    <!-- Fecha -->
    <tr>
        <td style="background:#00b2a9;padding:12px 30px;color:#ffffff;font-size:14px;">
            Solicitud recibida el <strong>${fecha}</strong>
        </td>
    </tr>

    <!-- Datos -->
    <tr>
        <td style="padding:30px;">

            <table width="100%" cellpadding="0" cellspacing="0">

                <tr>
                    <td width="220" style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                        <strong style="color:#074a77;">Nombre Completo</strong>
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;color:#221f1f;">
                        ${nombre}
                    </td>
                </tr>

                <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                        <strong style="color:#074a77;">Correo Electrónico</strong>
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;color:#221f1f;">
                        <a href="mailto:${correo}" style="color:#099d84;text-decoration:none;">
                            ${correo}
                        </a>
                    </td>
                </tr>

                <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                        <strong style="color:#074a77;">Empresa</strong>
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;color:#221f1f;">
                        ${empresa}
                    </td>
                </tr>

                <tr>
                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;">
                        <strong style="color:#074a77;">Asunto del Ticket</strong>
                    </td>
                    <td style="padding:12px 0;border-bottom:1px solid #eeeeee;color:#221f1f;">
                        ${asunto}
                    </td>
                </tr>

            </table>

            <!-- Descripción -->
            <div style="margin-top:25px;">
                <h3 style="margin:0 0 12px 0;color:#074a77;">
                    Descripción del Requerimiento
                </h3>

                <div style="
                    background:#f8fafc;
                    border-left:5px solid #099d84;
                    padding:18px;
                    border-radius:6px;
                    color:#221f1f;
                    line-height:1.6;
                    white-space:pre-wrap;
                ">
                    ${descripcion}
                </div>
            </div>

            <!-- Archivos -->
            <div style="margin-top:25px;">
                <h3 style="margin:0 0 12px 0;color:#074a77;">
                    Archivos Adjuntos
                </h3>

                <div style="
                    background:#f8fafc;
                    border:1px dashed #00b2a9;
                    padding:15px;
                    border-radius:6px;
                    color:#221f1f;
                ">
                    ${adjuntosText}
                </div>
            </div>

        </td>
    </tr>

    <!-- Footer -->
    <tr>
        <td style="background:#221f1f;padding:20px 30px;text-align:center;">
            <p style="margin:0;color:#ffffff;font-size:13px;">
                Este correo fue generado automáticamente por el sistema de soporte de SATEM.
            </p>

            <p style="margin:8px 0 0 0;color:#cccccc;font-size:12px;">
                Las respuestas enviadas desde SATEM llegarán directamente al correo del solicitante.
            </p>
        </td>
    </tr>

</table>

</td>
</tr>
</table>

</body>
</html>`;
}

// ────────────────────────────────────────────────────────────────────────────
// GET /soporte — Renderizar formulario
// ────────────────────────────────────────────────────────────────────────────
exports.getSoporte = (req, res) => {
    res.render('soporte', {
        title: 'Soporte al Cliente | SATEM Soluciones Inteligentes',
        path: '/soporte',
    });
};

// ────────────────────────────────────────────────────────────────────────────
// GET /soporte/exito — Pantalla de éxito post-envío
// ────────────────────────────────────────────────────────────────────────────
exports.getSoporteExito = (req, res) => {
    res.render('soporte-exito', {
        title: 'Solicitud Recibida | SATEM Soluciones Inteligentes',
        path: '/soporte/exito',
    });
};

// ────────────────────────────────────────────────────────────────────────────
// POST /soporte — Procesar formulario y enviar correo
// ────────────────────────────────────────────────────────────────────────────
exports.postSoporte = async (req, res) => {
    // ── 1. Extraer y sanitizar campos ────────────────────────────────────────
    const nombre = sanitize(req.body.nombre || '');
    const correo = sanitize(req.body.correo || '');
    const empresa = sanitize(req.body.empresa || '');
    const asunto = sanitize(req.body.asunto || '');
    const descripcion = sanitize(req.body.descripcion || '');
    const fecha = new Date().toLocaleString('es-CL', { timeZone: 'America/Santiago' });

    // ── 2. Validaciones de backend ───────────────────────────────────────────
    const errors = [];
    if (!nombre || nombre.length < 2) errors.push('El nombre es obligatorio (mínimo 2 caracteres).');
    if (!correo || !isValidEmail(correo)) errors.push('El correo electrónico no tiene un formato válido.');
    if (!empresa || empresa.length < 2) errors.push('La empresa es obligatoria.');
    if (!asunto || asunto.length < 4) errors.push('El asunto es obligatorio (mínimo 4 caracteres).');
    if (!descripcion || descripcion.length < 10) errors.push('La descripción es obligatoria (mínimo 10 caracteres).');

    if (errors.length > 0) {
        console.warn('[SOPORTE] Validación fallida:', errors);
        return res.status(400).render('soporte', {
            title: 'Soporte al Cliente | SATEM Soluciones Inteligentes',
            path: '/soporte',
            errors,
            formData: { nombre, correo, empresa, asunto, descripcion },
        });
    }

    // ── 3. Validar archivo adjunto (si existe) ───────────────────────────────
    let attachments = [];
    if (req.file) {
        const ext = path.extname(req.file.originalname).toLowerCase();
        const fileSizeMB = req.file.size / (1024 * 1024);

        if (!ALLOWED_EXTENSIONS.includes(ext)) {
            return res.status(400).render('soporte', {
                title: 'Soporte al Cliente | SATEM Soluciones Inteligentes',
                path: '/soporte',
                errors: [`Extensión de archivo no permitida. Extensiones válidas: ${ALLOWED_EXTENSIONS.join(', ')}`],
                formData: { nombre, correo, empresa, asunto, descripcion },
            });
        }

        if (fileSizeMB > MAX_FILE_SIZE_MB) {
            return res.status(400).render('soporte', {
                title: 'Soporte al Cliente | SATEM Soluciones Inteligentes',
                path: '/soporte',
                errors: [`El archivo supera el tamaño máximo permitido (${MAX_FILE_SIZE_MB} MB).`],
                formData: { nombre, correo, empresa, asunto, descripcion },
            });
        }

        attachments.push({
            filename: req.file.originalname,
            content: req.file.buffer,
        });
    }

    // ── 4. Construir y enviar el correo ──────────────────────────────────────
    const helpdeskEmail = process.env.HELPDESK_EMAIL;

    if (!helpdeskEmail || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.error('[SOPORTE] Variables de entorno SMTP no configuradas.');
        return res.status(500).render('soporte', {
            title: 'Soporte al Cliente | SATEM Soluciones Inteligentes',
            path: '/soporte',
            errors: ['Error interno del servidor. Por favor intente más tarde o contáctenos directamente.'],
            formData: { nombre, correo, empresa, asunto, descripcion },
        });
    }

    const mailOptions = {
        from: `"SATEM Soporte" <${process.env.SMTP_USER}>`,
        to: helpdeskEmail,
        replyTo: correo,
        subject: `[SOPORTE] ${empresa} - ${asunto}`,
        html: buildEmailHTML({ nombre, correo, empresa, asunto, descripcion, fecha }, req.file),
        attachments,
    };

    try {
        const transporter = createTransporter();
        await transporter.verify();
        await transporter.sendMail(mailOptions);

        console.log(`[SOPORTE] Ticket enviado correctamente. Solicitante: ${correo} | Empresa: ${empresa} | Asunto: ${asunto}`);
        res.redirect('/soporte/exito');

    } catch (err) {
        console.error('[SOPORTE] Error al enviar correo:', err.message || err);
        res.status(500).render('soporte', {
            title: 'Soporte al Cliente | SATEM Soluciones Inteligentes',
            path: '/soporte',
            errors: ['No se pudo enviar la solicitud. Por favor intente nuevamente o contáctenos directamente.'],
            formData: { nombre, correo, empresa, asunto, descripcion },
        });
    }
};
