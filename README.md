# Prime Nevada Website

This is the repository for the Prime Nevada website. The project uses HTML5, CSS3, and vanilla JavaScript to create a modern, responsive website.

## Project Structure

```
primenevada/
├── index.html          # Main HTML file
├── firm.html          # The Firm page
├── what-we-do.html    # What We Do page
├── contact.html       # Contact page
├── styles/
│   └── main.css       # Main stylesheet
├── js/
│   └── main.js        # JavaScript functionality
├── images/            # Image assets
├── .env              # Environment variables (not in repo)
├── .env.example      # Example environment configuration
├── .gitignore        # Git ignore rules
├── DEPLOYMENT.md     # Deployment instructions
└── README.md         # Project documentation
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/primenevada.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your actual values.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Features

- Responsive design
- Modern UI
- Smooth scroll navigation
- Mobile-friendly layout
- Contact form with reCAPTCHA protection
- Email notifications

## Security

### Environment Variables
- NEVER commit the `.env` file to the repository
- Use `.env.example` as a template
- Keep production credentials separate from development
- See `DEPLOYMENT.md` for secure deployment instructions

### Credentials Management
1. reCAPTCHA keys
   - Get from Google reCAPTCHA admin console
   - Use v3 implementation
   - Keep secret key secure

2. Email Configuration
   - Use app-specific passwords
   - Rotate credentials regularly
   - Monitor for unauthorized access

### GitHub Security
- Repository includes `.gitignore` to prevent committing sensitive files
- Regular security updates via Dependabot
- Code scanning enabled for vulnerability detection

## Deployment

See `DEPLOYMENT.md` for detailed deployment instructions, including:
- Setting up on GoDaddy
- Configuring environment variables
- Security best practices
- Monitoring and maintenance

## Development Guidelines

1. Security
   - Never commit sensitive data
   - Keep dependencies updated
   - Follow security best practices

2. Environment Variables
   - Use `.env` for local development
   - Use GoDaddy's environment configuration in production
   - Keep backup of production credentials in a secure location

## Support

For security concerns or questions, contact:
- Email: info@primenevada.com
- Subject: "Security: [Your Concern]"

## License

All rights reserved. This project is proprietary and confidential.
