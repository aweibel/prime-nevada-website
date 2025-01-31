// Google Analytics 4 Configuration
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Disable GA by default until consent is given
window['ga-disable-G-2W7TN3797D'] = true;

gtag('js', new Date());
gtag('config', 'G-2W7TN3797D', {
    'anonymize_ip': true,
    'allow_google_signals': false,
    'allow_ad_personalization_signals': false
});

// Enhanced event tracking
document.addEventListener('DOMContentLoaded', () => {
    if (!window['ga-disable-G-2W7TN3797D']) {
        // Track CTA button clicks using event delegation
        document.addEventListener('click', e => {
            const button = e.target.closest('.button');
            if (button) {
                gtag('event', 'click', {
                    'event_category': 'CTA',
                    'event_label': button.textContent.trim()
                });
            }
        });

        // Track form submissions
        document.getElementById('contactForm')?.addEventListener('submit', () => {
            gtag('event', 'submit', {
                'event_category': 'Form',
                'event_label': 'Contact Form'
            });
        });
    }
});
