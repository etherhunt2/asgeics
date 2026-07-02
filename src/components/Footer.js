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
                        <a href="./" class="footer__logo">ASGEICS INDIA</a>
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
                            <li class="footer__link"><a href="/commercial-engineering">Commercial Engineering</a></li>
                            <li class="footer__link"><a href="/structural-engineering">Structural Engineering</a></li>
                            <li class="footer__link"><a href="/electrical-engineering">Electrical Engineering</a></li>
                            <li class="footer__link"><a href="/design-service">Design Services</a></li>
                            <li class="footer__link"><a href="/about">About Us</a></li>
                        </ul>
                    </div>

                    <div class="footer__section">
                        <h3 class="footer__title">Contact Info</h3>
                        <ul class="footer__links">
                            <li class="footer__link" onclick="window.location.href='mailto:info@asgeicsindia.com'" style="cursor: pointer;">Email: info@asgeicsindia.com</li>
                            
                            <li class="footer__link" style="margin-top: 8px; font-weight: 600;">US Office</li>
                            <li class="footer__link">Address: 30 N Gould St Sheridan, WY 82801</li>
                            <li class="footer__link" onclick="window.location.href='tel:+12534008394'" style="cursor: pointer;">Phone: (253) 400-8394</li>
                            
                            <li class="footer__link" style="margin-top: 8px; font-weight: 600;">India Office</li>
                            <li class="footer__link">Address: Plot 231, Sahu Tola, Marar, Ramgarh, Jharkhand 829122</li>
                            <li class="footer__link" onclick="window.location.href='tel:+918587011172'" style="cursor: pointer;">Phone: +91 858 701 1172</li>
                        </ul>
                    </div>
                </div>

                <!--<div class="footer__bottom">
                    <p class="footer__copyright">&copy; 2024 ASGEICS. All rights reserved. Designed by Sharnagat Yogesh</p>
                </div>-->
            </div>
        `;

        return this.element;
    }
} 