# Prime Nevada Website 🏢

[![Static Site](https://img.shields.io/badge/Website-Static-blue)](https://primenevada.com)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://html.spec.whatwg.org/)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![WCAG 2.1 Level AA](https://img.shields.io/badge/WCAG_2.1-Level_AA-green)](https://www.w3.org/WAI/WCAG21/quickref/)

Modern, responsive website for Prime Nevada, built with pure HTML, CSS, and JavaScript. Our site emphasizes clean design, fast performance, and excellent user experience while maintaining WCAG 2.1 Level AA accessibility standards.

![Prime Nevada Website Preview](images/hero-bg.jpg)

## 🌟 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional aesthetic with smooth animations
- **Fast Loading**: No framework dependencies, pure vanilla implementation
- **Contact Form**: Secure form handling via FormSubmit.co
- **Mobile-First**: Touch-friendly navigation and layout
- **Accessibility**: WCAG 2.1 Level AA compliant with:
  - Proper ARIA labels and roles
  - Keyboard navigation support
  - Color contrast compliance
  - Screen reader optimization
  - Focus management
  - Alternative text for images

## 📁 Project Structure

```
primenevada/
├── index.html          # Home page
├── firm.html          # The Firm page
├── what-we-do.html    # Services page
├── contact.html       # Contact page
├── thank-you.html     # Form submission success page
├── styles/
│   └── main.css       # Main stylesheet
├── js/
│   └── main.js        # Client-side JavaScript
└── images/            # Image assets
```

## 🚀 Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/primenevada.git
   cd primenevada
   ```

2. **Local Development**
   - Use a local server (e.g., Live Server in VS Code)
   - Or use Python's built-in server:
     ```bash
     python -m http.server 8000
     ```
   - Visit `http://localhost:8000` in your browser

## 💻 Development

### Prerequisites
- Basic understanding of HTML, CSS, and JavaScript
- A modern web browser
- A text editor (VS Code recommended)

### Best Practices
- Follow semantic HTML5 markup
- Maintain mobile-first responsive design
- Keep JavaScript minimal and unobtrusive
- Optimize images before committing
- Test across multiple browsers
- Ensure accessibility compliance:
  - Test with screen readers (VoiceOver, NVDA)
  - Verify keyboard navigation
  - Check color contrast ratios
  - Validate ARIA attributes
  - Use semantic HTML elements

## 🔒 Security Features

- **Form Protection**: 
  - Honeypot fields
  - CAPTCHA verification
  - Secure form processing via FormSubmit.co

- **Content Security**:
  - No sensitive data in repository
  - Secure external service integration
  - HTTPS enforcement

## 📝 Making Changes

1. Create a new branch for your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and test locally

3. Commit with clear, descriptive messages
   ```bash
   git commit -m "Add: Brief description of changes"
   ```

4. Push and create a pull request
   ```bash
   git push origin feature/your-feature-name
   ```

## 🌐 Deployment

1. Upload files to your web hosting service
2. Ensure all files maintain their structure
3. Configure proper MIME types
4. Enable HTTPS
5. Test all forms and links

## 📫 Contact

For questions or support:
- 📧 Email: info@primenevada.com
- 🌐 Website: [primenevada.com](https://primenevada.com)

## ⚖️ License

© 2024 Prime Nevada. All rights reserved. This project is proprietary and confidential.
