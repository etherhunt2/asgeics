// Mobile Menu Toggle
export function initializeMobileMenu() {
    const mobileMenuBtn = document.querySelector('.header__mobile-menu');
    const nav = document.querySelector('.header__nav');

    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// Header Scroll Effect
export function initializeHeaderScroll() {
    const header = document.querySelector('.header');
    const scrollThreshold = 50;

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
} 