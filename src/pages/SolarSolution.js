import BaseComponent from "../components/BaseComponent.js";

export default class SolarSolution extends BaseComponent {
  constructor() {
    super("main", "solar-solution-page");
  }

  async render() {
    this.element.innerHTML = `
            <section class="solar-hero">
                <div class="solar-hero__container">
                    <div class="solar-hero__content">
                        <span class="solar-hero__badge">FOR FULL STACK, INSTALLERS & EPCs</span>
                        <h1 class="solar-hero__title">The Standard <span class="highlight-blue">For<br>Solar Site Surveys.</span></h1>
                        <p class="solar-hero__description">ASGEICS sets the benchmark for surveys — helping teams eliminate pipeline delays, accelerate installs, and scale with confidence.</p>
                        <div class="solar-hero__actions">
                            <a href="/get-started" class="solar-btn solar-btn--primary">Get Started</a>
                        </div>
                    </div>
                    <div class="solar-hero__image">
                        <img src="/images/asgeics-survey-hero.png" alt="ASGEICS Solar Site Survey App">
                    </div>
                </div>
            </section>

            <section class="solar-bottlenecks">
                <div class="solar-bottlenecks__container">
                    <div class="solar-bottlenecks__header">
                        <h2>Most Solar Pipeline<br>Bottlenecks <span class="highlight-blue">Start at Survey</span></h2>
                        <p>Most solar delays trace back to the site survey — long customer wait times, missed or inconsistent<br>data, and late uploads that cause design revisions, install call-offs, and lost revenue.</p>
                    </div>
                    <div class="solar-bottlenecks__grid">
                        <div class="solar-card solar-card--negative">
                            <h3>Disconnected Survey Process</h3>
                            <ul class="solar-list solar-list--negative">
                                <li>1-2 week booking times from point of sale</li>
                                <li>Coordination issues with installers prioritizing installs over surveys</li>
                                <li>High rate of funding or design rejections</li>
                                <li>Missed onsite details leading to install call-offs</li>
                                <li>Design backlog caused by preventable revisions</li>
                                <li>Inconsistent or incomplete site data</li>
                            </ul>
                        </div>
                        <div class="solar-card solar-card--positive">
                            <h3><span class="highlight-blue">ASGEICS's</span> Connected Workflow</h3>
                            <ul class="solar-list solar-list--positive">
                                <li>24-48 hr avg. dispatch time</li>
                                <li>Nationwide network of qualified solar technicians</li>
                                <li>Consistent, standardized deliverables</li>
                                <li>Verified field data captured and reviewed on site</li>
                                <li>Streamlined design and permitting process</li>
                                <li>Accurate, ready-to-use site data for every project</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section class="solar-inside">
                <div class="solar-inside__container">
                    <h2>Inside Every <span class="highlight-blue">ASGEICS Survey</span></h2>
                    <p class="solar-inside__subtext">Every ASGEICS survey captures hundreds of verified data points — all standardized<br>and delivered to unlock your design, engineering, and permitting workflow.</p>
                    
                    <div class="solar-inside__hotspot-map">
                        <img src="/images/house-survey.png" alt="Inside Every ASGEICS Survey" class="solar-inside__house-img">
                        
                        <!-- Hotspot 1: Electrical Evaluation (bottom-left, near garage/meter) -->
                        <div class="hotspot" data-hotspot="electrical" style="left: 15%; top: 55%;">
                            <div class="hotspot__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                            </div>
                            <div class="hotspot__pulse"></div>
                            <div class="hotspot__card hotspot__card--right">
                                <div class="hotspot__card-image">
                                    <img src="/images/electrical-evaluation.png" alt="Electrical Evaluation">
                                </div>
                                <div class="hotspot__card-content">
                                    <h4>⚡ Electrical Evaluation</h4>
                                    <p>Captures all panel, meter, and disconnect data to ensure accurate & compliant system design.</p>
                                    <div class="hotspot__tags">
                                        <span class="hotspot__tag">Utility Meter(s)</span>
                                        <span class="hotspot__tag">Main Panel</span>
                                        <span class="hotspot__tag">Sub-Panel(s)</span>
                                        <span class="hotspot__tag">Wire + Breaker Size</span>
                                        <span class="hotspot__tag">Equipment Location Map</span>
                                        <span class="hotspot__tag">Disconnect(s)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Hotspot 2: Structural Evaluation (center, near upper wall) -->
                        <div class="hotspot" data-hotspot="structural" style="left: 40%; top: 35%;">
                            <div class="hotspot__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                            </div>
                            <div class="hotspot__pulse"></div>
                            <div class="hotspot__card hotspot__card--bottom">
                                <div class="hotspot__card-image">
                                    <img src="/images/structural-evaluation.png" alt="Structural Evaluation">
                                </div>
                                <div class="hotspot__card-content">
                                    <h4>🏗 Structural Evaluation</h4>
                                    <p>Verifies framing and condition details for a seamless load-bearing engineering process.</p>
                                    <div class="hotspot__tags">
                                        <span class="hotspot__tag">Rafter Spacing</span>
                                        <span class="hotspot__tag">Rafter Size</span>
                                        <span class="hotspot__tag">Attic 360°</span>
                                        <span class="hotspot__tag">Damage Assessment</span>
                                        <span class="hotspot__tag">Framing Documentation</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Hotspot 3: Roof Inspection (top-center, on the roof) -->
                        <div class="hotspot" data-hotspot="roof" style="left: 55%; top: 18%;">
                            <div class="hotspot__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                            </div>
                            <div class="hotspot__pulse"></div>
                            <div class="hotspot__card hotspot__card--bottom">
                                <div class="hotspot__card-image">
                                    <img src="/images/roof-inspection.png" alt="Roof Inspection">
                                </div>
                                <div class="hotspot__card-content">
                                    <h4>🏠 Roof Inspection</h4>
                                    <p>Provides detailed surface, pitch, and obstruction data to confirm installation viability.</p>
                                    <div class="hotspot__tags">
                                        <span class="hotspot__tag">Age Estimate</span>
                                        <span class="hotspot__tag">Roof Quality</span>
                                        <span class="hotspot__tag">Obstructions</span>
                                        <span class="hotspot__tag">Full Roof Dimensions</span>
                                        <span class="hotspot__tag">Shade Report</span>
                                        <span class="hotspot__tag">Pitch + Azimuth</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Hotspot 4: Property Exterior & Map (right side) -->
                        <div class="hotspot" data-hotspot="property" style="left: 72%; top: 30%;">
                            <div class="hotspot__icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                            </div>
                            <div class="hotspot__pulse"></div>
                            <div class="hotspot__card hotspot__card--left">
                                <div class="hotspot__card-image">
                                    <img src="/images/property-map.png" alt="Property Exterior & Map">
                                </div>
                                <div class="hotspot__card-content">
                                    <h4>🗺 Property Exterior & Map</h4>
                                    <p>High-precision drone imaging provides 3D roof models, and precise damage identification & mapping for claims validation.</p>
                                    <div class="hotspot__tags">
                                        <span class="hotspot__tag">Proposed Battery & Equipment Location(s)</span>
                                        <span class="hotspot__tag">Site Map</span>
                                        <span class="hotspot__tag">Full Exterior 360°</span>
                                        <span class="hotspot__tag">Trench Paths</span>
                                        <span class="hotspot__tag">Electrical Locations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="solar-window">
                <div class="solar-window__container">
                    <div class="solar-window__image">
                        <!-- Dashboard Image Placeholder -->
                        <img src="/images/asgeics-dashboard-mockup.png" alt="Your Window Into Every Survey">
                    </div>
                    <div class="solar-window__content">
                        <h2><span class="highlight-blue">Your Window</span> Into<br>Every Survey</h2>
                        <ul class="solar-window__list">
                            <li>Schedule and track all site surveys in real time</li>
                            <li>API and integrations available</li>
                            <li>Custom inspection forms for standardized data</li>
                            <li>Push notifications on job status and completion</li>
                            <li>Download all files, reports and site data</li>
                        </ul>
                        <a href="/contact" class="solar-btn solar-btn--primary">Get Started</a>
                    </div>
                </div>
            </section>

            <section class="solar-partner">
                <div class="solar-partner__container">
                    <h2>Why Leading Solar Teams<br>Partner With ASGEICS</h2>
                    <p class="solar-partner__subtext">ASGEICS sets the standard for solar site surveys nationwide. Consistent, standardized,<br>and seamlessly integrated into your workflow.</p>
                    
                    <div class="solar-partner__grid">
                        <div class="partner-card">
                            <div class="partner-card__icon"><span class="icon-placeholder">⚡</span></div>
                            <h3>SCALE THAT SCALES</h3>
                            <p>24-48 hr average survey turnaround, nationwide</p>
                        </div>
                        <div class="partner-card">
                            <div class="partner-card__icon"><span class="icon-placeholder">🎯</span></div>
                            <h3>VERIFIED ACCURACY</h3>
                            <p>200+ customizable Data reviewed on-site to ensure complete and accurate deliverables</p>
                        </div>
                        <div class="partner-card">
                            <div class="partner-card__icon"><span class="icon-placeholder">🔄</span></div>
                            <h3>100% CONSISTENCY</h3>
                            <p>Standardized workflows mean consistent operation outputs across the nation, ensuring predictable quality</p>
                        </div>
                        <div class="partner-card">
                            <div class="partner-card__icon"><span class="icon-placeholder">🧩</span></div>
                            <h3>SEAMLESS INTEGRATION</h3>
                            <p>Deliverables formatted for quick and easy integration into design and permitting processes</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="solar-workflow">
                <div class="solar-workflow__container">
                    <h2><span class="highlight-blue">Proven Workflow</span> Built for Scale</h2>
                    <p class="solar-workflow__subtext">ASGEICS optimizes the entire solar site survey workflow by unifying scheduling, on-site operations, and data validation into a single, cohesive system.</p>
                    
                    <div class="solar-workflow__steps">
                        <div class="workflow-step">
                            <div class="workflow-step__icon">📅</div>
                            <h3>BOOK</h3>
                            <p>Schedule a survey with real-time technician availability</p>
                        </div>
                        <div class="workflow-step__arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5L16 12L9 19" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <div class="workflow-step">
                            <div class="workflow-step__icon">🔍</div>
                            <h3>TRACK</h3>
                            <p>Track statuses in real time as survey is assigned and completed</p>
                        </div>
                        <div class="workflow-step__arrow">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 5L16 12L9 19" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </div>
                        <div class="workflow-step">
                            <div class="workflow-step__icon">📥</div>
                            <h3>DOWNLOAD</h3>
                            <p>Receive verified, ready-to-use survey results</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="solar-cta">
                <div class="solar-cta__container">
                    <h2>Accelerate Your Solar<br>Pipeline with ASGEICS.</h2>
                    <p>Schedule your first site survey and experience verified site data delivered within 48 hours.</p>
                    <div class="solar-cta__actions">
                        <a href="/get-started" class="solar-btn solar-btn--primary">Get Started</a>
                    </div>
                </div>
            </section>
        `;

    return this.element;
  }
}
