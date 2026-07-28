import BaseComponent from "../components/BaseComponent.js";
import Whatsapp from "../components/Whatsapp.js";

export default class About extends BaseComponent {
  constructor() {
    super("main", "about-page");
  }

  async render() {
    this.element.innerHTML = `
            <section class="about-hero">
                <div class="about-hero__container">
                    <h1 class="about-hero__title">About Us</h1>
                    <p class="about-hero__subtitle">Building Excellence Through Innovation</p>
                    <p class="about-hero__subtitle" style="font-style: italic;">We handle everything else: proposals, design, engineering, permitting, interconnection, and consulting.</p>
                </div>
            </section>

            <section class="about-description">
                <div class="about-description__container">
                    <div class="about-description__item image1">
                        <div class="about-description__content">
                            <h2>Welcome to <strong>ASGEICS INDIA</strong></h2>
                            <p>
                                At ASGEICS INDIA, we are committed to building a cleaner, smarter, and more sustainable future through 
                                innovative solar energy solutions. Our company was founded with a vision to provide complete solar 
                                engineering and installation services under one roof — including solar design, structural engineering 
                                Design, electrical planning, PE Stamping, permit assistance and professional installation for  Residential /Commercial Projects.
                            </p></br>
                            <p>
                                We understand that every solar project is more than just an energy system; it is an investment in 
                                reliability, efficiency, and sustainability. That is why we focus on delivering high-quality solutions 
                                that combine technical expertise, safety, and long-term performance.
                            </p></br>
                            <p>
                                Our mission is to simplify the transition to renewable energy by offering end-to-end services with 
                                transparency, precision, and customer satisfaction at the core of everything we do. From concept and 
                                design to approvals and final installation, our dedicated team ensures that every project is executed 
                                with excellence.
                            </p></br>
                            <p>
                                At ASGEICS INDIA, we believe solar energy is not only the future — it is the responsibility of the 
                                present. We are proud to contribute  clean energy growth and support businesses  communities in adopting 
                                sustainable power solutions.
                            </p></br>
                            <p>
                                Thank you for trusting ASGEICS INDIA as your solar engineering and installation partner. We look forward to powering a brighter tomorrow together.
                            </p>
                        </div>
                    </div>

                    <div class="about-description__item reverse image4">
                        <div class="about-description__content reverse">
                            <h2>Our Expertise & Reach</h2>
                            <p>Asgeics India's over 10 years of experience, Asgeics India provides the quickest, most cost effective, structural Analysis, EE stamps and post along with the Pre-installation 
                            certification for commercial and residential solar installation companies and overseas design firms. Asgeics India creates over 5,000 engineering Certification per month. 
                            By providing the fastest, lowest cost and most accurate certifications, Asgeics India enables commercial-Industrial and residential installation companies to minimize time spent on 
                            the permitting process and maximize profits through the completion of more solar projects. Asgeics India is licensed in 50 U.S. states, District of Columbia and Puerto Rico. 
                            Asgeics India is now licensed in Canada province and started working on Alberta and British Columbia and expanding business in Sakaschtewan.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="team">
                <div class="team__container">
                    <div class="team__header">
                        <span class="team__badge">Leadership Team</span>
                        <h2 class="team__title">Our Leadership</h2>
                        <div class="team__title-divider"></div>
                    </div>
                    <div class="team__members">
                        <div class="team__member team__member--founder">
                            <div class="team__member-image-container">
                                <img src="/images/abishek-founder.jpeg" alt="Abishek" class="team__member-img">
                            </div>
                            <span class="team__member-badge">Founder &amp; CEO</span>
                            <h3 class="team__member-name">Abishek</h3>
                            
                            <p class="team__member-description">
                                Founder and President of ASGEICS INDIA with over 15 years of experience in Electrical and Renewal Energy System . Specialized in power system design , electrical infrastructure , planning and advanced solar PV system integration
                            </p>

                            <div class="team__member-social">
                                <a href="#" class="social-link" aria-label="LinkedIn"><img src="/icons/linkedin.png" alt="LinkedIn" /></a>
                                <a href="#" class="social-link" aria-label="Instagram"><img src="/icons/instagram.png" alt="Instagram" /></a>
                                <a href="#" class="social-link" aria-label="Facebook"><img src="/icons/facebook.png" alt="Facebook" /></a>
                            </div>
                        </div>

                        <div class="team__member team__member--cofounder">
                            <div class="team__member-emblem">
                                <span class="emblem-initials">SD</span>
                                <div class="emblem-ring"></div>
                            </div>
                            <span class="team__member-badge highlight">Co-Founder</span>
                            <h3 class="team__member-name team__member-name--large">Sanju Devi</h3>
                            <div class="team__member-accent-line"></div>
                            <div class="team__member-social">
                                <a href="#" class="social-link" aria-label="LinkedIn"><img src="/icons/linkedin.png" alt="LinkedIn" /></a>
                                <a href="#" class="social-link" aria-label="Instagram"><img src="/icons/instagram.png" alt="Instagram" /></a>
                                <a href="#" class="social-link" aria-label="Facebook"><img src="/icons/facebook.png" alt="Facebook" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="specialist_team">
                    <h2 class="specialist_team_title">Our Specialists</h2>
                    <div class="specialist_team_members">
                        <div class="team_member">
                            <h3 class="team_member_name">Avinash Anand</h3>
                            <p class="team_member_position">Sr. Operation Manager</p>
                        </div>
                        <div class="team_member">
                            <h3 class="team_member_name">Sakshi</h3>
                            <p class="team_member_position">Customer Support Executive</p>
                        </div>
                        <div class="team_member">
                            <h3 class="team_member_name">Nitesh Rana</h3>
                            <p class="team_member_position">QA/QC Design Head</p>
                        </div>
                        <div class="team_member">
                            <h3 class="team_member_name">Anjali</h3>
                            <p class="team_member_position">Accounting Lead</p>
                        </div>
                        <div class="team_member">
                            <h3 class="team_member_name">Sharnagat Yogesh</h3>
                            <p class="team_member_position"> IT  and Web developer</p>
                        </div>
                        <div class="team_member">
                            <h3 class="team_member_name">Ayush bansal</h3>
                            <p class="team_member_position">Financial Advisor</p>
                        </div>
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
