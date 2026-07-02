import BaseComponent from '../components/BaseComponent.js';
import '../styles/components/ee.css';

export default class ElectricalEngineering extends BaseComponent {
    constructor() {
        super('main', 'electrical-engineering-page');
    }

    async render() {
        this.element.innerHTML = `
            <section class="ee-hero">
                <div class="ee-hero__container">
                    <h1 class="ee-hero__title">Electrical Engineering</h1>
                    <p class="ee-hero__subtitle">Ensuring Safety and Compliance in Solar Design</p>
                </div>
            </section>

            <section class="ee-services">
                <div class="ee-services__container">
                    <div class="ee-services__overview">
                        <h2>Comprehensive Electrical Review</h2>
                        <p>Electrical Engineering review plays a vital role for solar electrical aspects of designs. Our engineering team ensures the interconnection and equipment's calculations passed all compliances with the detailed checked of National Electrical Code (NEC) and local regulations.</p>
                    </div>

                    <div class="ee-services__grid">
                        <div class="ee-service-card">
                            <div class="ee-service-card__icon">
                                <img src="/icons/eedesign.png" alt="Interconnection Diagram" />
                            </div>
                            <h3>Interconnection Design</h3>
                            <p>Detailed Single/three line interconnection diagram development ensuring proper system integration</p>
                        </div>

                        <div class="ee-service-card">
                            <div class="ee-service-card__icon">
                                <img src="/icons/ups.png" alt="Voltage Analysis" />
                            </div>
                            <h3>Voltage Analysis</h3>
                            <p>Comprehensive voltage drop calculations to ensure optimal system performance</p>
                        </div>

                        <div class="ee-service-card">
                            <div class="ee-service-card__icon">
                                <img src="/icons/feedback-icon.png" alt="Back Feed Analysis" />
                            </div>
                            <h3>Back Feed Analysis</h3>
                            <p>Thorough back feed calculations to maintain grid stability and safety</p>
                        </div>

                        <div class="ee-service-card">
                            <div class="ee-service-card__icon">
                                <img src="/icons/wire.png" alt="Wire Sizing" />
                            </div>
                            <h3>Wire Sizing</h3>
                            <p>Precise wire size calculations to ensure efficient power transmission</p>
                        </div>
                    </div>

                    <div class="ee-services__commitment">
                        <h2>Our Commitment</h2>
                        <p>Our goal is to ensure the safety, efficiency, and optimal performance of your solar energy system. We maintain rigorous standards in our electrical engineering reviews to guarantee compliance and system reliability.</p>
                    </div>
                </div>
            </section>

            <section class="cta">
                <div class="cta__container">
                    <h2>Ready to Get Started?</h2>
                    <p>Let our expert team handle your electrical engineering review needs</p>
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

        // Add WhatsApp component
        // const whatsapp = new Whatsapp();
        // this.element.appendChild(await whatsapp.render());

        return this.element;
    }
}
