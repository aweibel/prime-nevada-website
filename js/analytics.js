// Google Analytics 4 Configuration
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

// Prime Nevada GA4 Measurement ID
gtag('config', 'G-2W7TN3797D');

// Enhanced event tracking
document.addEventListener('DOMContentLoaded', function() {
    // Track CTA button clicks
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': this.textContent.trim(),
                'value': 1
            });
        });
    });

    // Track form submissions
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            gtag('event', 'submit', {
                'event_category': 'Form',
                'event_label': 'Contact Form',
                'value': 1
            });
        });
    }
});
