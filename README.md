# DK Construction & Interior Website

A modern, responsive React website for DK Construction & Interior company showcasing their construction, interior design, and material services.

## Features

- **Responsive Design**: Fully responsive layout that works across desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional interface with smooth animations and transitions
- **Multiple Services**: Dedicated sections for:
  - Construction services
  - Interior design
  - Material selection
- **Interactive Components**:
  - Image carousels with interactive navigation
  - Smooth scrolling navigation
  - Responsive image galleries
  - Mobile-friendly hamburger menu

## Tech Stack

- React 19
- Vite
- React Router Dom
- TailwindCSS
- React Icons
- React Scroll

## Getting Started

1. Clone the repository:
sh
git clone [your-repository-url]
cd DK_project

2 Install dependencies:
sh
npm install

3 Run development server:
sh
npm run dev

4 Build for production:
sh
npm run build

## Project Structure

DK_project/
├── public/
│   ├── fonts/         # Custom fonts
│   └── images/        # Website images
├── src/
│   ├── components/    # Reusable components
│   ├── pages/         # Page components
│   ├── App.jsx        # Main app component
│   ├── index.css      # Global styles
│   └── main.jsx       # Entry point
└── package.json

## Key Components

- `Navbar`: Main navigation with responsive mobile menu
- `Hero`: Landing page hero section
- `Services`: Services showcase with interactive cards
- `AboutUs`: Company information section
- `Footer`: Contact information and social links

## Customization

- Custom fonts can be added in `src/index.css`
- Color themes can be modified in `tailwind.config.js`
- Images can be replaced in the `public/images` directory

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

DK Construction & Interior
Website: [Your website URL]
Email: [Your email]
WhatsApp: [Your WhatsApp number]# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
