import BaseComponent from "../components/BaseComponent.js";
import "/src/styles/components/get-started.css";

export default class GetStarted extends BaseComponent {
  constructor() {
    super("main", "get-started-page");
  }

  async render() {
    this.element.innerHTML = `
      <div class="get-started-container">
        <!-- Hero Header -->
        <section class="get-started-hero">
          <h1 class="get-started-hero__title">
            Your <strong>Connection</strong> to <strong>Verified Field Intelligence.</strong>
          </h1>
          <p class="get-started-hero__description">
            Sign in, complete onboarding, or connect with our specialists to tap into ASGEICS's nationwide field operations — 
            offering validated data, uniform reporting, and seamless coverage for every job site.
          </p>
        </section>

        <!-- Main Content Grid -->
        <section class="get-started-content">
          <div class="get-started-image-wrapper">
            <img 
              src="/images/get-started.png" 
              alt="Verified Field Intelligence" 
            />
          </div>

          <div class="get-started-cards">
            <!-- Card 1 -->
            <div class="get-started-card">
              <h3 class="get-started-card__title">Set Up Your Organization</h3>
              <p class="get-started-card__description">
                Book a brief onboarding session with our team to seamlessly integrate ASGEICS into your existing workflows and accelerate your field operations.
              </p>
              <a href="/start-onboarding" class="get-started-card__btn">Start Onboarding</a>
            </div>

            <!-- Card 2 -->
            <div class="get-started-card">
              <h3 class="get-started-card__title">Talk with Our Team</h3>
              <p class="get-started-card__description">
                Discover how ASGEICS empowers your organization to collect and deliver reliable property insights across every industry sector.
              </p>
              <a href="/schedule-a-call" class="get-started-card__btn">Book a Discovery Call</a>
            </div>

            <!-- Card 3 -->
            <div class="get-started-card">
              <h3 class="get-started-card__title">Login to Your Account</h3>
              <p class="get-started-card__description">
                Access your dashboard to schedule and track work orders, or download verified reports anytime, anywhere.
              </p>
              <a href="/under-construction" target="_blank" rel="noopener noreferrer" class="get-started-card__btn">Access My Dashboard</a>
            </div>
          </div>
        </section>

        <!-- Counter / Stats Section -->
        <section class="get-started-stats">
          <div class="get-started-stats__grid">
            <div class="get-started-stat-item">
              <div class="get-started-stat-item__title">Businesses<br/>rely on Ensite</div>
              <div class="get-started-stat-item__number">175+</div>
            </div>

            <div class="get-started-stat-item">
              <div class="get-started-stat-item__title">Work Orders<br/>Completed</div>
              <div class="get-started-stat-item__number">25,000+</div>
            </div>

            <div class="get-started-stat-item">
              <div class="get-started-stat-item__title">In-field<br/>technicians</div>
              <div class="get-started-stat-item__number">500+</div>
            </div>

            <div class="get-started-stat-item">
              <div class="get-started-stat-item__title">Avg. dispatch<br/>timeline</div>
              <div class="get-started-stat-item__number">&gt;48 Hr</div>
            </div>
          </div>
        </section>
      </div>
    `;

    return this.element;
  }
}
