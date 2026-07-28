import BaseComponent from "../components/BaseComponent.js";
import emailjs from "@emailjs/browser";

export default class Contact extends BaseComponent {
  constructor() {
    super("main", "contact-page");
    // Initialize EmailJS
    emailjs.init("S9VAbYSq17CKAkjUz");
  }

  async render() {
    this.element.innerHTML = `
            <section class="contact" id="contact">
                <div class="contact__container">
                    <header class="contact__header">
                        <h1 class="contact__title">Contact Us</h1>
                        <p class="contact__subtitle">Get in touch with our team</p>
                    </header>

                    <div class="contact__content">
                        <div class="contact__form-container">
                            <form id="contact-form" class="contact__form">
                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" required>
                                </div>

                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" required>
                                </div>

                                <div class="form-group">
                                    <label for="subject">Subject</label>
                                    <input type="text" id="subject" name="subject" required>
                                </div>

                                <div class="form-group">
                                    <label for="message">Message</label>
                                    <textarea id="message" name="message" rows="5" required></textarea>
                                </div>

                                <button type="submit" class="btn btn--primary">Send Message</button>
                            </form>
                        </div>

                        <div class="contact__info">
                            <!-- Email Banner -->
                            <div class="contact__email-banner">
                                <div class="email-banner__icon">
                                    <i class="fas fa-envelope-open-text"></i>
                                </div>
                                <div class="email-banner__content">
                                    <p>info@asgeicsindia.com</p>
                                    <button type="button" onclick="window.location.href='mailto:info@asgeicsindia.com'" class="btn-email-us">EMAIL US</button>
                                </div>
                            </div>

                            <div class="contact__offices">
                                <h2 class="offices-title">Global offices</h2>
                                <div class="office-card office-card--merged">
                                    <!-- US Office -->
                                    <div class="office-section">
                                        <h3 class="office-card__title">ASGEICS INDIA LLC (US)</h3>
                                        <div class="office-section__content">
                                            <div class="office-card__detail">
                                                <i class="fas fa-map"></i>
                                                <p>30 N Gould St Sheridan, WY 82801</p>
                                            </div>
                                            <div class="office-card__detail">
                                                <i class="fas fa-phone-alt"></i>
                                                <p>(253) 400-8394</p>
                                            </div>
                                        </div>
                                        <div class="office-section__action">
                                            <a href="https://maps.app.goo.gl/yX6Rnk7ZfgHegu4W8" target="_blank" rel="noopener noreferrer" class="btn-locate-map">
                                                <i class="fas fa-map-marker-alt"></i> Locate US Office
                                            </a>
                                        </div>
                                    </div>

                                    <div class="contact-divider"></div>

                                    <!-- India Office -->
                                    <div class="office-section">
                                        <h3 class="office-card__title">ASGEICS INDIA (India)</h3>
                                        <div class="office-section__content">
                                            <div class="office-card__detail">
                                                <i class="fas fa-map"></i>
                                                <p>Plot 231, Sahu Tola<br>Marar, Ramgarh, Jharkhand 829122</p>
                                            </div>
                                            <div class="office-card__detail">
                                                <i class="fas fa-phone-alt"></i>
                                                <p>+91 858 701 1172</p>
                                            </div>
                                        </div>
                                        <div class="office-section__action">
                                            <a href="https://www.google.com/maps/place/Marar,+Jharkhand+829117,+India/@23.6738479,85.5096519,3a,75y,337.07h,90.47t/data=!3m7!1e1!3m5!1skiagYxCrW9-ky4Qf-4lY6g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.47226213980252396%26panoid%3DkiagYxCrW9-ky4Qf-4lY6g%26yaw%3D337.0729424445742!7i13312!8i6656!4m7!3m6!1s0x39f4f3427617bdc5:0x149db90692dc9705!8m2!3d23.6715992!4d85.5071469!15sCi5QbG90IG5vIDIzMSwgU2FodSBUb2xhIE1hcmFyIHJhbWdhcmggamhhcmtoYW5kkgEIbG9jYWxpdHngAQA!16s%2Fg%2F12hr00d0c?entry=tts&g_ep=EgoyMDI2MDUxMC4wIPu8ASoASAFQAw%3D%3D&skid=3941a888-c3af-4419-9573-d09a1d4673f4"
                                                target="_blank" rel="noopener noreferrer" class="btn-locate-map">
                                                <i class="fas fa-map-marker-alt"></i> Locate India Office
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

    // Initialize contact form
    const form = this.element.querySelector("#contact-form");
    form.addEventListener("submit", this.handleSubmit.bind(this));

    return this.element;
  }

  async handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;

    // Show loading state
    submitButton.textContent = "Sending...";
    submitButton.disabled = true;

    try {
      const messageTable = `
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 550px; font-family: Arial, sans-serif; font-size: 14px;">
  <thead>
    <tr style="background-color: #0f4c5c; color: #ffffff;">
      <th colspan="2" style="text-align: left; padding: 10px; font-size: 16px;">New Contact Request from ASGEICS India Website</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-weight: bold; width: 35%; background-color: #f4f6f8;">Full Name</td>
      <td>${form.querySelector("#name").value}</td>
    </tr>
    <tr>
      <td style="font-weight: bold; background-color: #f4f6f8;">Work Email</td>
      <td><a href="mailto:${form.querySelector("#email").value}">${form.querySelector("#email").value}</a></td>
    </tr>
    <tr>
      <td style="font-weight: bold; background-color: #f4f6f8;">Message</td>
      <td>${form.querySelector("#message").value}</td>
    </tr>
  </tbody>
</table>`.trim();
      // Prepare the template parameters
      const templateParams = {
        name: form.querySelector("#name").value,
        from_name: form.querySelector("#name").value,
        from_email: form.querySelector("#email").value,
        subject: form.querySelector("#subject").value,
        message: messageTable,
      };

      // Send the email
      await emailjs.send(
        "service_uuc5hrx",
        "template_pwiajia",
        templateParams,
        "S9VAbYSq17CKAkjUz",
      );

      // console.log('SUCCESS!', response.status, response.text);
      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      console.error("FAILED...", error);
      alert("Failed to send message. Please try again.");
    } finally {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  }
}
