import BaseComponent from './BaseComponent.js';

export default class Services extends BaseComponent {
    constructor() {
        super('section', 'services');
        this.element.id = 'services';
    }

    async render() {
        this.element.innerHTML = `
            <div class="services__container">
                <header class="services__header">
                    <h2 class="services__title">We Offer</h2>
                    <p class="services__subtitle">Discover how we can help your business grow with our comprehensive solutions</p>
                </header>

                <div class="services__grid">
                    <div class="service-card">
                        <div class="service-card__icon">
                            <img src="./icons/solar-panel.png" alt="Solar Design" style="width: 40%;">
                        </div>
                        <h3 class="service-card__title">Solar Design</h3>
                        <p class="service-card__description">Expert solar system design optimized for maximum efficiency and performance</p>
                    </div>

                    <div class="service-card">
                        <div class="service-card__icon">
                            <img src="./icons/file-sign.png" alt="PE Stamping" style="width: 40%;">
                        </div>
                        <h3 class="service-card__title">PE Stamping</h3>
                        <p class="service-card__description">Professional engineering stamps and certifications for your projects</p>
                    </div>

                    <div class="service-card">
                        <div class="service-card__icon">
                            <img src="./icons/clipboard.png" alt="Permit Processing" style="width: 40%;">
                        </div>
                        <h3 class="service-card__title">Permit Processing</h3>
                        <p class="service-card__description">Streamlined permit application and processing services</p>
                    </div>
                </div>
            </div>
        `;

        return this.element;
    }
} 