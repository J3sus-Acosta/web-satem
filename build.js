const ejs = require('ejs');
const fs = require('fs-extra');
const path = require('path');
require('dotenv').config();

const distDir = path.join(__dirname, 'dist');
const viewsDir = path.join(__dirname, 'views');
const publicDir = path.join(__dirname, 'public');

// Data defaults for views
const baseData = {
    title: 'SATEM Soluciones Inteligentes | Asesoría TI, Automatización IA & Soporte',
    description: 'Soluciones tecnológicas y automatización con inteligencia artificial para empresas. Ahorra tiempo, optimiza procesos y recibe soporte sin enredos técnicos.',
    canonicalUrl: 'https://satemsoluciones.com',
    path: '/'
};

async function build() {
    try {
        // 1. Clean dist directory
        await fs.emptyDir(distDir);
        console.log('Cleaned dist directory');

        // 2. Copy public assets (includes robots.txt, sitemap.xml, css, js, img)
        await fs.copy(publicDir, distDir);
        console.log('Copied public assets');

        // 3. Render index.ejs to index.html
        const templatePath = path.join(viewsDir, 'index.ejs');
        const outputPath = path.join(distDir, 'index.html');

        const html = await ejs.renderFile(templatePath, {
            ...baseData,
            filename: templatePath
        });

        await fs.outputFile(outputPath, html);
        console.log('Generated index.html');

        // 4. Render policy.ejs to policy/index.html
        const policyTemplatePath = path.join(viewsDir, 'policy.ejs');
        const policyOutputPath = path.join(distDir, 'policy', 'index.html');

        const policyHtml = await ejs.renderFile(policyTemplatePath, {
            ...baseData,
            title: 'Política de Privacidad | SATEM Soluciones Inteligentes',
            description: 'Conoce nuestra política de privacidad y el tratamiento transparente y seguro de tus datos en SATEM Soluciones Inteligentes.',
            canonicalUrl: 'https://satemsoluciones.com/policy',
            path: '/policy',
            filename: policyTemplatePath
        });

        await fs.outputFile(policyOutputPath, policyHtml);
        console.log('Generated policy/index.html');

        // 5. Render gracias.ejs to gracias/index.html
        const graciasTemplatePath = path.join(viewsDir, 'gracias.ejs');
        const graciasOutputPath = path.join(distDir, 'gracias', 'index.html');

        const graciasHtml = await ejs.renderFile(graciasTemplatePath, {
            ...baseData,
            title: '¡Consultoría Agendada! | SATEM Soluciones Inteligentes',
            description: 'Confirmación de consultoría agendada con el equipo de SATEM Soluciones Inteligentes.',
            canonicalUrl: 'https://satemsoluciones.com/gracias',
            robots: 'noindex, follow',
            path: '/gracias',
            filename: graciasTemplatePath
        });

        await fs.outputFile(graciasOutputPath, graciasHtml);
        console.log('Generated gracias/index.html');

        // 6. Render soporte.ejs to soporte/index.html
        const soporteTemplatePath = path.join(viewsDir, 'soporte.ejs');
        const soporteOutputPath = path.join(distDir, 'soporte', 'index.html');

        const soporteHtml = await ejs.renderFile(soporteTemplatePath, {
            ...baseData,
            title: 'Centro de Ayuda y Soporte al Cliente | SATEM Soluciones Inteligentes',
            description: 'Solicita ayuda técnica para tu empresa. Resolveremos tus requerimientos y dudas de forma rápida, clara y sin complicaciones.',
            canonicalUrl: 'https://satemsoluciones.com/soporte',
            path: '/soporte',
            turnstileSiteKey: process.env.TURNSTILE_SITE_KEY || '',
            filename: soporteTemplatePath
        });

        await fs.outputFile(soporteOutputPath, soporteHtml);
        console.log('Generated soporte/index.html');

        // 7. Render soporte-exito.ejs to soporte/exito/index.html
        const soporteExitoTemplatePath = path.join(viewsDir, 'soporte-exito.ejs');
        const soporteExitoOutputPath = path.join(distDir, 'soporte', 'exito', 'index.html');

        const soporteExitoHtml = await ejs.renderFile(soporteExitoTemplatePath, {
            ...baseData,
            title: 'Solicitud Recibida con Éxito | SATEM Soluciones Inteligentes',
            description: 'Confirmación de solicitud de soporte recibida por el equipo de SATEM.',
            canonicalUrl: 'https://satemsoluciones.com/soporte/exito',
            robots: 'noindex, follow',
            path: '/soporte/exito',
            filename: soporteExitoTemplatePath
        });

        await fs.outputFile(soporteExitoOutputPath, soporteExitoHtml);
        console.log('Generated soporte/exito/index.html');

        console.log('Build complete! The "dist" folder is ready for deployment.');

    } catch (err) {
        console.error('Build failed:', err);
    }
}

build();
