import BaseComponent from '../components/BaseComponent.js';
import Whatsapp from '../components/Whatsapp.js';

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
                    <div class="about-description__item image1">
                        <div class="about-description__content">
                            <h2>Our Vision</h2>
                            <p>ASGEICS INDIA, we envision a future where engineering excellence meets sustainable innovation. Our commitment to quality and precision has made us a trusted name in the industry for over two decades. We believe in creating solutions that not only meet today's challenges but are also prepared for tomorrow's demands.</p>
                        </div>
                    </div>

                    <div class="about-description__item reverse image2">
                        <div class="about-description__content reverse">
                            <h2>Our Mission</h2>
                            <p>Our mission is to deliver exceptional engineering solutions that transform ideas into reality. We combine technical expertise with innovative thinking to create sustainable, efficient, and cost-effective solutions for our clients. Through continuous learning and adaptation, we stay at the forefront of engineering advancement.</p>
                        </div>
                    </div>

                    <div class="about-description__item image3">
                        <div class="about-description__content">
                            <h2>Our Values</h2>
                            <p>Integrity, innovation, and excellence form the cornerstone of our operations. We believe in fostering long-term relationships with our clients through transparent communication and reliable service delivery. Our team's dedication to these values ensures that every project we undertake meets the highest standards of quality and professionalism.</p>
                        </div>
                    </div>

                    <div class="about-description__item reverse image4">
                        <div class="about-description__content reverse">
                            <h2>Our Expertise & Reach</h2>
                            <p>Asgeics India's over 10 years of experience, Asgeics India provides the quickest, most cost effective, structural Analysis, EE stamps and post along with the Pre-installation certification for commercial and residential solar installation companies and overseas design firms. Asgeics India creates over 10,000 engineering Certification per month. By providing the fastest, lowest cost and most accurate certifications, Asgeics India enables commercial-Industrial and residential installation companies to minimize time spent on the permitting process and maximize profits through the completion of more solar projects. Asgeics India is licensed in 50 U.S. states, District of Columbia and Puerto Rico. Asgeics India is now licensed in Canada province and started working on Alberta and British Columbia and expanding business in Sakaschtewan.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="team">
                <div class="team__container">
                    <h2 class="team__title">Our Leadership</h2>
                    <div class="team__members">
                        <div class="team__member">
                            <!--<div class="team__member-image">
                                <img src="https://randomuser.me/api/portraits/men/39.jpg" alt="Abishek Anand">
                            </div>-->
                            <h3 class="team__member-name">Abishek Anand</h3>
                            <p class="team__member-position">Abishek Anand, founder and President of Asgeics India, with over 15 years 
                            of experience in the Engineering field. He has specialized in the area of Civil Engineering in site planning and 
                            land development as well as structural engineering. Mr. Anand is considered and expert in the field of 
                            Civil/Structural Engineering. He started his own business in 2016 and has been providing engineering services 
                            exclusively for the solar industry since 2016. As part of his experience, Mr. Anand has developed and built an in-house engineering 
                            department from 2 employees to 10 employees to provide structural, Electrical reviews with design consulation.</p>
                            <!--<div class="team__member-social">
                                <a href="#" class="social-link"><img src="/icons/linkedin.png" style="width: 30px; height: 30px;" /></a>
                                <a href="#" class="social-link"><img src="/icons/instagram.png" style="width: 30px; height: 30px;" /></a>
                                <a href="#" class="social-link"><img src="/icons/facebook.png" style="width: 30px; height: 30px;" /></a>
                            </div>-->
                        </div>

                        <!--<div class="team__member">
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
                        </div>-->
                    </div>
                </div>
                <div class="whatsapp-container">
                    <a href="https://wa.link/6caatk" class="whatsapp-button">
                        <img src="./icons/whatsapp.png" alt="WhatsApp" class="whatsapp-icon">
                        <span class="whatsapp-text">Chat on WhatsApp</span>
                    </a>
                </div>
            </section>
        `;

        return this.element;
    }
} 