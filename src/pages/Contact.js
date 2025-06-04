import BaseComponent from '../components/BaseComponent.js';

export default class Contact extends BaseComponent {
    constructor() {
        super('main', 'contact-page');
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
                                <p>123 Main Street<br>City, State 12345</p>
                            </div>

                            <div class="contact__info-item">
                                <i class="fas fa-phone"></i>
                                <h3>Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>

                            <div class="contact__info-item">
                                <i class="fas fa-envelope"></i>
                                <h3>Email</h3>
                                <p>info@asgeics.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="map" id="map">
                <div id="map-container" style="width: 100%; height: 400px;"></div>
            </section>
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
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            // Here you would typically send the data to your server
            console.log('Form submitted:', data);
            alert('Thank you for your message. We will get back to you soon!');
            e.target.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again later.');
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