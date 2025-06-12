import BaseComponent from './BaseComponent.js';

export default class Hero extends BaseComponent {
    constructor() {
        super('section', 'hero');
        this.element.id = 'home';
    }

    async render() {
        this.element.innerHTML = `
            <div class="hero__container">
                <div class="hero__content">
                    <h1 class="hero__title">Industry's Reliable Residential<br>Solar Certificate</h1>
                    <p class="hero__subtitle">We deliver reliable & accurate structural certificate and PE stamps through<br>advanced automation</p>
                    <div class="hero__cta">
                        <a href="/services" class="hero__button">
                            <span class="hero__button-label">Explore More</span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="hero__overlay"></div>
        `;

        return this.element;
    }
} 