import BaseComponent from '../components/BaseComponent.js';
import '../styles/components/ce.css';

export default class CommercialEngineering extends BaseComponent {
    constructor() {
        super('main', 'commercial-engineering-page');
    }

    async render() {
        this.element.innerHTML = `
            <section class="ce-hero">
                <div class="ce-hero__container">
                    <h1 class="ce-hero__title">Commercial Engineering</h1>
                    <p class="ce-hero__subtitle">Specialized Solar Solutions for Business</p>
                </div>
            </section>

            <section class="ce-services">
                <div class="ce-services__container">
                    <div class="ce-services__overview">
                        <h2>Commercial Solar Solutions</h2>
                        <p>Commercial and Industrial solar systems are specifically designed based on a business’s energy consumption and/or available space to install PV panels/modules. Commercial system design review includes large and small scale systems. While some commercial system might have rooftops are typically metal constructions with much sun exposure, others could be limited and it may not be profitable to install solar panels on the entire roof where we suggest clients to utilize parking lot space through the construction of parking canopies/carport design,</p>
                    </div>

                    <div class="ce-services__grid">
                        <div class="ce-service-card">
                            <div class="ce-service-card__icon">
                                <img src="/icons/roof.png" alt="Rooftop Solutions" />
                            </div>
                            <h3>Rooftop Solutions</h3>
                            <p>Specialized designs for metal roof constructions with optimal sun exposure and ballast systems for minimal penetration</p>
                        </div>

                        <div class="ce-service-card">
                            <div class="ce-service-card__icon">
                                <img src="/icons/parking-car.png" alt="Parking Canopies" />
                            </div>
                            <h3>Parking Canopies</h3>
                            <p>Innovative carport designs utilizing parking lot space for solar installation</p>
                        </div>

                        <div class="ce-service-card">
                            <div class="ground-mount">
                                <img src="/images/ground-mount.jpeg" alt="Ground Mount" />
                            </div>
                            <h3>Ground Mount Systems</h3>
                            <p>Custom solutions for utilizing extra land near business locations</p>
                        </div>

                        <div class="ce-service-card">
                            <div class="bs-class">
                                <img src="/icons/solar-ballast.png" alt="Ballast Systems" />
                            </div>
                            <h3>Ballast Systems</h3>
                            <p>Specialized designs for minimal roof penetration while maintaining system stability</p>
                        </div>
                    </div>

                    <div class="ce-services__commitment">
                        <h2>Our Approach</h2>
                        <p>while others try to utilize extra land that they might own at or near their business locations and if that not possible, then we go for ground mount systems. Our maximum commercial projects involves ballast systems that are designed to allow for minimal penetration points on the roof.</p>
                    </div>
                </div>
            </section>

            <section class="cta">
                <div class="cta__container">
                    <h2>Ready to Get Started?</h2>
                    <p>Let's our expert team handle your commercial solar engineering needs</p>
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
