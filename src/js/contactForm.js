import emailjs from '@emailjs/browser';
import '../styles/components/contact.css';

// Initialize EmailJS
const initEmailJS = () => {
    emailjs.init("dMJqXZw1Gqshg36Up");
};

// Setup form submission handler
export function setupContactForm(formElement) {
    if (!formElement) return;

    const submitButton = formElement.querySelector('button[type="submit"]');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show loading state
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Prepare the template parameters
            const templateParams = {
                from_name: formElement.querySelector('#name').value,
                from_email: formElement.querySelector('#email').value,
                message: formElement.querySelector('#message').value
            };

            // Send the email
            const response = await emailjs.send(
                'service_5xj558c',
                'template_qdejlkk',
                templateParams
            );

            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            formElement.reset();
        } catch (error) {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again.');
        } finally {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    };

    // Add event listener
    formElement.addEventListener('submit', handleSubmit);

    // Return cleanup function
    return () => {
        formElement.removeEventListener('submit', handleSubmit);
    };
}

// Export initialization function
export function initializeContact(containerId = 'contact-placeholder') {
    // Initialize EmailJS
    initEmailJS();

    const contactHTML = `
        <section class="contact" id="contact" style="margin-top: 50px;">
            <div class="contact__container">
                <header class="contact__header">
                    <h2 class="contact__title">Get In Touch</h2>
                    <p class="contact__subtitle">Have questions? We're here to help you with your engineering needs</p>
                </header>

                <div class="contact__content">
                    <div class="contact__form">
                        <form id="contactForm">
                            <div class="form-group">
                                <label class="form-label" for="name">Name</label>
                                <input type="text" id="name" name="name" class="form-control" placeholder="Your Name" required />
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="email">Email</label>
                                <input type="email" id="email" name="email" class="form-control" placeholder="Your Email" required />
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="message">Message</label>
                                <textarea id="message" name="message" class="form-control" placeholder="How can we help you?" rows="5" required></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>

                    <div class="contact__info">
                        <div class="contact-info__item">
                            <div class="contact-info__icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-info__content">
                                <h3>Our Location</h3>
                                <p>1060 Maitland Center Commons,<br>Suite 270 Maitland, FL 32751</p>
                            </div>
                        </div>

                        <div class="contact-info__item">
                            <div class="contact-info__icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-info__content">
                                <h3>Phone Number</h3>
                                <p>(407) 289-2575</p>
                            </div>
                        </div>

                        <div class="contact-info__item">
                            <div class="contact-info__icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-info__content">
                                <h3>Email Address</h3>
                                <p>info@asgeicsindia.com</p>
                            </div>
                        </div>

                        <div class="contact__social">
                            <h3>Follow Us</h3>
                            <div class="social-links">
                                <a href="#" class="social-link"><i class="fab fa-facebook"></i></a>
                                <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Insert the contact HTML into the container
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = contactHTML;

        // Setup the contact form
        const form = container.querySelector('#contactForm');
        setupContactForm(form);
    } else {
        console.error('Contact container not found');
    }
} 