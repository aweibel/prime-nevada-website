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

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    background-color: var(--color-bg-primary, #000000);
                    padding: 4rem 2rem 2rem;
                    border-top: 1px solid var(--color-border-light, rgba(255, 255, 255, 0.1));
                }

                .footer-content {
                    max-width: 1400px;
                    margin: 0 auto;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 3rem;
                }

                .footer-section {
                    color: var(--color-text-primary, #ffffff);
                }

                h4 {
                    color: var(--color-text-primary, #ffffff);
                    font-size: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 1.5rem;
                }

                p {
                    color: var(--color-text-primary, #ffffff);
                    font-size: 0.9rem;
                    margin-bottom: 0.5rem;
                }

                ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                li {
                    margin-bottom: 0.5rem;
                }

                a {
                    color: var(--color-text-primary, #ffffff);
                    text-decoration: none;
                    font-size: 0.9rem;
                    transition: color 0.3s ease;
                }

                a:hover {
                    color: var(--color-brand-orange, #ff6b35);
                }

                .footer-bottom {
                    max-width: 1400px;
                    margin: 3rem auto 0;
                    padding-top: 2rem;
                    border-top: 1px solid var(--color-border-light, rgba(255, 255, 255, 0.1));
                    text-align: center;
                }

                .footer-bottom p {
                    color: var(--color-text-primary, #ffffff);
                    font-size: 0.8rem;
                    margin: 0;
                }
            </style>

            <footer>
                <div class="footer-content">
                    <div class="footer-section">
                        <h4>Contact</h4>
                        <slot name="address">
                            <p>123 Main Street</p>
                            <p>Las Vegas, NV 89101</p>
                            <p>Email: info@primenevada.com</p>
                            <p>Phone: (702) 555-0123</p>
                        </slot>
                    </div>
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <slot name="links">
                            <ul>
                                <li><a href="/firm">The Firm</a></li>
                                <li><a href="/what-we-do">What We Do</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>
                        </slot>
                    </div>
                </div>
                <div class="footer-bottom">
                    <slot name="copyright">
                        <p>&copy; 2024-present Prime Nevada. All rights reserved.</p>
                    </slot>
                </div>
            </footer>
        `;
    }
}

customElements.define('prime-footer', PrimeFooter);
