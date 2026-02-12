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

        // We need to pass the 'filename' option so EJS can resolve includes (like layout.ejs)
        const html = await ejs.renderFile(templatePath, {
             ...data,
             filename: templatePath 
        });

        // The layout.ejs uses <%- body %> to include content. 
        // However, express-ejs-layouts usually handles this differently.
        // Let's check if the project uses express-ejs-layouts or standard include.
        // Based on app.js not importing express-ejs-layouts, it likely uses standard includes 
        // OR the layout.ejs is the main entry point that includes the body?
        // Wait, app.js says: app.set('view engine', 'ejs');
        // And layout.ejs has <%- body %>. This suggests it might be using a layout system
        // checking package.json... it has 'ejs' and 'express' but no 'express-ejs-layouts'.
        // 
        // Let's re-read layout.ejs and index.ejs to see how they relate.
        // If index.ejs extends layout, or vice versa.
        
        // Actually, looking at app.js, it just does res.render('index'). 
        // If there is no layout middleware, 'index.ejs' is rendered directly.
        // If 'index.ejs' contains <html> tags, it's a full page.
        // If 'index.ejs' is just a fragment, then there must be a mechanism including it.
        // The layout.ejs file I saw earlier has <%- body %>. This is typical of express-ejs-layouts.
        // But I don't see that package installed or used in app.js.
        // Let's assume for a moment that we need to render 'layout.ejs' and pass 'index.ejs' content as 'body'.
        
        const indexContent = await ejs.renderFile(templatePath, { ...data, filename: templatePath });
        const layoutPath = path.join(viewsDir, 'layout.ejs');
        const finalHtml = await ejs.renderFile(layoutPath, {
            ...data,
            body: indexContent,
            filename: layoutPath
        });

        await fs.outputFile(outputPath, finalHtml);
        console.log('Generated index.html');

        console.log('Build complete! The "dist" folder is ready for deployment.');

    } catch (err) {
        console.error('Build failed:', err);
    }
}

build();
