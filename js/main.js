/**
 * Copyright (c) 2024-present, Prime Nevada
 * All rights reserved.
 *
 * This source code is licensed under the BSD 4-Clause license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

// Import components
import '../components/navigation/navigation.js';
import '../components/footer/footer.js';

// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // Handle hero image loading
    const heroImage = document.querySelector('.hero-background');
    if (heroImage) {
        heroImage.addEventListener('load', () => heroImage.classList.add('loaded'));
    }

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({behavior: 'smooth'});
        });
    });

    // Enhanced form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const emailInput = document.getElementById('email');
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        // Use HTML5 validation and only add custom email validation
        emailInput?.addEventListener('input', () => {
            const isValid = emailInput.checkValidity();
            submitButton.disabled = !isValid;
            emailInput.classList.toggle('invalid', !isValid);
        });

        // Handle form submission
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            submitButton.disabled = true;
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm)
                });
                
                if (response.ok) {
                    window.location.href = '/thank-you.html';
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Form submission error:', error);
                submitButton.disabled = false;
            }
        });
    }
});
