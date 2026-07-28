import BaseComponent from "../components/BaseComponent.js";
import "/src/styles/components/under-construction.css";

export default class UndderConstruction extends BaseComponent {
  constructor() {
    super("main", "under-construction-page");
  }

  async render() {
    this.element.innerHTML = `
      <div class="under-construction-container">
        <div class="under-construction-card">
          <div class="under-construction-icon-wrapper">
            <svg class="under-construction-big-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
          </div>
          <h1 class="under-construction-big-title">Under Construction</h1>
          <p class="under-construction-one-liner">
            This page is currently under construction. Please check back soon!
          </p>
          <a href="/" class="under-construction-home-btn">Back to Home</a>
        </div>
      </div>
    `;

    return this.element;
  }
}
