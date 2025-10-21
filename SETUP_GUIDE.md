# Softloom Quick Setup Guide

This guide will help you get the Softloom website up and running in minutes.

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including React, Vite, Tailwind CSS, and EmailJS.

## Step 2: Configure Email Service (Optional for Development)

The contact form uses EmailJS. For development, you can skip this step and the form will show an error message, but everything else will work.

For production or to test the contact form:

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Create a new Email Service (connect Gmail, Outlook, etc.)
3. Create an Email Template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{company_name}}` - Company name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - The message
   - `{{to_name}}` - Your name/team name

4. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

5. Add your EmailJS credentials to `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Step 3: Start Development Server

```bash
npm run dev
```

The website will open automatically at `http://localhost:3000`

## Step 4: Customize Content

### Update Company Information

Edit these files to customize:

- **Company name/branding**: `src/components/Header.tsx` and `src/components/Footer.tsx`
- **Services**: `src/components/Services.tsx`
- **Industries**: `src/components/Industries.tsx`
- **Contact info**: `src/components/ContactForm.tsx` and `src/components/Footer.tsx`

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'softloom-green': '#10B981',      // Change to your green
  'softloom-yellow': '#F59E0B',     // Change to your yellow
  'softloom-blue': '#1E3A8A',       // Change to your blue
  'softloom-dark-blue': '#0F172A',  // Change to your dark blue
}
```

## Step 5: Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory, ready to deploy.

## Common Issues

### Port 3000 is already in use

Edit `vite.config.ts` and change the port number:

```typescript
server: {
  port: 3001, // Change to any available port
  open: true
}
```

### EmailJS not working

- Make sure you've added all environment variables to `.env`
- Restart the dev server after adding `.env` variables
- Check that your EmailJS template has all the required variables
- Verify your EmailJS service is active and connected

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. New site from Git → Select your repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variables
7. Deploy!

## Need Help?

- Check `README.md` for detailed documentation
- Review component files for inline comments
- Contact: hello@softloom.com

---

**Built with:** React + Vite + TypeScript + Tailwind CSS

