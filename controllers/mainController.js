exports.getIndex = (req, res) => {
    res.render('index', {
        title: 'SATEM Soluciones Inteligentes | Asesoría TI, Automatización IA & Soporte',
        description: 'Soluciones tecnológicas y automatización con inteligencia artificial para empresas. Ahorra tiempo, optimiza procesos y recibe soporte sin enredos técnicos.',
        canonicalUrl: 'https://satemsoluciones.com',
        path: '/'
    });
};

exports.getPolicy = (req, res) => {
    res.render('policy', {
        title: 'Política de Privacidad | SATEM Soluciones Inteligentes',
        description: 'Conoce nuestra política de privacidad y el tratamiento transparente y seguro de tus datos en SATEM Soluciones Inteligentes.',
        canonicalUrl: 'https://satemsoluciones.com/policy',
        path: '/policy'
    });
};

exports.getGracias = (req, res) => {
    res.render('gracias', {
        title: '¡Consultoría Agendada! | SATEM Soluciones Inteligentes',
        description: 'Confirmación de consultoría agendada con el equipo de SATEM Soluciones Inteligentes.',
        canonicalUrl: 'https://satemsoluciones.com/gracias',
        robots: 'noindex, follow',
        path: '/gracias'
    });
};

exports.postContact = (req, res) => {
    // Here we would handle form submission (e.g., sending email with nodemailer)
    // For now, we just redirect back to home with a success query param
    const { name, email, message } = req.body;
    console.log('Contact Form Submission:', { name, email, message });
    res.redirect('/?success=true');
};
