class CookieConsent {
    constructor() {
        this.consentKey = 'prime_nevada_cookie_consent';
        this.analyticsEnabled = false;
        this.initConsent();
    }

    initConsent() {
        // Check for existing consent
        const consent = localStorage.getItem(this.consentKey);
        if (!consent) {
            this.showConsentDialog();
        } else {
            this.analyticsEnabled = (consent === 'accepted');
            if (this.analyticsEnabled) {
                this.enableAnalytics();
            }
        }
    }

    showConsentDialog() {
        const dialog = document.createElement('div');
        dialog.className = 'cookie-consent';
        dialog.innerHTML = `
            <div class="cookie-content">
                <p>We use cookies to analyze site traffic and optimize your experience. 
                   By clicking "Accept," you consent to our use of cookies.</p>
                <div class="cookie-buttons">
                    <button class="button secondary" id="cookie-accept">Accept</button>
                    <button class="button" id="cookie-decline">Decline</button>
                </div>
                <a href="/privacy.html" class="cookie-link">Privacy Policy</a>
            </div>
        `;

        document.body.appendChild(dialog);

        // Add event listeners
        document.getElementById('cookie-accept').addEventListener('click', () => {
            this.acceptCookies();
            dialog.remove();
        });

        document.getElementById('cookie-decline').addEventListener('click', () => {
            this.declineCookies();
            dialog.remove();
        });
    }

    acceptCookies() {
        localStorage.setItem(this.consentKey, 'accepted');
        this.analyticsEnabled = true;
        this.enableAnalytics();
    }

    declineCookies() {
        localStorage.setItem(this.consentKey, 'declined');
        this.analyticsEnabled = false;
        this.disableAnalytics();
    }

    enableAnalytics() {
        // Enable Google Analytics
        window['ga-disable-G-2W7TN3797D'] = false;
    }

    disableAnalytics() {
        // Disable Google Analytics
        window['ga-disable-G-2W7TN3797D'] = true;
    }
}

// Initialize cookie consent
document.addEventListener('DOMContentLoaded', () => {
    window.cookieConsent = new CookieConsent();
});
