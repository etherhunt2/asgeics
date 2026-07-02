import BaseComponent from '../components/BaseComponent.js';
import '../styles/components/se.css';

export default class StructuralEngineering extends BaseComponent {
    constructor() {
        super('main', 'structural-engineering-page');
    }

    async render() {
        this.element.innerHTML = `
            <section class="se-hero">
                <div class="se-hero__container">
                    <h1 class="se-hero__title">Structural Engineering</h1>
                    <p class="se-hero__subtitle">Ensuring Structural Integrity for Solar Installations</p>
                </div>
            </section>

            <section class="se-services">
                <div class="se-services__container">
                    <div class="se-services__overview">
                        <h2>Comprehensive Structural Review</h2>
                        <p>Structural Engineering review plays a crucial role in the design and implementation of solar energy systems installation. Structural Engineering review is primarily responsible for assessing the structural integrity of buildings and ensuring that solar installations can safely and effectively be mounted on various structures, from residential homes to commercial buildings. Structural Engineering evaluates the building's materials, construction methods, and overall stability to determine the feasibility of solar installations.</p>
                    </div>

                    <div class="se-services__grid">
                        <div class="se-service-card">
                            <div class="se-service-card__icon">
                                <img src="/icons/structural.png" alt="Building Assessment" />
                            </div>
                            <h3>Building Assessment</h3>
                            <p>Thorough evaluation of building materials, construction methods, and overall stability</p>
                        </div>

                        <div class="se-service-card">
                            <div class="deadload">
                                <img src="images/deadload.jpeg" alt="Dead Load Analysis" />
                            </div>
                            <h3>Dead Load Analysis</h3>
                            <p>Calculation of self-weight from solar panels, mounts, and racking systems</p>
                        </div>

                        <div class="se-service-card">
                            <div class="live-load">
                                <img src="/images/live-load.jpeg" alt="Live Load Analysis" />
                            </div>
                            <h3>Live Load Analysis</h3>
                            <p>Assessment of additional weight from snow, ice, and maintenance activities</p>
                        </div>

                        <div class="se-service-card">
                            <div class="se-service-card__icon">
                                <img src="/icons/integrity.png" alt="Integrity Verification" />
                            </div>
                            <h3>Integrity Verification</h3>
                            <p>Comprehensive evaluation of structure's load-bearing capacity</p>
                        </div>
                    </div>

                    <div class="se-services__commitment">
                        <h2>Process Involved in Structural Calculations</h2>
                        <p>When considering a structural review report, we provide the calculation of the dead load and live load imposed on the structure by a photovoltaic (PV) system. Dead load comprises the self-weight of the solar panels, mounts, and racking systems. Live load is the additional weight imposed on the structure, such as that from snow, ice, and maintenance activities. These two loads determine the potential load capacity the structure can handle without compromising its integrity.</p>
                    </div>
                </div>
            </section>

            <section class="cta">
                <div class="cta__container">
                    <h2>Ready to Get Started?</h2>
                    <p>Let our expert team handle your structural engineering review needs</p>
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
