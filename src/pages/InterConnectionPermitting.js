import BaseComponent from "../components/BaseComponent.js";
import "../styles/components/interconnection-permitting.css";
import Video from "../components/Video.js";

export default class InterConnectionPermitting extends BaseComponent {
  constructor() {
    super("main", "interconnection-page");
  }

  async render() {
    const video = new Video();
    this.element.innerHTML = `
            <!-- ========== HERO SECTION ========== -->
            <section class="ic-hero">
                <div class="ic-hero__container">
                    <h1 class="ic-hero__title">AHJ <span class="orange_title445">P</span>ermitting and <span class="indigo_title445">I</span>nterconnection</h1>
                </div>
            </section>

            <!-- ========== GENERAL INFO SECTION ========== -->
            <section class="ic-general">
                <div class="ic-general__container">
                    <h2 class="ic-general__title">General Information</h2>
                    <p class="ic-general__text">We handle the full interconnection and permitting process for both residential and commercial solar systems. You receive a permit- and utility-approved project ready for installation.</p>
                </div>
            </section>

            <!-- ========== END-TO-END SECTION ========== -->
            <section class="ic-e2e">
                <div class="ic-e2e__container">
                    <div class="ic-e2e__content">
                        <h2 class="ic-e2e__title">End-to-End Interconnection & Permitting Support</h2>
                        <p class="ic-e2e__subtitle">We’ve seen it all. Radiant specializes in difficult utilities and AHJs.</p>
                        <ul class="ic-list">
                            <li>Robust portal to track all your projects</li>
                            <li>Interconnection application submission</li>
                            <li>Utility rebate applications</li>
                            <li>Direct AHJ and fire department coordination</li>
                        </ul>
                    </div>
                    <div class="ic-e2e__image">
                        <img src="/images/handshake.webp" />
                    </div>
                </div>
            </section>

            <!-- ========== DETAILS SECTION ========== -->
            <section class="ic-details">
                <div class="ic-details__container">
                    <div class="ic-details__header">
                        <h2>Permitting and Interconnection Support for Commercial and Residential Solar</h2>
                    </div>
                    <div class="ic-details__grid">
                        <div class="ic-details__image-wrap">
                            <img src="https://radiantengineer.com/wp-content/uploads/2026/02/pexels-gustavo-fring-4254157-scaled.jpg" alt="Solar Permitting Support" class="ic-details__image" />
                        </div>
                        <div class="ic-details__content">
                            <p>From initial submission to final approval, our team manages the entire AHJ permit application process. We ensure all documentation strictly aligns with local building codes, oversee plan reviews, and rapidly address agency feedback to keep your project compliant and on track.</p>
                            <h4>What’s included:</h4>
                            <ul class="ic-list">
                                <li>AHJ permit submission</li>
                                <li>Utility Interconnection application</li>
                                <li>Plan review coordination</li>
                                <li>Code-compliant documentation</li>
                                <li>Engineering revisions</li>
                                <li>Final approval support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========== STATS SECTION ========== -->
            <section class="ic-stats">
                <div class="ic-stats__container">
                    <h2 class="ic-stats__title">End-to-End Solar Interconnection and Permitting Services</h2>
                    <div class="ic-stats__grid">
                        <div class="ic-stat">
                            <div class="ic-stat__number">100%</div>
                            <div class="ic-stat__bar"><div class="ic-stat__fill"></div></div>
                        </div>
                        <div class="ic-stat">
                            <div class="ic-stat__number">ALL 50</div>
                            <div class="ic-stat__label">States and Canada</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- WhatsApp -->
            <div class="whatsapp-container">
                <a href="https://wa.link/6caatk" class="whatsapp-button">
                    <img src="./icons/whatsapp.png" alt="WhatsApp" class="whatsapp-icon">
                    <span class="whatsapp-text">Chat on WhatsApp</span>
                </a>
            </div>
        `;
    this.element.appendChild(await video.render());
    return this.element;
  }
}
