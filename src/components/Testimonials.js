import BaseComponent from './BaseComponent.js';

export default class Testimonials extends BaseComponent {
    constructor() {
        super('section', 'testimonials');
        this.element.id = 'testimonials';
    }

    async render() {
        this.element.innerHTML = `
            <div class="testimonials__container">
                <header class="testimonials__header">
                    <h2 class="testimonials__title">What Our Clients Say</h2>
                    <p class="testimonials__subtitle">Hear from our satisfied customers about their experience with us</p>
                </header>

                <div class="testimonials__grid">
                    <div class="testimonial-card">
                        <p class="testimonial-card__content">"The customer service provided by Asgeics India is exceptional. Their team is responsive and always ready to help and support  to design permits and stamping for our projects quickly."</p>
                        <div class="testimonial-card__author">
                            <!-- <img class="testimonial-card__avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dalton Garris"> -->
                            <div class="testimonial-card__info">
                                <h4 class="testimonial-card__name">Dalton Garris</h4>
                                <!-- <p class="testimonial-card__position">Titan Solar Power</p> -->
                            </div>
                        </div>
                    </div>

                    <div class="testimonial-card">
                        <p class="testimonial-card__content">"The Asgeics India platform is a game-changer for us! It has simplified the structural and electrical engineering design process and increased our turn times on every stamped projects"</p>
                        <div class="testimonial-card__author">
                            <!-- <img class="testimonial-card__avatar" src="https://randomuser.me/api/portraits/women/32.jpg" alt="Ben Ogden"> -->
                            <div class="testimonial-card__info">
                                <h4 class="testimonial-card__name">Ben Ogden</h4>
                                <!-- <p class="testimonial-card__position">LGCY Power</p> -->
                            </div>
                        </div>
                    </div>

                    <div class="testimonial-card">
                        <p class="testimonial-card__content">"Our Company is consistently impressed with the Asgeics India team's expertise. Their industry knowledge is clear in every interaction, and the quality is liberally unmatched!"</p>
                        <div class="testimonial-card__author">
                            <!-- <img class="testimonial-card__avatar" src="https://randomuser.me/api/portraits/men/39.jpg" alt="Tanner Smith"> -->
                            <div class="testimonial-card__info">
                                <h4 class="testimonial-card__name">Tanner Smith</h4>
                                <!-- <p class="testimonial-card__position">ADT Solar</p> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        return this.element;
    }
} 