# DK Construction & Interior Website

A modern, responsive React website for DK Construction & Interior that showcases construction, interior design, and material services.

## Features

- Responsive layout for desktop, tablet, and mobile.
- Service-focused pages for:
  - Construction
  - Interior designing
  - Materials
- Smooth scrolling navigation and mobile-friendly menu.
- WhatsApp-enabled contact form modal.
- Friendly 404 page for unknown routes.

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS
- React Icons
- React Scroll

## Getting Started

1. Clone the repository:

   ```bash
   git clone <your-repository-url>
   cd DK_project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run development server:

   ```bash
   npm run dev
   ```

4. Build for production:

   ```bash
   npm run build
   ```

## Project Structure

```text
DK_project/
├── public/
│   ├── fonts/         # Custom fonts
│   └── images/        # Website images
├── src/
│   ├── components/    # Reusable components
│   ├── data/          # Route/page configuration
│   ├── pages/         # Page components
│   ├── App.jsx        # Main app component
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
└── package.json
```

## Environment Variables

Create a `.env` file for WhatsApp submissions:

```bash
VITE_WHATSAPP_NUMBER=919421790402
```

## Testing the Website

Run quality checks:

```bash
npm run lint
npm run build
```

Run locally and verify routes:

```bash
npm run dev
```

Then test:

- `/`
- `/construction`
- `/interior`
- `/material`
- any invalid route (e.g. `/not-found`) should show the custom 404 page.

## Recent Improvements

- Refactored service pages into a reusable `ServicePage` driven by `src/data/servicePages.js`.
- Added a catch-all 404 experience.
- Improved contact modal UX and configurability.
