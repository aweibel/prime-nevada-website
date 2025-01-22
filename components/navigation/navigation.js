/**
 * Copyright (c) 2024-present, Prime Nevada
 * All rights reserved.
 *
 * This source code is licensed under the BSD 4-Clause license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

class PrimeNavigation extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        try {
            // Load HTML template
            const response = await fetch('/components/navigation/navigation.html');
            const text = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(text, 'text/html');
            const template = doc.querySelector('#prime-navigation-template');

            // Load CSS
            const style = document.createElement('style');
            const cssResponse = await fetch('/components/navigation/navigation.css');
            style.textContent = await cssResponse.text();

            // Attach to shadow DOM
            this.shadowRoot.appendChild(style);
            this.shadowRoot.appendChild(template.content.cloneNode(true));

            // Setup event listeners
            this.setupEventListeners();
        } catch (error) {
            console.error('Error loading navigation component:', error);
        }
    }

    setupEventListeners() {
        const menuToggle = this.shadowRoot.querySelector('.menu-toggle');
        const mainMenu = this.shadowRoot.querySelector('#main-menu');

        if (menuToggle && mainMenu) {
            menuToggle.addEventListener('click', () => {
                const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
                menuToggle.setAttribute('aria-expanded', !isExpanded);
                mainMenu.classList.toggle('active');
            });
        }
    }
}

customElements.define('prime-navigation', PrimeNavigation);
