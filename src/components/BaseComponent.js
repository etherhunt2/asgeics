export default class BaseComponent {
    constructor(tagName = 'div', className = '') {
        this.element = document.createElement(tagName);
        if (className) {
            this.element.className = className;
        }
    }

    async render() {
        // To be implemented by child classes
        throw new Error('render() method must be implemented');
    }

    // Helper method to create elements with classes
    createElement(tagName, className = '') {
        const element = document.createElement(tagName);
        if (className) {
            element.className = className;
        }
        return element;
    }

    // Helper method to create elements with text content
    createElementWithText(tagName, text, className = '') {
        const element = this.createElement(tagName, className);
        element.textContent = text;
        return element;
    }
} 