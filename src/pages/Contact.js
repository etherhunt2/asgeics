import BaseComponent from '../components/BaseComponent.js';
import emailjs from '@emailjs/browser';

export default class Contact extends BaseComponent {
    constructor() {
        super('main', 'contact-page');
        // Initialize EmailJS
        emailjs.init("dMJqXZw1Gqshg36Up");
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

            <!--<section class="map" id="map">
                <div id="map-container" style="width: 100%; height: 400px;"></div>
            </section> -->
        `;

        // Initialize contact form
        const form = this.element.querySelector('#contact-form');
        form.addEventListener('submit', this.handleSubmit.bind(this));

        // Initialize map after a short delay to ensure the container is ready
        setTimeout(() => this.initMap(), 100);

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
                'service_5xj558c',
                'template_qdejlkk',
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

    async initMap() {
        try {
            // Create the script tag
            const script = document.createElement('script');
            const apiKey = 'YOUR_API_KEY'; // Replace with your actual Google Maps API key
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
            script.async = true;
            script.defer = true;

            // Create a promise to wait for script to load
            const loadPromise = new Promise((resolve, reject) => {
                script.onload = resolve;
                script.onerror = reject;
            });

            // Add script to document
            document.head.appendChild(script);

            // Wait for script to load
            await loadPromise;

            // Initialize the map
            const location = { lat: 25.595203, lng: 85.096329 };
            const mapContainer = document.getElementById('map-container');

            if (mapContainer && window.google) {
                const map = new google.maps.Map(mapContainer, {
                    zoom: 15,
                    center: location,
                    mapTypeControl: true,
                    streetViewControl: true,
                    fullscreenControl: true,
                });

                new google.maps.Marker({
                    position: location,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: 'ASGEICS INDIA'
                });
            }
        } catch (error) {
            console.error('Error loading map:', error);
            const mapContainer = document.getElementById('map-container');
            if (mapContainer) {
                mapContainer.innerHTML = '<p class="map-error">Error loading map. Please try again later.</p>';
            }
        }
    }
} 