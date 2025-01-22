/**
 * Copyright (c) 2024-present, Prime Nevada
 * All rights reserved.
 *
 * This source code is licensed under the BSD 4-Clause license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

class PrimeFooter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        try {
            // Load HTML template
            const response = await fetch('/components/footer/footer.html');
            const text = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const template = doc.querySelector('#prime-footer-template');

            // Load CSS
            const style = document.createElement('style');
            const cssResponse = await fetch('/components/footer/footer.css');
            style.textContent = await cssResponse.text();

            // Attach to shadow DOM
            this.shadowRoot.appendChild(style);
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        } catch (error) {
            console.error('Error loading footer component:', error);
        }
    }
}

customElements.define('prime-footer', PrimeFooter);
