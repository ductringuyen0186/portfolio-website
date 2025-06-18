# Duc Nguyen - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Showcasing full-stack development projects and professional experience.

## 🚀 Live Demo

Visit the live portfolio: [https://ductringuyen0186.github.io/portfolio-website/](https://ductringuyen0186.github.io/portfolio-website/)

## ✨ Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Professional Styling**: Custom Tailwind CSS with gradient effects
- **Project Showcase**: Highlighting salon-hub-api and salon-hub-ui-v2 projects
- **Auto-Deploy**: GitHub Actions workflow for automatic deployment

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, Custom CSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/ductringuyen0186/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages:

1. Go to your repository settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on every push to the main branch

### Manual Deployment:

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── resume.pdf
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   └── UI/
│   ├── data/
│   ├── pages/
│   ├── styles/
│   └── App.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## 🎨 Customization

To customize the portfolio for your own use:

1. Update personal information in `src/data/`
2. Replace project data in `src/data/projects.ts`
3. Update social links in components
4. Replace `resume.pdf` in the `public/` folder
5. Update the base URL in `vite.config.ts`

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🌟 Featured Projects

- **Salon Hub API**: Comprehensive salon management backend
- **Salon Hub UI v2**: Modern React frontend for salon management
- **Distributed Task Queue**: High-performance backend system

## 📧 Contact

- **Email**: duc.nguyen@example.com
- **LinkedIn**: [linkedin.com/in/ductringuyen](https://linkedin.com/in/ductringuyen)
- **GitHub**: [github.com/ductringuyen0186](https://github.com/ductringuyen0186)
- **Location**: Seattle, WA

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
