import Hero from '../components/Hero.js';
import Services from '../components/Services.js';
import Process from '../components/Process.js';
import Benefits from '../components/Benefits.js';
import Testimonials from '../components/Testimonials.js';
import Whatsapp from '../components/Whatsapp.js';

export default class Home {
    constructor() {
        this.element = document.createElement('main');
    }

    async render() {
        // Create and render all sections
        const hero = new Hero();
        const services = new Services();
        const process = new Process();
        const benefits = new Benefits();
        const testimonials = new Testimonials();
        const whatsapp = new Whatsapp();

        // Append all sections
        this.element.appendChild(await hero.render());
        this.element.appendChild(await services.render());
        this.element.appendChild(await process.render());
        this.element.appendChild(await benefits.render());
        this.element.appendChild(await testimonials.render());
        this.element.appendChild(await whatsapp.render());
        return this.element;
    }
} 