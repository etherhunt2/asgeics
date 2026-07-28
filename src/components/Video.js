import BaseComponent from "./BaseComponent.js";

export default class Video extends BaseComponent {
  constructor() {
    super("div", "video-component");
  }

  async render() {
    this.element.innerHTML = `
      <img src="/images/about/Welcome%20To%20ASGEICS%20INDIA.gif" alt="Welcome To ASGEICS INDIA" style="width: 100%; height: 100%; display: block; border: none; outline: none; background: none; margin: 0; padding: 0; object-fit: cover;" />
    `;
    this.element.style.width = "100%";
    this.element.style.height = "100%";
    this.element.style.margin = "0";
    this.element.style.padding = "0";
    this.element.style.border = "none";
    this.element.style.outline = "none";
    this.element.style.background = "none";

    return this.element;
  }
}
