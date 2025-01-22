/**
 * Copyright (c) 2024-present, Prime Nevada
 * All rights reserved.
 *
 * This source code is licensed under the BSD 4-Clause license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

// Import components
import './components/navigation.js';
import './components/footer.js';

// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Show loading state
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Form will be handled by FormSubmit.co
            // Re-enable the button after a short delay
            setTimeout(() => {
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
            }, 2000);
        });
    }

    // Add header scroll effect
    let lastScroll = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
});
