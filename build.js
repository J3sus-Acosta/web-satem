const ejs = require('ejs');
const fs = require('fs-extra');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const viewsDir = path.join(__dirname, 'views');
const publicDir = path.join(__dirname, 'public');

// Data for the views (mirrors what's in controllers/mainController.js)
const data = {
    title: 'SATEM Soluciones Inteligentes | Consultoría TI & Automatización IA',
    path: '/'
};

async function build() {
    try {
        // 1. Clean dist directory
        await fs.emptyDir(distDir);
        console.log('Cleaned dist directory');

        // 2. Copy public assets
        await fs.copy(publicDir, distDir);
        console.log('Copied public assets');

        // 3. Render index.ejs to index.html
        const templatePath = path.join(viewsDir, 'index.ejs');
        const outputPath = path.join(distDir, 'index.html');

        // index.ejs already includes layout.ejs, so we just render it directly.
        const html = await ejs.renderFile(templatePath, {
            ...data,
            filename: templatePath
        });

        await fs.outputFile(outputPath, html);
        console.log('Generated index.html');

        // 4. Render policy.ejs to policy.html
        const policyTemplatePath = path.join(viewsDir, 'policy.ejs');
        const policyOutputPath = path.join(distDir, 'policy.html');

        const policyHtml = await ejs.renderFile(policyTemplatePath, {
            ...data,
            title: 'Política de Privacidad | SATEM Soluciones Inteligentes',
            path: '/policy',
            filename: policyTemplatePath
        });

        await fs.outputFile(policyOutputPath, policyHtml);
        console.log('Generated policy.html');

        console.log('Build complete! The "dist" folder is ready for deployment.');

    } catch (err) {
        console.error('Build failed:', err);
    }
}

build();
