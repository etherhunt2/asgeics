import BaseComponent from "../components/BaseComponent.js";
import "/src/styles/components/roofing.css";

export default class Roofing extends BaseComponent {
  constructor() {
    super("main", "roofing-page");
  }

  async render() {
    this.element.innerHTML = `
            <section class="roofing-hero">
                <div class="roofing-hero__container">
                    <div class="roofing-hero__content">
                        <span class="roofing-hero__badge">FOR ROOFERS, INSURANCE CARRIERS & EPCs</span>
                        <h1 class="roofing-hero__title">Your Field Partner<br><span class="roofing-highlight-blue">For Property Inspections.</span></h1>
                        <p class="roofing-hero__description">ASGEICS sets the benchmark for property inspections — helping teams eliminate pipeline delays, accelerate project timelines, and scale with standardized reports you can trust from end to end.</p>
                        <div class="roofing-hero__actions">
                            <a href="/get-started" class="roofing-btn roofing-btn--primary">Get Started</a>
                        </div>
                    </div>
                    <div class="roofing-hero__image">
                        <img src="/images/asgeics-roofing-insurance.png" alt="ASGEICS Roofing Inspection">
                    </div>
                </div>
            </section>

            <section class="roofing-bottlenecks">
                <div class="roofing-bottlenecks__container">
                    <div class="roofing-bottlenecks__header">
                        <h2>Most Project Delays<br><span class="roofing-highlight-blue">Start at the Property</span></h2>
                        <p>Most delays trace back to the inspection — long wait times, incomplete photo documentation and reports, and inconsistencies that lead to design revisions, call-offs, and cancelled agreements.</p>
                    </div>
                    <div class="roofing-bottlenecks__grid">
                        <div class="roofing-card roofing-card--negative">
                            <h3>Disconnected Inspection Process</h3>
                            <ul class="roofing-list roofing-list--negative">
                                <li>1-2 week average inspection booking delays</li>
                                <li>Inconsistent inspection photos and missing documentation</li>
                                <li>Frequent re-dispatches due to human errors</li>
                                <li>Limited visibility between estimators and field technicians</li>
                                <li>Manual QA slowing down design/estimate review</li>
                            </ul>
                        </div>
                        <div class="roofing-card roofing-card--positive">
                            <h3><span class="roofing-highlight-blue">ASGEICS's</span> Connected Workflow</h3>
                            <ul class="roofing-list roofing-list--positive">
                                <li>24-48 hr avg. inspection dispatch turnaround</li>
                                <li>Standardized inspection photos and verified data sets</li>
                                <li>Seamless integration with estimators, saving time from manual data entry</li>
                                <li>Real-time status updates from point of sale</li>
                                <li>Verified reports ready to use in estimate/design process</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="roofing-inside">
                <div class="roofing-inside__container">
                    <h2>Inside Every <span class="roofing-highlight-blue">Verified Inspection</span></h2>
                    <p class="roofing-inside__subtext">Every ASGEICS inspection captures hundreds of verified data points — all standardized<br>and delivered to unlock your design, estimating, and reporting workflows.</p>
                    
                    <div class="roofing-inside__hotspot-map">
                        <img src="https://ensiteservices.com/wp-content/uploads/2025/10/Gemini_Generated-1.png" alt="Property Survey" class="roofing-inside__house-img">
                        
                        <!-- Hotspot 1: Exterior Condition (bottom-left) -->
                        <div class="roofing-hotspot" data-hotspot="exterior" style="left: 20%; top: 60%;">
                            <div class="roofing-hotspot__pulse"></div>
                            <div class="roofing-hotspot__icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    <line x1="11" y1="8" x2="11" y2="14"></line>
                                    <line x1="8" y1="11" x2="14" y2="11"></line>
                                </svg>
                            </div>
                            <div class="roofing-hotspot__card roofing-hotspot__card--right">
                                <div class="roofing-hotspot__card-image">
                                    <img src="https://ensiteservices.com/wp-content/uploads/2025/10/exterior_condition.png" alt="Exterior Condition & Damage">
                                </div>
                                <div class="roofing-hotspot__card-content">
                                    <h4>Exterior Condition & Damage</h4>
                                    <p>Documents exterior materials, weathering, and visible damage for roof, siding, and gutters to support claims verification and repair estimates.</p>
                                    <div class="roofing-hotspot__tags">
                                        <span class="roofing-hotspot__tag">Siding Condition</span>
                                        <span class="roofing-hotspot__tag">Window Damage</span>
                                        <span class="roofing-hotspot__tag">Elevation Photos</span>
                                        <span class="roofing-hotspot__tag">Gutter & Fascia</span>
                                        <span class="roofing-hotspot__tag">Roof Inspection</span>
                                        <span class="roofing-hotspot__tag">Paint & Surface Wear</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Hotspot 2: Structure Interior (top-middle) -->
                        <div class="roofing-hotspot" data-hotspot="structure" style="left: 55%; top: 40%;">
                            <div class="roofing-hotspot__pulse"></div>
                            <div class="roofing-hotspot__icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    <line x1="11" y1="8" x2="11" y2="14"></line>
                                    <line x1="8" y1="11" x2="14" y2="11"></line>
                                </svg>
                            </div>
                            <div class="roofing-hotspot__card roofing-hotspot__card--bottom">
                                <div class="roofing-hotspot__card-image">
                                    <img src="https://ensiteservices.com/wp-content/uploads/2025/10/structure_interior.png" alt="Structure & Interior Assessment">
                                </div>
                                <div class="roofing-hotspot__card-content">
                                    <h4>Structure & Interior Assessment</h4>
                                    <p>Evaluates attic and interior structures for leaks, cracks, or stress indicators to ensure proper cause-of-loss documentation.</p>
                                    <div class="roofing-hotspot__tags">
                                        <span class="roofing-hotspot__tag">Ceiling Cracks</span>
                                        <span class="roofing-hotspot__tag">Moisture Intrusion</span>
                                        <span class="roofing-hotspot__tag">Condition</span>
                                        <span class="roofing-hotspot__tag">Truss & Framing</span>
                                        <span class="roofing-hotspot__tag">Interior Photos</span>
                                        <span class="roofing-hotspot__tag">Identify Leak Source</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Hotspot 3: Roof Damage (top-right) -->
                        <div class="roofing-hotspot" data-hotspot="roof_damage" style="left: 72%; top: 28%;">
                            <div class="roofing-hotspot__pulse"></div>
                            <div class="roofing-hotspot__icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    <line x1="11" y1="8" x2="11" y2="14"></line>
                                    <line x1="8" y1="11" x2="14" y2="11"></line>
                                </svg>
                            </div>
                            <div class="roofing-hotspot__card roofing-hotspot__card--left">
                                <div class="roofing-hotspot__card-image">
                                    <img src="https://ensiteservices.com/wp-content/uploads/2025/10/roof_damage.png" alt="Roof Damage Assessment">
                                </div>
                                <div class="roofing-hotspot__card-content">
                                    <h4>Roof Damage Assessment</h4>
                                    <p>Captures roof type, shingle condition, slope, and impact zones to identify wind, hail, or storm damage with verified photo documentation.</p>
                                    <div class="roofing-hotspot__tags">
                                        <span class="roofing-hotspot__tag">Roof Material Type</span>
                                        <span class="roofing-hotspot__tag">Missing Shingles</span>
                                        <span class="roofing-hotspot__tag">Pitch + Slope</span>
                                        <span class="roofing-hotspot__tag">Hail & Impact Zones</span>
                                        <span class="roofing-hotspot__tag">Damage Map</span>
                                        <span class="roofing-hotspot__tag">Drone Orthomosaic</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Hotspot 4: Roof Model / Damage (right-middle) -->
                        <div class="roofing-hotspot" data-hotspot="roof_model" style="left: 85%; top: 50%;">
                            <div class="roofing-hotspot__pulse"></div>
                            <div class="roofing-hotspot__icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    <line x1="11" y1="8" x2="11" y2="14"></line>
                                    <line x1="8" y1="11" x2="14" y2="11"></line>
                                </svg>
                            </div>
                            <div class="roofing-hotspot__card roofing-hotspot__card--left">
                                <div class="roofing-hotspot__card-image">
                                    <img src="https://ensiteservices.com/wp-content/uploads/2025/10/roof_model_damage.png" alt="Roof Model + Damage Detection">
                                </div>
                                <div class="roofing-hotspot__card-content">
                                    <h4>Roof Model + Damage Detection</h4>
                                    <p>High-precision drone imaging provides 3D roof models, and precise damage identification & mapping for claims validation.</p>
                                    <div class="roofing-hotspot__tags">
                                        <span class="roofing-hotspot__tag">Roof Material Type</span>
                                        <span class="roofing-hotspot__tag">Missing Shingles</span>
                                        <span class="roofing-hotspot__tag">Pitch + Slope</span>
                                        <span class="roofing-hotspot__tag">Hail & Impact Zones</span>
                                        <span class="roofing-hotspot__tag">Damage Map</span>
                                        <span class="roofing-hotspot__tag">Drone Orthomosaic</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="roofing-partner">
                <div class="roofing-partner__container">
                    <h2>Leading Contractors<br>Leverage ASGEICS</h2>
                    <p class="roofing-partner__subtext">From regional contractors to national insurers, the industry's most successful organizations rely on ASGEICS for verified property data, consistent documentation, and API integration on demand.</p>
                    
                    <div class="roofing-partner__grid">
                        <div class="roofing-partner-card">
                            <div class="roofing-partner-card__icon">
                                <img src="https://ensiteservices.com/wp-content/uploads/2025/10/Frame-3.png" alt="Scale">
                            </div>
                            <h3>UNLIMITED SCALE</h3>
                            <p>An unlimited survey network on demand, available everywhere you operate, with 24-48 hrs inspection turnaround</p>
                        </div>
                        <div class="roofing-partner-card">
                            <div class="roofing-partner-card__icon">
                                <img src="https://ensiteservices.com/wp-content/uploads/2025/10/Frame-4.png" alt="Accuracy">
                            </div>
                            <h3>VERIFIED ACCURACY</h3>
                            <p>Quality assurance reviews back at base to ensure complete and accurate documentation, claims to avoid re-inspection.</p>
                        </div>
                        <div class="roofing-partner-card">
                            <div class="roofing-partner-card__icon">
                                <img src="https://ensiteservices.com/wp-content/uploads/2025/10/Frame-5.png" alt="Consistency">
                            </div>
                            <h3>100% CONSISTENCY</h3>
                            <p>Standardized workflows ensure predictable quality, everywhere you operate, minimizing project risks</p>
                        </div>
                        <div class="roofing-partner-card">
                            <div class="roofing-partner-card__icon">
                                <img src="https://ensiteservices.com/wp-content/uploads/2025/10/Frame-6.png" alt="Integration">
                            </div>
                            <h3>SEAMLESS INTEGRATION</h3>
                            <p>Receive data the way you need it formatted for your estimates, system designs, or management software</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="roofing-window">
                <div class="roofing-window__container">
                    <div class="roofing-window__content">
                        <h2>Your Window Into<br>Every Inspection</h2>
                        <ul class="roofing-window__list">
                            <li>Schedule and track inspections in real time with the ASGEICS Property Platform.</li>
                            <li>Dispatch Turnaround within 24-48 hours with real time availability.</li>
                            <li>Custom forms and requirements for unique job scopes</li>
                            <li>Track completed work order progress in real-time.</li>
                            <li>Ready to Download verified reports and site data in One Click</li>
                        </ul>
                    </div>
                    <div class="roofing-window__image">
                        <!-- Dashboard Image Placeholder -->
                        <img src="/images/asgeics-dashboard-mockup.png" alt="ASGEICS Dashboard" style="border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.1);">
                    </div>
                </div>
            </section>

            <section class="roofing-workflow">
                <div class="roofing-workflow__container">
                    <h2>Proven Workflow Built for Scale</h2>
                    <p class="roofing-workflow__subtext">Push button site surveys that fit seamlessly into your workflow — eliminating bottlenecks, facilitating clear and accurate data delivery, and empowering your team with end to end support.</p>
                    
                    <div class="roofing-workflow__steps">
                        <div class="roofing-workflow-step">
                            <div class="roofing-workflow-step__icon">1</div>
                            <h3>BOOK</h3>
                            <p>Schedule a survey in just seconds directly within our platform, with real-time technician availability.</p>
                        </div>
                        <div class="roofing-workflow-step__arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                        <div class="roofing-workflow-step">
                            <div class="roofing-workflow-step__icon">2</div>
                            <h3>TRACK</h3>
                            <p>Track statuses in real time right as field technicians are assigned, on site, and completed.</p>
                        </div>
                        <div class="roofing-workflow-step__arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                        <div class="roofing-workflow-step">
                            <div class="roofing-workflow-step__icon">3</div>
                            <h3>DOWNLOAD</h3>
                            <p>Receive verified, accurate and consistent reports ready for design, estimating, and permitting.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="roofing-cta">
                <div class="roofing-cta__container">
                    <h2>Accelerate Your Project<br>Workflow with ASGEICS.</h2>
                    <p>Schedule your first property inspection and experience verified data delivery within 48 hours.</p>
                    <div class="roofing-cta__actions">
                        <a href="/get-started" class="roofing-btn roofing-btn--primary">Get Started</a>
                    </div>
                </div>
            </section>
        `;

    // Setting up interactive logic inside vanilla JS
    this.setupInteractions();

    return this.element;
  }

  setupInteractions() {
    const hotspots = this.element.querySelectorAll(".roofing-hotspot");
    hotspots.forEach((hotspot) => {
      hotspot.addEventListener("mouseenter", () => {
        hotspots.forEach((h) => {
          if (h !== hotspot) h.style.zIndex = "10";
        });
        hotspot.style.zIndex = "20";
      });
    });

    // Safe check for IntersectionObserver
    if (typeof IntersectionObserver !== "undefined") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
            }
          });
        },
        { threshold: 0.1 },
      );

      this.element
        .querySelectorAll(
          ".roofing-card, .roofing-partner-card, .roofing-workflow-step, .roofing-hotspot",
        )
        .forEach((el) => {
          observer.observe(el);
        });
    }
  }
}
