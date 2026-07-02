import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Plugin to handle HTML components
function htmlComponentsPlugin() {
    return {
        name: 'html-components',
        transformIndexHtml(html) {
            // Replace component placeholders with actual content
            const componentRegex = /<div id="([^"]+)-placeholder"><\/div>/g;
            return html.replace(componentRegex, (match, id) => {
                const componentPath = resolve(__dirname, `src/components/${id}.html`);
                try {
                    const content = fs.readFileSync(componentPath, 'utf-8');
                    return content;
                } catch (error) {
                    console.warn(`Component ${id} not found at ${componentPath}`);
                    return match;
                }
            });
        }
    };
}

export default defineConfig({
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        emptyOutDir: true,
        copyPublicDir: true
    },
    plugins: [htmlComponentsPlugin()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    server: {
        open: true,
        // Handle SPA routing
        historyApiFallback: true
    },
    publicDir: 'public',
    base: './'
}); 