export default class Footer {
    constructor() {
        this.element = document.createElement('footer');
        this.element.className = 'footer';
    }

    async render() {
        this.element.innerHTML = `
            <div class="footer__container">
                <div class="footer__content">
                    <div class="footer__section">
                        <a href="./" class="footer__logo">ASGEICS</a>
                        <p class="footer__description">Professional engineering services for your solar and structural needs.</p>
                        <div class="footer__social">
                            <a href="#" class="footer__social-link"><img src="./icons/facebook.png" /></a>
                            <a href="#" class="footer__social-link"><img src="./icons/instagram.png" /></a>
                            <a href="#" class="footer__social-link"><img src="./icons/twitter.png" /></a>
                            <a href="#" class="footer__social-link"><img src="./icons/linkedin.png" /></a>
                        </div>
                    </div>

                    <div class="footer__section">
                        <h3 class="footer__title">Quick Links</h3>
                        <ul class="footer__links">
                            <li class="footer__link"><a href="#services">Services</a></li>
                            <li class="footer__link"><a href="#process">Process</a></li>
                            <li class="footer__link"><a href="#benefits">Benefits</a></li>
                            <li class="footer__link"><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div class="footer__section">
                        <h3 class="footer__title">Contact Info</h3>
                        <ul class="footer__links">
                            <li class="footer__link">Email: info@asgeics.com</li>
                            <li class="footer__link">Phone: (555) 123-4567</li>
                            <li class="footer__link">Address: 123 Main St, City, State</li>
                        </ul>
                    </div>
                </div>

                <div class="footer__bottom">
                    <p class="footer__copyright">&copy; 2024 ASGEICS. All rights reserved. Designed by Sharnagat Yogesh</p>
                </div>
            </div>
        `;

        return this.element;
    }
} 