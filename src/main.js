// Import styles
import './styles/main.css';
import './styles/components/header.css';
import './styles/components/hero.css';
import './styles/components/services.css';
import './styles/components/process.css';
import './styles/components/benefits.css';
import './styles/components/testimonials.css';
import './styles/components/contact.css';
import './styles/components/footer.css';
import './styles/components/about.css';
import './styles/components/whatsapp.css';
import './styles/components/ee.css';

import { initializeMobileMenu, initializeHeaderScroll } from './js/shared.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import ElectricalEngineering from './pages/ElectricalEngineering.js';
import Contact from './pages/Contact.js';

// Router configuration
const routes = {
    '/': Home,
    '/about': About,
    '/contact': Contact,
    '/electrical-engineering': ElectricalEngineering
};

// App container
const app = document.getElementById('app');

// Render function
async function render() {
    // Get current route
    const path = window.location.pathname === '/' ? '/' : window.location.pathname.replace(/\/$/, '');
    const Page = routes[path] || Home;

    // Clear app container
    app.innerHTML = '';

    // Render header
    const header = new Header();
    app.appendChild(await header.render());

    // Render page content
    const page = new Page();
    app.appendChild(await page.render());

    // Render footer
    const footer = new Footer();
    app.appendChild(await footer.render());

    // Initialize functionality
    initializeMobileMenu();
    initializeHeaderScroll();
}

// Handle navigation
window.addEventListener('popstate', render);
document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation clicks
    document.addEventListener('click', e => {
        const { target } = e;
        if (target.matches('a') && target.href.startsWith(window.location.origin)) {
            e.preventDefault();
            window.history.pushState({}, '', target.href);
            render();
        }
    });

    // Initial render
    render();
}); 