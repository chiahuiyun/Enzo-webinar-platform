# 💡 Enzo: AI-Powered SaaS Webinar Platform

**Elevating Webinars with Conversational AI Sales Agents**

Enzo is a production-ready Software as a Service (SaaS) application that revolutionizes the webinar experience by integrating advanced Voice AI agents into a seamless streaming platform. It empowers marketers and business owners to automate their sales process by providing dedicated, intelligent AI reps for one-on-one customer interaction during live events.



**Home Page**

<img width="1341" height="832" alt="Enzo" src="https://github.com/user-attachments/assets/cede8664-5ff3-4d73-a49c-857dc4181a0c" />


**Dashboard Page**

<img width="1632" height="850" alt="image" src="https://github.com/user-attachments/assets/1aa550b1-1d48-4762-a794-d32c95bfe7f1" />


## ✨ Key Features

Based on the application's structure and data models, Enzo includes the following core functionalities:

* **Webinar Management:** Create, schedule, and manage webinars with statuses like `SCHEDULED`, `WAITING_ROOM`, `LIVE`, `ENDED`, and `CANCELLED`.
* **Live Streaming:** Utilize Stream.io for real-time video and chat capabilities to host live events.
* **Monetization & Payments:** Integrate Stripe for payment processing, including support for product pricing, coupons, and tracking Stripe Customer and Connect IDs for presenters.
* **Lead & Attendance Pipeline:** Track attendees through various stages of the sales pipeline: `REGISTERED`, `ATTENDED`, `ADDED_TO_CART`, `FOLLOW_UP`, `BREAKOUT_ROOM`, and `CONVERTED`.
* **AI Agent Integration:** Create and configure dedicated AI agents using Vapi.ai for voice-based interactions, customized with a `prompt`, `model`, and `firstMessage`.
* **User & Authentication:** Secure authentication and user management powered by Clerk.js, tracking user subscriptions and profile information.
* **Email Communication:** Integrated with Resend for sending transactional emails, such as webinar start notifications.

## 🛠️ Tech Stack

This project is built using a modern JavaScript ecosystem:

### Framework & Runtime
* **Next.js** (v15.2.4)
* **React** (v19.0.0)
* **TypeScript**

### Database & ORM
* **Prisma** (v6.3.1)
* **PostgreSQL** (via Prisma datasource)

### Authentication & Authorization
* **Clerk** (`@clerk/nextjs`)

### Services & APIs
* **Stream.io:** For live video streaming (`@stream-io/video-react-sdk`) and chat (`stream-chat-react`).
* **Stripe:** For payment processing (`stripe`, `@stripe/react-stripe-js`).
* **Vapi.ai:** For voice/AI assistant capabilities (`@vapi-ai/server-sdk`, `@vapi-ai/web`).
* **Resend:** For email delivery.

### Styling & UI
* **Tailwind CSS**
* **Shadcn/ui** (utilizing various Radix UI primitives)
* **Framer Motion:** For animations

### State Management & Utilities
* **Zustand:** For flexible state management
* **Zod** & **React Hook Form:** For form validation and handling
* **Lucide React** & **React Icons:** For icons

## 💻 Getting Started

### 1. Setup Environment Variables

The application requires several environment variables for its third-party integrations and database. Create a `.env` file in the root directory and populate it.

```bash
# Database (Prisma/PostgreSQL)
DATABASE_URL="postgresql://..."

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_live_..."
CLERK_SECRET_KEY="sk_live_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/home
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/callback

# Stream.io
NEXT_PUBLIC_STREAM_API_KEY="..."
STREAM_SECRET="..."

# Stripe
STRIPE_SECRET_KEY="..."
STRIPE_WEBHOOK_SECRET="..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="..."
STRIPE_CONNECT_CLIENT_ID="..."

# Vapi.ai
VAPI_SECRET_KEY="..."
NEXT_PUBLIC_VAPI_PUBLIC_KEY="..."

# Resend
RESEND_API_KEY="..."

# Application Settings
NEXT_PUBLIC_SERVER_URL="http://localhost:3000"
