exports.getIndex = (req, res) => {
    res.render('index', {
        title: 'SATEM Soluciones Inteligentes | Consultoría TI & Automatización IA',
        path: '/'
    });
};

exports.postContact = (req, res) => {
    // Here we would handle form submission (e.g., sending email with nodemailer)
    // For now, we just redirect back to home with a success query param
    const { name, email, message } = req.body;
    console.log('Contact Form Submission:', { name, email, message });
    res.redirect('/?success=true');
};
