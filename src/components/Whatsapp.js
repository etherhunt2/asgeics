import BaseComponent from './BaseComponent.js';

export default class Whatsapp extends BaseComponent {
    constructor() {
        super('section', 'benefits');
        this.element.id = 'benefits';
    }

    async render() {
        this.element.innerHTML = `
            <div class="whatsapp-container">
                <a href="https://wa.link/6caatk" class="whatsapp-button">
                    <img src="./icons/whatsapp.png" alt="WhatsApp" class="whatsapp-icon">
                    <span class="whatsapp-text">Chat on WhatsApp</span>
                </a>
            </div>
        `;

        return this.element;
    }
} 