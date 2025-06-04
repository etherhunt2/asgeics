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
                    <p class="benefits__subtitle">Experience the advantages of working with industry leaders</p>
                </header>

                <div class="benefits__grid">
                    <div class="benefit-card">
                        <div class="benefit-card__icon">
                            <img src="./icons/circle-check-regular.svg" alt="First-Time Approval" style="width: 4.5rem; height: 6.5rem;" />
                        </div>
                        <h3 class="benefit-card__title">99.9% First-Time Approval</h3>
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
                        <h3 class="benefit-card__title">Zero AHJ Rejection</h3>
                        <p class="benefit-card__description">Full credit if your letter is rejected by the AHJ.</p>
                    </div>
                </div>
            </div>
        `;

        return this.element;
    }
} 