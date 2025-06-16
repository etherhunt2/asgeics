export default class Header {
    constructor() {
        this.element = document.createElement('header');
        this.element.className = 'header';
    }

    async render() {
        this.element.innerHTML = `
            <div class="header__container">
                <a href="./" class="header__logo">
                    <img src="/logo.svg" alt="ASGEICS Logo" />
                    <div class="header__logo-text">
                        <span>ASGEICS INDIA</span>
                        <p class="header__logo-subtitle">We Support Your "Dream"</p>
                    </div>
                </a>

                <nav class="header__nav">
                    <a href="./" class="header__nav-link">Home</a>
                    <div class="header__nav-item gradient">
                        <a href="#" class="header__nav-link header__services-toggle">Services</a>
                        <div class="header__submenu">
                            <a href="/commercial-engineering" class="header__submenu-link">Commercial Engineering</a>
                            <a href="/electrical-engineering" class="header__submenu-link">Electrical Engineering</a>
                            <a href="/structural-engineering" class="header__submenu-link">Structural Engineering</a>
                            <a href="/design-service" class="header__submenu-link">Design Services</a>
                        </div>
                    </div>
                    <a href="./about" class="header__nav-link">About</a>
                    <a href="./contact" class="header__nav-link">Contact</a>
                    <button class="header__nav-button">
                        <a href="mailto:info@asgeicsindia.com" class="header__nav-link">Email Us</a>
                    </button>
                </nav>

                <div class="header__mobile-menu">
                    <img src="./icons/bars-solid.svg" style="height: 20px; width: 20px;">
                </div>
            </div>
        `;

        return this.element;
    }
} 