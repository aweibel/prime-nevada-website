# Node.js Deployment Guide for GoDaddy

## Prerequisites

1. GoDaddy Hosting with cPanel access
2. Node.js hosting enabled (contact GoDaddy support if needed)
3. SSH access to your hosting account

## Setting Up Node.js on GoDaddy

1. SSH into your GoDaddy server:
   ```bash
   ssh username@your-domain.com
   ```

2. Install Node Version Manager (nvm):
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   source ~/.bashrc
   ```

3. Install Node.js:
   ```bash
   nvm install 18
   nvm use 18
   ```

4. Install PM2 (Process Manager):
   ```bash
   npm install -g pm2
   ```

## Deploying the Application

1. Create application directory:
   ```bash
   mkdir -p ~/primenevada
   cd ~/primenevada
   ```

2. Clone or upload your code:
   ```bash
   git clone https://github.com/yourusername/primenevada.git .
   ```

3. Install dependencies:
   ```bash
   npm install --production
   ```

4. Set up environment variables:
   ```bash
   # Create .env file
   cp .env.example .env
   
   # Edit with your production values
   nano .env
   
   # Set proper permissions
   chmod 600 .env
   ```

5. Start the application with PM2:
   ```bash
   pm2 start server.js --name "primenevada"
   pm2 save
   pm2 startup
   ```

## Domain Configuration

1. In cPanel, set up a reverse proxy:
   - Go to "Domains" section
   - Click on your domain
   - Under "Node.js", add a new application
   - Set the following:
     - Application root: /home/username/primenevada
     - Application URL: your-domain.com
     - Application startup file: server.js
     - Node.js version: 18
     - Environment: production

2. Configure SSL:
   - Install SSL certificate through cPanel
   - Enable HTTPS redirection

## Environment Variables

Required environment variables in `.env`:
```
RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_app_password
PORT=3000
NODE_ENV=production
```

## Monitoring and Maintenance

1. View application logs:
   ```bash
   pm2 logs primenevada
   ```

2. Monitor application:
   ```bash
   pm2 monit
   ```

3. Restart application:
   ```bash
   pm2 restart primenevada
   ```

4. Update application:
   ```bash
   cd ~/primenevada
   git pull
   npm install --production
   pm2 restart primenevada
   ```

## Security Best Practices

1. Keep Node.js and npm packages updated
2. Use HTTPS only
3. Store sensitive data in .env
4. Set proper file permissions
5. Regular security updates
6. Monitor application logs
7. Use PM2 for process management
8. Enable GoDaddy firewall

## Backup Strategy

1. Code backup:
   - GitHub repository
   - Local development backup

2. Environment backup:
   - Secure copy of .env
   - Document all credentials
   - Regular database backups (if added later)

## Troubleshooting

1. If the application crashes:
   ```bash
   pm2 logs primenevada
   ```

2. If changes don't appear:
   ```bash
   pm2 restart primenevada
   ```

3. If server restarts:
   ```bash
   pm2 resurrect
   ```

## Support

For hosting issues:
- GoDaddy Support: 1-866-938-1119
- Documentation: https://www.godaddy.com/help

For application issues:
- Email: info@primenevada.com
- Subject: "Technical Support: [Issue]"
