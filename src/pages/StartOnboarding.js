import BaseComponent from "../components/BaseComponent.js";
import "/src/styles/components/start-onboarding.css";
import emailjs from "@emailjs/browser";

export default class StartOnboarding extends BaseComponent {
  constructor() {
    super("main", "start-onboarding-page");
  }

  async render() {
    this.element.innerHTML = `
      <section class="onboarding-banner">
        <!-- Left Side: Image + Hero Title Overlay -->
        <div class="onboarding-banner__left">
          <div class="onboarding-banner__content">
            <h1 class="onboarding-banner__title">
              <strong>Get Onboarded</strong> with ASGEICS India
            </h1>
            <p class="onboarding-banner__subtitle">
              Submit your information to begin the free onboarding process.
            </p>
          </div>
        </div>

        <!-- Right Side: Dark Teal Section with Form Card -->
        <div class="onboarding-banner__right">
          <div class="onboarding-form-card">
            <div class="onboarding-form-card__header">
              <h2 class="onboarding-form-card__title">Let's Onboard</h2>
              <p class="onboarding-form-card__desc">Fill out your organization details below to get connected with ASGEICS India.</p>
            </div>

            <form id="onboarding-form" class="onboarding-form">
              <div class="onboarding-form__row">
                <div class="onboarding-form__group">
                  <label for="fullName">Full Name <span class="req">*</span></label>
                  <input type="text" id="fullName" name="fullName" placeholder="e.g. Sarah Jenkins" required />
                </div>

                <div class="onboarding-form__group">
                  <label for="companyName">Company Name <span class="req">*</span></label>
                  <input type="text" id="companyName" name="companyName" placeholder="e.g. Apex Solar Solutions" required />
                </div>
              </div>

              <div class="onboarding-form__row">
                <div class="onboarding-form__group">
                  <label for="workEmail">Work Email <span class="req">*</span></label>
                  <input type="email" id="workEmail" name="workEmail" placeholder="sarah@apexsolar.com" required />
                </div>

                <div class="onboarding-form__group">
                  <label for="phone">Phone Number <span class="req">*</span></label>
                  <input type="tel" id="phone" name="phone" placeholder="(555) 019-2834" required />
                </div>
              </div>

              <button type="submit" class="onboarding-form__submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    `;

    const form = this.element.querySelector("#onboarding-form");
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
      const fullName = form.querySelector("#fullName").value;
      const companyName = form.querySelector("#companyName").value;
      const workEmail = form.querySelector("#workEmail").value;
      const phone = form.querySelector("#phone").value;

      // Construct HTML table for email message
      const messageTable = `
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 550px; font-family: Arial, sans-serif; font-size: 14px;">
  <thead>
    <tr style="background-color: #0f4c5c; color: #ffffff;">
      <th colspan="2" style="text-align: left; padding: 10px; font-size: 16px;">New Onboarding Request</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-weight: bold; width: 35%; background-color: #f4f6f8;">Full Name</td>
      <td>${fullName}</td>
    </tr>
    <tr>
      <td style="font-weight: bold; background-color: #f4f6f8;">Work Email</td>
      <td><a href="mailto:${workEmail}">${workEmail}</a></td>
    </tr>
    <tr>
      <td style="font-weight: bold; background-color: #f4f6f8;">Company Name</td>
      <td>${companyName}</td>
    </tr>
    <tr>
      <td style="font-weight: bold; background-color: #f4f6f8;">Phone Number</td>
      <td>${phone}</td>
    </tr>
  </tbody>
</table>`.trim();

      // Prepare the template parameters matching EmailJS template keys
      const templateParams = {
        name: fullName,
        from_name: fullName,
        email: workEmail,
        from_email: workEmail,
        company: companyName,
        company_name: companyName,
        phone: phone,
        subject: `Onboarding - ${fullName}`,
        message: messageTable,
      };

      // Send the email
      const response = await emailjs.send(
        "service_uuc5hrx",
        "template_o21jldq",
        templateParams,
        "S9VAbYSq17CKAkjUz",
      );

      // console.log("SUCCESS!", response.status, response.text);
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
