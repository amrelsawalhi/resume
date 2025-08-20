# 🚀 Amr El Sawalhi - Portfolio Website

A modern, responsive portfolio website showcasing the career transition from healthcare sales to data engineering. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 📋 About

This portfolio website presents Amr El Sawalhi's unique journey from 8+ years in pharmaceutical sales to data engineering. It highlights the combination of business acumen and technical skills that make this career transition a strength rather than a weakness.

## 🎯 Key Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive**: Smooth scroll navigation and hover effects
- **Performance**: Fast loading with optimized images and code
- **SEO Optimized**: Proper meta tags and structured content
- **Accessible**: WCAG compliant design patterns

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📱 Sections

1. **Hero Section**: Career transition headline with call-to-action
2. **About**: Career story and timeline with key strengths
3. **Projects**: Featured projects with interactive cards
4. **Skills**: Technical and business skills with animated progress bars
5. **Experience**: Professional background and career transition
6. **Contact**: Contact form and information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/amrelsawalhi/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🖼️ Adding Project Screenshots

1. Place your project screenshots in the `public/screenshots/` directory
2. Use the following naming convention:
   - `dipsignal.jpg` - DipSignal project
   - `lol-analytics.jpg` - LoL Analytics project
   - `dijamour.jpg` - Dijamour project
   - `feelytext.jpg` - FeelyText project
   - `jumia-tracker.jpg` - Jumia Price Tracker project

3. Recommended image specifications:
   - Format: JPG or PNG
   - Size: 800x600px or similar aspect ratio
   - File size: Under 500KB for optimal loading

## 🌐 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Set source to "GitHub Actions"
4. The site will be deployed automatically on push to main branch

### Custom Domain (Optional)

1. Add your custom domain in repository Settings > Pages
2. Update the domain in `next.config.ts` if needed

## 📊 SEO & Performance

- **Meta Tags**: Optimized for search engines
- **Open Graph**: Social media sharing optimization
- **Performance**: Lighthouse score optimized
- **Accessibility**: WCAG 2.1 AA compliant
- **Mobile**: Mobile-first responsive design

## 🎨 Customization

### Colors
The website uses a professional blue-purple gradient theme. To customize:

1. Update colors in `tailwind.config.js`
2. Modify gradient classes in components
3. Update CSS custom properties in `globals.css`

### Content
- Update personal information in component files
- Modify project details in `Projects.tsx`
- Adjust skills and experience in respective components
- Update contact information in `Contact.tsx`

### Animations
- Modify animation parameters in Framer Motion components
- Adjust timing and easing functions
- Customize scroll-triggered animations

## 📝 Content Structure

### Projects
Each project includes:
- Name and description
- Technologies used
- GitHub repository link
- Demo link (if available)
- Rating and category
- Screenshot placeholder

### Skills
- Technical skills with proficiency levels
- Business skills highlighting experience
- Certifications and achievements
- Visual progress indicators

### Experience
- Professional background
- Career transition story
- Target roles and goals
- Key achievements and skills

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### Build Configuration
The website is configured for static export and GitHub Pages deployment. See `next.config.ts` for details.

## 📈 Analytics (Optional)

To add Google Analytics:

1. Add your GA tracking ID to environment variables
2. Implement tracking in `_app.tsx` or `layout.tsx`
3. Add privacy policy and cookie consent if needed

## 🤝 Contributing

This is a personal portfolio website, but suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- **Email**: amr.elsawalhi.business@gmail.com
- **LinkedIn**: [amrelsawalhi](https://www.linkedin.com/in/amrelsawalhi/)
- **GitHub**: [amrelsawalhi](https://github.com/amrelsawalhi)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
