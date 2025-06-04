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
                    <h1 class="hero__title">Welcome to ASGEICS INDIA</h1>
                    <p class="hero__subtitle">Empowering Your Business with Innovative Solutions</p>
                    <div class="hero__cta">
                        <a href="#services" class="btn hero__button hero__button--primary">Our Services</a>
                        <a href="#contact" class="btn hero__button hero__button--secondary">Contact Us</a>
                    </div>
                </div>
            </div>
            <div class="hero__image">
                <img src="/images/hero-image.png" alt="Hero Image">
            </div>
            <div class="hero__background">
                <div class="hero__shape hero__shape--1"></div>
                <div class="hero__shape hero__shape--2"></div>
            </div>
        `;

        return this.element;
    }
} 