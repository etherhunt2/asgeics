import BaseComponent from './BaseComponent.js';

export default class Process extends BaseComponent {
    constructor() {
        super('section', 'process');
        this.element.id = 'process';
    }

    async render() {
        this.element.innerHTML = `
            <div class="process__container">
                <header class="process__header">
                    <h2 class="process__title">How It Works</h2>
                    <p class="process__subtitle">Our simple three-step process to get your project completed</p>
                </header>

                <div class="process__steps">
                    <div class="process-step">
                        <div class="process-step__number">1</div>
                        <h3 class="process-step__title">Submit Your Project</h3>
                        <p class="process-step__description">Upload your plans and project details through our portal.</p>
                    </div>

                    <div class="process-step">
                        <div class="process-step__number">2</div>
                        <h3 class="process-step__title">Review & Engineering</h3>
                        <p class="process-step__description">Our engineers review and prepare your structural certificate or stamp.</p>
                    </div>

                    <div class="process-step">
                        <div class="process-step__number">3</div>
                        <h3 class="process-step__title">Receive Your Certificate</h3>
                        <p class="process-step__description">Get your stamped certificate delivered to your inbox, fast and accurate.</p>
                    </div>
                </div>
            </div>
        `;

        return this.element;
    }
} 