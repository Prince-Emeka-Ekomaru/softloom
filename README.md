# Softloom - Innovative Software Solutions

A modern, responsive website for Softloom Technologies built with React, Vite, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Beautiful, responsive UI with custom brand colors (white, green, golden yellow, dark blue)
- **Smooth Animations**: Engaging transitions and hover effects throughout
- **Functional Contact Form**: Integrated with EmailJS for email functionality
- **Mobile-First**: Fully responsive design for all device sizes
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **Type-Safe**: Written in TypeScript for better code quality and developer experience

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Email service integration
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed on your machine

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd softloom
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure EmailJS:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new email service (Gmail, Outlook, etc.)
   - Create an email template with these template parameters:
     - `{{from_name}}` - Sender's full name
     - `{{company_name}}` - Company name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_name}}` - Recipient name
   - Copy your Service ID, Template ID, and Public Key to `.env`

5. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
softloom/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Services.tsx        # Services showcase
│   │   ├── Industries.tsx      # Industries we serve
│   │   ├── WhyPartner.tsx      # Benefits section
│   │   ├── CTASections.tsx     # Call-to-action sections
│   │   ├── ContactForm.tsx     # Contact form with EmailJS
│   │   └── Footer.tsx          # Footer
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML entry point
├── tailwind.config.js          # Tailwind configuration
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## Brand Colors

- **Green**: `#10B981` - Primary action color
- **Golden Yellow**: `#F59E0B` - Accent color
- **Dark Blue**: `#1E3A8A` - Primary brand color
- **Dark Blue (Secondary)**: `#0F172A` - Background color
- **White**: `#FFFFFF` - Base color

## Customization

### Changing Colors

Edit `tailwind.config.js` to customize the brand colors:

```javascript
colors: {
  'softloom-green': '#10B981',
  'softloom-yellow': '#F59E0B',
  'softloom-blue': '#1E3A8A',
  'softloom-dark-blue': '#0F172A',
}
```

### Updating Content

All content is located in the component files. Edit the respective component to update:

- Services: `src/components/Services.tsx`
- Industries: `src/components/Industries.tsx`
- Benefits: `src/components/WhyPartner.tsx`
- Contact Info: `src/components/ContactForm.tsx` and `src/components/Footer.tsx`

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Environment Variables for Production

Make sure to set up the following environment variables in your hosting platform:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Softloom Technologies. All rights reserved.

## Support

For questions or support, contact us at hello@softloom.com

