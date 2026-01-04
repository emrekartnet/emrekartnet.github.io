# 🚀 Emre Kart - Portfolio Website

Modern, bilingual portfolio website built with Angular 18 and optimized for SEO and social media sharing.

🌐 **Live Site:** [emrekart.me](https://emrekart.me)

## ✨ Features

- 🌍 **Bilingual Support** - Turkish/English instant switching
- 🎨 **Modern Design** - Responsive, dark/light themes
- 🔍 **SEO Optimized** - Meta tags, schema.org, robots.txt, sitemap.xml
- 📱 **Social Media Ready** - Open Graph, Twitter Cards with custom preview image
- ⚡ **Performance** - 123 KB compressed, optimized bundle
- 🎯 **Focused Skills** - 18 curated technologies (Backend, Frontend, DevOps, Databases, Architecture)

## 🛠️ Tech Stack

- **Framework:** Angular 18 (Standalone Components)
- **Styling:** Tailwind CSS
- **Icons:** Font Awesome
- **i18n:** @ngx-translate/core
- **Routing:** Hash Location Strategy (GitHub Pages compatible)
- **Deployment:** GitHub Pages

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/emrekartnet/emrekartnet.github.io.git
cd emrekartnet.github.io

# Install dependencies
npm install

# Start development server
npm start
```

Development server runs at `http://localhost:4200/`

## 🏗️ Build & Deploy

### Development Build
```bash
npm run build
```

### Production Build + Deploy
```bash
# Automated build and file relocation for GitHub Pages
npm run build:deploy

# Commit and push
git add .
git commit -m "Update portfolio"
git push origin main
```

**Note:** `build:deploy` script automatically:
1. Builds production bundle
2. Moves files from `docs/browser/` to `docs/`
3. Removes browser folder

Site goes live at `https://emrekart.me` within 2-3 minutes.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── components/      # UI components
│   │   ├── directives/      # Custom directives
│   │   ├── models/          # TypeScript interfaces
│   │   ├── services/        # Business logic
│   │   └── shared/          # Data layer (data.ts)
│   ├── assets/
│   │   ├── i18n/           # Translation files (tr.json, en.json)
│   │   ├── images/         # OG social preview image
│   │   └── cv/             # Resume PDF
│   ├── index.html          # SEO meta tags
│   ├── robots.txt          # Search engine directives
│   └── sitemap.xml         # Search engine sitemap
├── docs/                   # GitHub Pages deployment folder
└── CNAME                   # Custom domain configuration
```

## 🎨 Customization

### Update Content
All portfolio data is centralized in `src/app/shared/data.ts`:
- Profile information
- Skills & technologies
- Work experience
- Education
- Projects

### Translation
Edit translation files:
- `src/assets/i18n/tr.json` - Turkish
- `src/assets/i18n/en.json` - English

### SEO & Meta Tags
Update in `src/index.html`:
- Page title
- Meta description
- Open Graph tags
- Schema.org structured data

## 🔍 SEO Features

- ✅ Comprehensive meta tags
- ✅ Open Graph for Facebook/LinkedIn
- ✅ Twitter Cards
- ✅ Schema.org Person structured data
- ✅ Google Search Console verification
- ✅ robots.txt & sitemap.xml
- ✅ Custom social preview image (1200x630px)

## 📊 Performance

- **Bundle Size:** 501 KB (raw) / 123 KB (compressed)
- **Initial Load:** Fast (~2s on 3G)
- **Lighthouse Scores:** Performance 90+, SEO 100

## 🚀 Deployment

Site is automatically deployed to GitHub Pages on every push to `main` branch.

**Custom Domain Setup:**
1. Update `CNAME` file with your domain
2. Configure DNS A records to GitHub Pages IPs
3. Enable HTTPS in GitHub Settings → Pages

## � License

MIT License - Feel free to use this template for your own portfolio!

## 👨‍💻 Author

**Emre Kart**  
Software Engineer | Full-Stack Developer | SaaS Architect

- Website: [emrekart.me](https://emrekart.me)
- LinkedIn: [linkedin.com/in/emre-kart](https://www.linkedin.com/in/emre-kart)
- GitHub: [github.com/kartemre](https://github.com/kartemre)

---

Built with ♥ using Angular
