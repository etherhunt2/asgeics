import BaseComponent from '../components/BaseComponent.js';
import '../styles/components/ds.css';

export default class DesignService extends BaseComponent {
    constructor() {
        super('main', 'design-service-page');
    }

    async render() {
        this.element.innerHTML = `
            <section class="de-hero">
                <div class="de-hero__container">
                    <h1 class="de-hero__title">Design Services</h1>
                    <p class="de-hero__subtitle">Comprehensive Solar Permit Design Solutions</p>
                </div>
            </section>

            <section class="de-services">
                <div class="de-services__container">
                    <div class="de-services__overview">
                        <h2>Solar Permit Design Excellence</h2>
                        <p>We provide comprehensive solar permit design services that streamline the approval process for solar installers. Our detailed solar plansets are tailored to residential, commercial, EV charging infrastructure, and utility-scale projects, covering everything from energy storage systems (ESS) to rooftop and ground-mounted solar installations.</p>
                    </div>

                    <div class="de-services__grid">
                        <div class="de-service-card">
                            <div class="de-service-card__icon">
                                <img src="/icons/permit.png" alt="Permit Design" />
                            </div>
                            <h3>Comprehensive Documentation</h3>
                            <p>Detailed cover sheets, site plans, and roof plans featuring complete module and attachment specifications</p>
                        </div>

                        <div class="de-service-card">
                            <div class="de-service-card__icon">
                                <img src="/icons/file-sign.png" alt="Electrical Design" />
                            </div>
                            <h3>Electrical Documentation</h3>
                            <p>Single and three-line diagrams with precise electrical calculations</p>
                        </div>

                        <div class="de-service-card">
                            <div class="de-service-card__icon">
                                <img src="/icons/deadline.png" alt="Fast Turnaround" />
                            </div>
                            <h3>12-Hour Turnaround*</h3>
                            <p>Industry-leading response time to keep your projects on track without delays</p>
                        </div>

                        <div class="de-service-card">
                            <div class="de-service-card__icon">
                                <img src="/icons/approved.png" alt="High Approval Rate" />
                            </div>
                            <h3>99.1% Approval Rate</h3>
                            <p>High AHJ approval rate with free revisions to meet your expectations perfectly</p>
                        </div>
                    </div>

                    <div class="de-services__commitment">
                        <h2>Our Commitment</h2>
                        <p>We know how important speed is in the permitting process. That's why we offer an industry-leading turnaround time of just 12 hours* for our solar permit designs, allowing you to keep your projects on track without delays, and free revisions to ensure that your project meets your expectations perfectly.</p>
                    </div>
                </div>
            </section>

            <section class="cta">
                <div class="cta__container">
                    <h2>Ready to Get Started?</h2>
                    <p>Let our expert team handle your solar permit design needs</p>
                    <a href="/contact" class="cta__button">Contact Us Today</a>
                </div>
            </section>
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
