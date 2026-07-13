# 🚀 Futuristic Developer Portfolio

A high-performance, immersive, and interactive personal portfolio built for modern web standards. Designed with a premium "Cyberpunk Developer Workspace" aesthetic to stand out and deliver an Awwwards-caliber user experience.

## ✨ Features

- **Cinematic Boot Sequence**: A mock terminal boot-up animation that loads before revealing the site.
- **Immersive 3D/Animated UI**: Hardware-accelerated animations using Framer Motion and custom Canvas graphics.
- **Tech Galaxy**: An interactive, rotating orbital diagram showcasing core technologies.
- **Command Palette (`Ctrl+K`)**: A searchable, keyboard-driven navigation menu for power users.
- **Custom Cursor & Floating Nav**: Glassmorphic UI elements that adapt to user interaction.
- **Secure Contact Console**: A built-in NodeMailer API route secured against XSS injection to send emails directly to your inbox.
- **Responsive & Optimized**: Built with Next.js 16 and Tailwind CSS v4, compiled via Turbopack for lightning-fast speeds.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) & [Lenis](https://lenis.studiofreight.com/) (Smooth Scrolling)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Backend:** Next.js Route Handlers + [Nodemailer](https://nodemailer.com/)
- **Language:** TypeScript

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/FayisKanthapuram/Portfolio.git
cd Portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root of the project and add your Gmail credentials for the contact form:

```env
# Your Gmail Address
EMAIL_USER="your-email@gmail.com"

# Your 16-character Google App Password (NOT your normal password)
# Generate at: Google Account > Security > 2-Step Verification > App passwords
EMAIL_PASS="your-app-password"
```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

## 🌐 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new). Make sure to add your `EMAIL_USER` and `EMAIL_PASS` to the Environment Variables section in your Vercel project settings.

## 📄 License

This project is open-source and available under the MIT License.
