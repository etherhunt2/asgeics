import BaseComponent from '../components/BaseComponent.js';
import emailjs from '@emailjs/browser';

export default class Contact extends BaseComponent {
    constructor() {
        super('main', 'contact-page');
        // Initialize EmailJS
        emailjs.init("vVCuiYIuxlEiDsKIk");
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
                                            <a href="https://maps.google.com/?q=Plot+231,+Sahu+Tola,+Marar,+Ramgarh+Jharkhand+829122" target="_blank" rel="noopener noreferrer" class="btn-locate-map">
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
        const form = this.element.querySelector('#contact-form');
        form.addEventListener('submit', this.handleSubmit.bind(this));

        return this.element;
    }

    async handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;

        // Show loading state
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Prepare the template parameters
            const templateParams = {
                from_name: form.querySelector('#name').value,
                from_email: form.querySelector('#email').value,
                subject: form.querySelector('#subject').value,
                message: form.querySelector('#message').value
            };

            // Send the email
            const response = await emailjs.send(
                'service_uuc5hrx',
                'template_pwiajia',
                templateParams
            );

            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            form.reset();
        } catch (error) {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again.');
        } finally {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    }
} 