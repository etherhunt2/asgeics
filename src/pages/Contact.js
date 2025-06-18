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
                            <div class="contact__info-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <h3>Address</h3>
                                <p>Plot 231, Sahu Tola,<br>Marar, Ramgarh Jharkhand 829122</p>
                            </div>

                            <div class="contact__info-item" onclick="window.location.href='tel:+918587011172'" style="cursor: pointer;">
                                <i class="fas fa-phone"></i>
                                <h3>Phone</h3>
                                <p>+91 858 701 1172</p>
                            </div>

                            <div class="contact__info-item" onclick="window.location.href='mailto:info@asgeicsindia.com'" style="cursor: pointer;">
                                <i class="fas fa-envelope"></i>
                                <h3>Email</h3>
                                <p>info@asgeicsindia.com</p>
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