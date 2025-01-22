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

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                }

                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 2rem;
                }

                .logo {
                    color: var(--color-text-primary, #ffffff);
                    text-decoration: none;
                    font-size: 1.5rem;
                    font-weight: bold;
                    letter-spacing: 2px;
                }

                ul {
                    display: flex;
                    list-style: none;
                    gap: 2rem;
                    margin: 0;
                    padding: 0;
                }

                li a {
                    color: var(--color-text-primary, #ffffff);
                    text-decoration: none;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: color 0.3s ease;
                }

                li a:hover {
                    color: var(--color-brand-orange, #ff6b35);
                }

                .menu-toggle {
                    display: none;
                    padding: 0.8rem;
                    background: transparent;
                    border: 1px solid var(--color-text-primary, #ffffff);
                    color: var(--color-text-primary, #ffffff);
                    cursor: pointer;
                    font-size: 0.9rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                @media (max-width: 768px) {
                    .menu-toggle {
                        display: block;
                    }

                    ul {
                        display: none;
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        flex-direction: column;
                        background-color: var(--color-bg-overlay, rgba(0, 0, 0, 0.9));
                        padding: 1rem 0;
                        border-bottom: 1px solid var(--color-border-light, rgba(255, 255, 255, 0.1));
                    }

                    ul.active {
                        display: flex;
                    }

                    li a {
                        display: block;
                        padding: 1rem 2rem;
                    }
                }
            </style>
            <nav>
                <a href="/" class="logo" part="logo">
                    <slot name="logo">PRIME NEVADA</slot>
                </a>
                <button class="menu-toggle" aria-expanded="false" aria-controls="main-menu">
                    <slot name="menu-text">Menu</slot>
                </button>
                <ul id="main-menu">
                    <li><a href="/firm">THE FIRM</a></li>
                    <li><a href="/what-we-do">WHAT WE DO</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                </ul>
            </nav>
        `;

        this.setupEventListeners();
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
