import BaseComponent from "../components/BaseComponent.js";
import "../styles/components/site-survey.css";

export default class SiteSurvey extends BaseComponent {
  constructor() {
    super("main", "site-survey-page");
  }

  async render() {
    this.element.innerHTML = `
            <!-- ========== HERO SECTION ========== -->
            <section class="ss-hero">
                <div class="ss-hero__container">
                    <h1 class="ss-hero__title">Actionable Property Data <span>at Scale</span></h1>
                    <p class="ss-hero__subtitle">ASGEICS combines a nationwide network of skilled technicians with cutting-edge technology to deliver swift, precise field insights directly to you, driving faster and smarter project decisions across industry.</p>
                    <div class="ss-hero__buttons">
                        <a href="/get-started" class="ss-hero__btn ss-hero__btn--primary">Get Started</a>
                    </div>
                </div>
            </section>

            <!-- ========== SERVICES SECTION ========== -->
            <section class="ss-services">
                <div class="ss-services__container">
                    <div class="ss-services__header">
                        <h2 class="ss-services__title"><span>Services Built For</span> Your Industry</h2>
                        <p class="ss-services__description">Regardless of your industry, ASGEICS's services & solutions are built to capture the data you need quickly, accurately, and reliably.</p>
                    </div>
                    <div class="ss-services__grid">
                        <!-- Solar Card -->
                        <div class="ss-service-card">
                            <div class="ss-service-card__image-wrap">
                                <img src="https://ensiteservices.com/wp-content/uploads/2026/02/ensite-solar.webp" alt="Solar Site Survey" />
                                <div class="ss-service-card__label">Solar</div>
                            </div>
                            <div class="ss-service-card__info">
                                <p>Comprehensive pre-install solar site surveys with CAD-ready data outputs.</p>
                                <a href="/solar" class="ss-service-card__btn">Solutions for Solar</a>
                            </div>
                        </div>
                        <!-- Roofing Card -->
                        <div class="ss-service-card">
                            <div class="ss-service-card__image-wrap">
                                <img src="https://ensiteservices.com/wp-content/uploads/2026/02/ensite-roofing.webp" alt="Roofing Site Survey" />
                                <div class="ss-service-card__label">Roofing</div>
                            </div>
                            <div class="ss-service-card__info">
                                <p>Detailed roof inspections and measurements to support bids, warranties, and repairs.</p>
                                <a href="/roofing" class="ss-service-card__btn">Solutions for Roofing</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========== FIELD INTELLIGENCE SECTION ========== -->
            <section class="ss-field">
                <div class="ss-field__container">
                    <div class="ss-field__header">
                        <h2 class="ss-field__title">The Field Intelligence <span>Disconnect</span></h2>
                        <p class="ss-field__description">Even the most advanced systems break down where projects meet the real world — at the property itself, where accuracy, visibility, and speed matter most.</p>
                    </div>
                    <div class="ss-field__compare">
                        <!-- Disjointed Box -->
                        <div class="ss-field__box">
                            <div class="ss-field__box-header">
                                <img src="https://ensiteservices.com/wp-content/uploads/2025/10/7.png" alt="Disjointed Operations" />
                                <h4>Disjointed field operations</h4>
                            </div>
                            <ul class="ss-field__box-list">
                                <li><span class="icon-minus">✖</span> Hours or days spent coordinating with different vendors</li>
                                <li><span class="icon-minus">✖</span> Limited visibility into the field</li>
                                <li><span class="icon-minus">✖</span> Delays, rework, and unverified data</li>
                                <li><span class="icon-minus">✖</span> Disjointed handling process</li>
                                <li><span class="icon-minus">✖</span> Nonstandard deliverables</li>
                            </ul>
                        </div>
                        <!-- Arrow -->
                        <div class="ss-field__arrow">
                            <img src="https://ensiteservices.com/wp-content/uploads/2025/10/next.png" alt="Arrow" />
                        </div>
                        <!-- Connected Box -->
                        <div class="ss-field__box">
                            <div class="ss-field__box-header">
                                <img src="https://ensiteservices.com/wp-content/uploads/2025/10/6.png" alt="Connected Intelligence" />
                                <h4>Connected field intelligence</h4>
                            </div>
                            <ul class="ss-field__box-list">
                                <li><span class="icon-check">✔</span> 24-48 hr nationwide dispatch through a single, reliable network</li>
                                <li><span class="icon-check">✔</span> Real-time visibility with central intelligence hub</li>
                                <li><span class="icon-check">✔</span> Verified field data captured and validated for quality in real time</li>
                                <li><span class="icon-check">✔</span> Standardized workflows and consistent deliverables across every technician</li>
                                <li><span class="icon-check">✔</span> Structured outputs ready for next steps​</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========== SPEED AND ACCURACY SECTION ========== -->
            <section class="ss-speed">
                <div class="ss-speed__container">
                    <div class="ss-speed__header">
                        <h2 class="ss-speed__title"><span>Speed and Accuracy</span>on Every Property</h2>
                        <p class="ss-speed__subtitle">ASGEICS connects your business to in-field data collection with consistency, speed, and verified accuracy for every project.</p>
                    </div>
                    <div class="ss-speed__rows">
                        <!-- Row 1: Nationwide Dispatch -->
                        <div class="ss-speed__row">
                            <div class="ss-speed__image-col">
                                <img src="./images/nationwide_dispatch.png" alt="Nationwide Dispatch" />
                            </div>
                            <div class="ss-speed__text-col">
                                <h3>Nationwide Dispatch</h3>
                                <p class="ss-speed__row-subtitle">Deploy qualified, local technicians in all 50 states within 24 to 48 hours.</p>
                                <ul class="ss-speed__list">
                                    <li><span class="ss-speed__bullet">✔</span> Fast turnaround times</li>
                                    <li><span class="ss-speed__bullet">✔</span> Technicians in every major US market</li>
                                    <li><span class="ss-speed__bullet">✔</span> Consistent coverage and scale</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Row 2: On-the-Ground Expertise -->
                        <div class="ss-speed__row ss-speed__row--reverse">
                            <div class="ss-speed__image-col">
                                <img src="./images/ground_expertise.png" alt="On-The-Ground Expertise" />
                            </div>
                            <div class="ss-speed__text-col">
                                <h3>On-The-Ground Expertise</h3>
                                <p class="ss-speed__row-subtitle">Our network of professional technicians capture ground-truth data on-site.</p>
                                <ul class="ss-speed__list">
                                    <li><span class="ss-speed__bullet">✔</span> Standardized data capture processes</li>
                                    <li><span class="ss-speed__bullet">✔</span> Background-checked and certified techs</li>
                                    <li><span class="ss-speed__bullet">✔</span> Complete interior and exterior documentation</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Row 3: Verified Accuracy -->
                        <div class="ss-speed__row">
                            <div class="ss-speed__image-col">
                                <img src="./images/verified_accuracy.png" alt="Verified Accuracy" />
                            </div>
                            <div class="ss-speed__text-col">
                                <h3>Verified Accuracy</h3>
                                <p class="ss-speed__row-subtitle">Every site survey goes through a multi-point quality assurance check before delivery.</p>
                                <ul class="ss-speed__list">
                                    <li><span class="ss-speed__bullet">✔</span> Human QA validation</li>
                                    <li><span class="ss-speed__bullet">✔</span> High precision dimensional checks</li>
                                    <li><span class="ss-speed__bullet">✔</span> Accurate roof and electrical reports</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Row 4: Seamless Workflows -->
                        <div class="ss-speed__row ss-speed__row--reverse">
                            <div class="ss-speed__image-col">
                                <img src="./images/seamless_workflows.png" alt="Seamless Workflows" />
                            </div>
                            <div class="ss-speed__text-col">
                                <h3>Seamless Workflows</h3>
                                <p class="ss-speed__row-subtitle">Order, track, and download site surveys directly within the ASGEICS platform.</p>
                                <ul class="ss-speed__list">
                                    <li><span class="ss-speed__bullet">✔</span> API integration with existing CRM</li>
                                    <li><span class="ss-speed__bullet">✔</span> Custom checklist templates</li>
                                    <li><span class="ss-speed__bullet">✔</span> Real-time updates and notifications</li>
                                </ul>
                            </div>
                        </div>

                        <!-- Row 5: Aerial Intelligence (Styled as Card) -->
                        <div class="ss-speed__row ss-speed__row--card">
                            <div class="ss-speed__image-col">
                                <img src="./images/aerial_intelligence.png" alt="Aerial Intelligence" />
                            </div>
                            <div class="ss-speed__text-col">
                                <h3>Aerial Intelligence</h3>
                                <p class="ss-speed__row-subtitle">Get high-resolution imagery and 3D models for complete property context without setting foot on site.</p>
                                <ul class="ss-speed__list">
                                    <li><span class="ss-speed__bullet">✔</span> Complete roof measurements and obstruction maps</li>
                                    <li><span class="ss-speed__bullet">✔</span> Shading analysis for solar potential</li>
                                    <li><span class="ss-speed__bullet">✔</span> Detailed CAD and design-ready files</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========== STATS SECTION ========== -->
            <section class="ss-stats">
                <div class="ss-stats__container">
                    <div class="ss-stats__header">
                        <h2 class="ss-stats__title">Industry leaders trust ASGEICS everyday for <br><span>ACTIONABLE PROPERTY DATA</span></h2>
                    </div>
                    <div class="ss-stats__card">
                        <div class="ss-stats__grid">
                            <div class="ss-stat">
                                <span class="ss-stat__number">180+</span>
                                <span class="ss-stat__label">Businesses<br>Trust on ASGEICS</span>
                            </div>
                            <div class="ss-stat">
                                <span class="ss-stat__number">23,000+</span>
                                <span class="ss-stat__label">Work Orders<br>Completed</span>
                            </div>
                            <div class="ss-stat">
                                <span class="ss-stat__number">500+</span>
                                <span class="ss-stat__label">Active </br> Technicians</span>
                            </div>
                            <div class="ss-stat">
                                <span class="ss-stat__number"><48 Hours</span>
                                <span class="ss-stat__label">Turnaround Time</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========== SURVEY CHECKLIST TABLE ========== -->
            <section class="ss-checklist">
                <div class="ss-checklist__container">
                    <div class="ss-checklist__header">
                        <h2 class="ss-checklist__title"><span>Data standards</span> by Industry</h2>
                    </div>
                    <div class="ss-checklist__table-wrap">
                        <table class="ss-checklist__table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Solar</th>
                                    <th>Insurance</th>
                                    <th>Roofing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span class="item-title">Property Exterior Photos</span>
                                        <span class="item-desc">Walk around photos for entire structure(s) with elevation</span>
                                    </td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Property Exterior Damage</span>
                                        <span class="item-desc">Damage to siding, gutters, gutter downspouts, windows, fencing</span>
                                    </td>
                                    <td></td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Property Interior Photos</span>
                                        <span class="item-desc">Water, fire, or other damage to interior framing, structural, drywall, doors</span>
                                    </td>
                                    <td></td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Roof Dimensions</span>
                                        <span class="item-desc">Roof dimensions for entire roof or facets of interest</span>
                                    </td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td></td>
                                    <td><span class="ss-check">✔</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Roof Damage Assessment</span>
                                        <span class="item-desc">Document and highlight wind, hail, or other storm damage</span>
                                    </td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Roof Obstructions</span>
                                        <span class="item-desc">Document and map roof facet obstructions on X-Y coordinates</span>
                                    </td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Existing Electrical (incl. PV)</span>
                                        <span class="item-desc">Document structure(s) existing electrical equipment & ratings, wire size</span>
                                    </td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td></td>
                                    <td><span class="ss-check">✔</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Heavy Load Appliances</span>
                                        <span class="item-desc">Document location, model, and labels for heavy load appliances</span>
                                    </td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Attic Structural Dimensions</span>
                                        <span class="item-desc">Rafter span & sizing</span>
                                    </td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td></td>
                                    <td><span class="ss-check">✔</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Attic Damage</span>
                                        <span class="item-desc">Damage to attic from mold, water, fire, termites, or other</span>
                                    </td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Attic Structural Photos/Overall</span>
                                        <span class="item-desc">Overall attic structural layout</span>
                                    </td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">HVAC/Ducting</span>
                                        <span class="item-desc">Document and photograph HVAC units, ducting layouts, and nameplates</span>
                                    </td>
                                    <td></td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Utility Gas & Electrical</span>
                                        <span class="item-desc">Document utility meter locations, main breaker sizes, and gas line paths</span>
                                    </td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Existing Battery/Generator</span>
                                        <span class="item-desc">Identify and photograph existing backup power systems, batteries, and transfer switches</span>
                                    </td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>
                                        <span class="item-title">Site map/plan</span>
                                        <span class="item-desc">Create a detailed overhead sketch of property layouts, access points, and structures</span>
                                    </td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                    <td><span class="ss-check">✔</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <!-- ========== HOW IT WORKS SECTION ========== -->
            <section class="ss-how">
                <div class="ss-how__container">
                    <div class="ss-how__header">
                        <h2 class="ss-how__title"><span>How It</span> Works</h2>
                        <p>For one-off projects or surge events, Ensite scales with your business.</p>
                    </div>
                    <div class="ss-how__steps">
                        <div class="ss-how__step">
                            <div class="ss-how__step-icon">
                                <img src="./icons/permit.png" alt="Place Order" />
                            </div>
                            <span class="ss-how__step-num">01</span>
                            <h4>Place Your Order</h4>
                            <p>Submit your site survey request through our platform with project details and requirements.</p>
                        </div>
                        <div class="ss-how__step">
                            <div class="ss-how__step-icon">
                                <img src="./icons/deadline.png" alt="Dispatch Tech" />
                            </div>
                            <span class="ss-how__step-num">02</span>
                            <h4>We Dispatch a Tech</h4>
                            <p>A qualified technician from our nationwide network is dispatched to you.</p>
                        </div>
                        <div class="ss-how__step">
                            <div class="ss-how__step-icon">
                                <img src="./icons/file-sign.png" alt="Data Collected" />
                            </div>
                            <span class="ss-how__step-num">03</span>
                            <h4>Capture Data</h4>
                            <p>Our technician captures all required data points using standardized workflows and verified quality checks.</p>
                        </div>
                        <div class="ss-how__step">
                            <div class="ss-how__step-icon">
                                <img src="./icons/approved.png" alt="Receive Report" />
                            </div>
                            <span class="ss-how__step-num">04</span>
                            <h4>Receive Your Report</h4>
                            <p>Get your completed survey report with accurate, actionable data delivered to your dashboard which you can trust.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ========== CTA SECTION ========== -->
            <section class="ss-cta">
                <div class="ss-cta__container">
                    <h2 class="ss-cta__title">Ready to unlock connected field intelligence?</h2>
                    <p class="ss-cta__text">Schedule a conversation today to see how ASGEICS helps your team work faster, reduce unnecessary overhead, and maintain complete control over every project in your portfolio.</p>
                    <div class="ss-cta__buttons">
                        <a href="/get-started" class="ss-cta__btn ss-cta__btn--secondary">Get Started</a>
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

    return this.element;
  }
}
