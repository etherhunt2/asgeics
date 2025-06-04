import BaseComponent from '../components/BaseComponent.js';

export default class About extends BaseComponent {
    constructor() {
        super('main', 'about-page');
    }

    async render() {
        this.element.innerHTML = `
            <section class="about-hero">
                <div class="about-hero__container">
                    <h1 class="about-hero__title">About Us</h1>
                    <p class="about-hero__subtitle">Building Excellence Through Innovation</p>
                </div>
            </section>

            <section class="about-description">
                <div class="about-description__container">
                    <div class="about-description__item">
                        <div class="about-description__content">
                            <h2>Our Vision</h2>
                            <p>At ASGEICS INDIA, we envision a future where engineering excellence meets sustainable innovation. Our commitment to quality and precision has made us a trusted name in the industry for over two decades. We believe in creating solutions that not only meet today's challenges but are also prepared for tomorrow's demands.</p>
                        </div>
                        <div class="about-description__image">
                            <img src="./images/about/vision.jpg" alt="Company Vision">
                        </div>
                    </div>

                    <div class="about-description__item reverse">
                        <div class="about-description__content">
                            <h2>Our Mission</h2>
                            <p>Our mission is to deliver exceptional engineering solutions that transform ideas into reality. We combine technical expertise with innovative thinking to create sustainable, efficient, and cost-effective solutions for our clients. Through continuous learning and adaptation, we stay at the forefront of engineering advancement.</p>
                        </div>
                        <div class="about-description__image">
                            <img src="./images/about/mission.jpg" alt="Company Mission">
                        </div>
                    </div>

                    <div class="about-description__item">
                        <div class="about-description__content">
                            <h2>Our Values</h2>
                            <p>Integrity, innovation, and excellence form the cornerstone of our operations. We believe in fostering long-term relationships with our clients through transparent communication and reliable service delivery. Our team's dedication to these values ensures that every project we undertake meets the highest standards of quality and professionalism.</p>
                        </div>
                        <div class="about-description__image">
                            <img src="./images/about/value.jpg" alt="Company Values">
                        </div>
                    </div>
                </div>
            </section>

            <section class="team">
                <div class="team__container">
                    <h2 class="team__title">Our Leadership</h2>
                    <div class="team__members">
                        <div class="team__member">
                            <div class="team__member-image">
                                <img src="https://randomuser.me/api/portraits/men/39.jpg" alt="John Doe">
                            </div>
                            <h3 class="team__member-name">John Doe</h3>
                            <p class="team__member-position">Chief Executive Officer</p>
                            <div class="team__member-social">
                                <a href="#" class="social-link"><img src="/icons/linkedin.png" style="width: 30px; height: 30px;" /></a>
                                <a href="#" class="social-link"><img src="/icons/instagram.png" style="width: 30px; height: 30px;" /></a>
                                <a href="#" class="social-link"><img src="/icons/facebook.png" style="width: 30px; height: 30px;" /></a>
                            </div>
                        </div>

                        <div class="team__member">
                            <div class="team__member-image">
                                <img src="https://randomuser.me/api/portraits/women/39.jpg" alt="Jane Smith">
                            </div>
                            <h3 class="team__member-name">Jane Smith</h3>
                            <p class="team__member-position">Technical Director</p>
                            <div class="team__member-social">
                                <a href="#" class="social-link"><img src="/icons/linkedin.png" style="width: 30px; height: 30px;" /></a>
                                <a href="#" class="social-link"><img src="/icons/instagram.png" style="width: 30px; height: 30px;" /></a>
                                <a href="#" class="social-link"><img src="/icons/facebook.png" style="width: 30px; height: 30px;" /></a>
                            </div>
                        </div>

                        <div class="team__member">
                            <div class="team__member-image">
                                <img src="https://randomuser.me/api/portraits/men/29.jpg" alt="Mike Johnson">
                            </div>
                            <h3 class="team__member-name">Mike Johnson</h3>
                            <p class="team__member-position">Operations Director</p>
                            <div class="team__member-social">
                                <a href="#" class="social-link"><img src="/icons/linkedin.png" style="width: 30px; height: 30px;" /></a>
                                <a href="#" class="social-link"><img src="/icons/instagram.png" style="width: 30px; height: 30px;" /></a>
                                <a href="#" class="social-link"><img src="/icons/facebook.png" style="width: 30px; height: 30px;" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;

        return this.element;
    }
} 