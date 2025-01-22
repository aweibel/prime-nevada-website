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
        heroImage.addEventListener('load', () => {
            heroImage.classList.add('loaded');
        });
        
        // If image fails to load, fallback is already in place via CSS
        heroImage.addEventListener('error', () => {
            console.error('Hero image failed to load');
        });
    }

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

    // Enhanced form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const emailInput = document.getElementById('email');
        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');
        
        // Real-time email validation
        emailInput.addEventListener('input', () => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(emailInput.value)) {
                emailInput.setCustomValidity('');
            } else {
                emailInput.setCustomValidity('Please enter a valid email address');
            }
        });

        // Real-time name validation
        nameInput.addEventListener('input', () => {
            const nameRegex = /^[A-Za-z\s]{2,}$/;
            if (nameRegex.test(nameInput.value)) {
                nameInput.setCustomValidity('');
            } else {
                nameInput.setCustomValidity('Please enter a valid name (minimum 2 characters, letters only)');
            }
        });

        // Real-time message validation
        messageInput.addEventListener('input', () => {
            if (messageInput.value.length < 10) {
                messageInput.setCustomValidity('Message must be at least 10 characters long');
            } else {
                messageInput.setCustomValidity('');
            }
        });

        // Form submission handler
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Additional validation before submission
            if (!contactForm.checkValidity()) {
                return;
            }

            // Show loading state
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            try {
                const response = await fetch('/submit-form.php', {
                    method: 'POST',
                    body: new FormData(contactForm)
                });

                if (response.ok) {
                    window.location.href = '/thank-you';
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again later.');
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
            }
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
