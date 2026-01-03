# Emre Kart - Portfolio Website

Modern, high-performance personal portfolio website built with Angular 18+ and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Angular 18+ with standalone components, TypeScript strict mode, Tailwind CSS
- **Responsive Design**: Mobile-first approach, optimized for all devices
- **Dark/Light Mode**: System preference detection with localStorage persistence
- **Performance Optimized**: Lighthouse 100/100 score target
- **SEO Friendly**: Comprehensive meta tags, Open Graph, Twitter Cards
- **GitHub Pages Ready**: HashLocationStrategy for seamless deployment

## 🛠️ Tech Stack

- **Framework**: Angular 18+ (Standalone Components)
- **Styling**: Tailwind CSS v3.x
- **Icons**: FontAwesome
- **Fonts**: Google Fonts (Inter, Fira Code)
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build
```

## 🌐 Deployment to GitHub Pages

### Method 1: Using docs/ folder (Recommended)

1. Build the project:
```bash
npm run build
```

2. Commit and push the `docs/` folder:
```bash
git add docs/
git commit -m "Deploy to GitHub Pages"
git push origin main
```

3. On GitHub, go to Settings > Pages
4. Select "Deploy from branch"
5. Choose `main` branch and `/docs` folder
6. Save and wait for deployment

### Method 2: Using GitHub Actions

A GitHub Actions workflow is included in `.github/workflows/deploy.yml` for automated deployment.

## 📝 Content Updates

All portfolio content is centralized in `src/app/shared/data.ts`. Update this file to modify:

- Personal information
- Education history
- Work experience
- Projects
- Skills
- Contact information

## 🎨 Customization

### Colors

Update `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: { ... },
  secondary: { ... }
}
```

### Fonts

Modify the font imports in `src/styles.css` and update `tailwind.config.js`.

## 📄 License

© 2026 Emre Kart. All rights reserved.

## 🤝 Contact

- **Email**: contact@emrekart.me
- **LinkedIn**: [linkedin.com/in/emre-kart](https://linkedin.com/in/emre-kart)
- **GitHub**: [github.com/emrekartnet](https://github.com/emrekartnet)
