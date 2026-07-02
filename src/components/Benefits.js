import BaseComponent from './BaseComponent.js';

export default class Benefits extends BaseComponent {
    constructor() {
        super('section', 'benefits');
        this.element.id = 'benefits';
    }

    async render() {
        this.element.innerHTML = `
            <div class="benefits__container">
                <header class="benefits__header">
                    <h2 class="benefits__title">Why Choose Us</h2>
                    <p class="benefits__subtitle">Select The Right Solar Engineering Services is Important for Your Project's Success</p>
                </header>

                <div class="benefits__grid">
                    <div class="benefit-card">
                        <div class="benefit-card__icon">
                            <img src="./icons/circle-check-regular.svg" alt="First-Time Approval" style="width: 4.5rem; height: 6.5rem;" />
                        </div>
                        <h3 class="benefit-card__title">99.9% AHJ Approval</h3>
                        <p class="benefit-card__description">Industry-leading approval rating for your peace of mind.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-card__icon">
                            <img src="./icons/bolt-solid.svg" alt="First-Time Approval" style="width: 4.5rem; height: 6.5rem;" />
                        </div>
                        <h3 class="benefit-card__title">Fastest Turnaround</h3>
                        <p class="benefit-card__description">Letters delivered by the next business day or sooner.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-card__icon">
                            <img src="./icons/dollar-sign-solid.svg" alt="First-Time Approval" style="width: 4.5rem; height: 6.5rem;" />
                        </div>
                        <h3 class="benefit-card__title">Lowest Price Guarantee</h3>
                        <p class="benefit-card__description">We match or beat any competitor's price. Volume discounts available.</p>
                    </div>

                    <div class="benefit-card">
                        <div class="benefit-card__icon">
                            <img src="./icons/shield-solid.svg" alt="First-Time Approval" style="width: 4.5rem; height: 6.5rem;" />
                        </div>
                        <h3 class="benefit-card__title">Zero Utility Rejection</h3>
                        <p class="benefit-card__description">Free Revisions if your certificate is rejected.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-card__icon">
                            <img src="./icons/piggy-bank-save.svg" alt="50% Cost Saving" style="width: 4.5rem; height: 6.5rem;" />
                        </div>
                        <h3 class="benefit-card__title">50% Cost Saving</h3>
                        <p class="benefit-card__description">Save 50% on your solar certificate and PE stamps.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-card__icon">
                            <img src="./icons/payment-method.svg" alt="Flexible Payment Options" style="width: 4.5rem; height: 6.5rem;" />
                        </div>
                        <h3 class="benefit-card__title">Flexible Payment Options</h3>
                        <p class="benefit-card__description">Pay as you go or pay in advance.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-card__icon">
                            <img src="./icons/stats.svg" alt="Real-Time Progress Tracking" style="width: 4.5rem; height: 6.5rem;" />
                        </div>
                        <h3 class="benefit-card__title">Real-Time Progress Tracking</h3>
                        <p class="benefit-card__description">Track your project's progress in real-time.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-card__icon">
                            <img src="./icons/html-templates.svg" alt="Customized Templates" style="width: 4.5rem; height: 6.5rem;" />
                        </div>
                        <h3 class="benefit-card__title">Customized Templates</h3>
                        <p class="benefit-card__description">Create your own templates or use our pre-made templates.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-card__icon">
                            <img src="./icons/truck-load.svg" alt="Large Volume Capacity" style="width: 4.5rem; height: 6.5rem;" />
                        </div>
                        <h3 class="benefit-card__title">Large Volume Capacity</h3>
                        <p class="benefit-card__description">We can handle large volumes of projects.</p>
                    </div>
                    <div class="benefit-card">
                        <div class="benefit-card__icon">
                            <img src="./icons/support-online-center.svg" alt="24/7 Support" style="width: 4.5rem; height: 6.5rem;" />
                        </div>
                        <h3 class="benefit-card__title">24/7 Support</h3>
                        <p class="benefit-card__description">We are always here to help you.</p>
                    </div>
                </div>
            </div>
        `;

        return this.element;
    }
} 