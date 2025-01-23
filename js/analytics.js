// Google Analytics 4 Configuration
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Disable GA by default until consent is given
window['ga-disable-G-2W7TN3797D'] = true;

gtag('js', new Date());
gtag('config', 'G-2W7TN3797D', {
    'anonymize_ip': true, // Anonymize IP addresses
    'allow_google_signals': false, // Disable Google signals until consent
    'allow_ad_personalization_signals': false // Disable ad personalization
});

// Enhanced event tracking
document.addEventListener('DOMContentLoaded', function() {
    // Only track events if analytics is enabled
    if (!window['ga-disable-G-2W7TN3797D']) {
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
    }
});
