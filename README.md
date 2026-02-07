# Inkflow Creative - Professional Printing Solutions

A modern, responsive website for Inkflow Creative, a professional printing and queue management solutions company.

## 🚀 Features

- **Hero Section** with overlapping stats card
- **Solutions Portfolio** with cinematic grid layout
- **Industries We Serve** with 6 industry cards
- **Manufacturing Showcase** - "The Forge of Precision"
- **Why Choose Inkflow** carousel with pagination
- **Professional Navigation** with fixed navbar
- **Fully Responsive Design** - Mobile, Tablet, Desktop
- **Modern UI Components** using Lucide React icons
- **Smooth Animations** and hover effects

## 📋 Tech Stack

- **React 19** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling (with custom CSS)
- **Lucide React** - Icon library
- **React Router DOM** - Routing

## 🛠️ Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/inkflow-creative.git
cd inkflow-creative
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.example .env.local
```

4. Start development server
```bash
npm run dev
```

5. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── SolutionsPortfolio.jsx
│   ├── WhyChooseInkflow.jsx
│   └── ...
├── pages/
│   ├── Home.jsx
│   └── ...
├── App.jsx
├── App.css
└── main.jsx
public/
├── Hero-section.png
├── queue-belt.png
├── printer.png
├── facility.jpg
└── ...
```

## 🎨 Design System

### Colors
- Primary Blue: `#0066cc`
- Dark Text: `#1a1a1a`
- Light Grey: `#f5f5f5`
- Border Grey: `#e0e0e0`

### Typography
- Font Family: Plus Jakarta Sans, SF Pro Display
- Heading Sizes: 56px, 48px, 36px, 28px
- Body Text: 14px, 16px, 18px

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 480px - 768px
- Desktop: 768px - 1024px
- Large Desktop: > 1024px

## 🔐 Environment Variables

See `.env.example` for all available environment variables. Never commit `.env.local` to version control.

## 📦 Dependencies

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^6.x.x",
  "lucide-react": "^latest"
}
```

## 🚀 Deployment

### Build
```bash
npm run build
```

### Preview
```bash
npm run preview
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📝 Git Workflow

1. Create a feature branch
```bash
git checkout -b feature/your-feature-name
```

2. Make changes and commit
```bash
git add .
git commit -m "feat: add your feature description"
```

3. Push to remote
```bash
git push origin feature/your-feature-name
```

4. Create a Pull Request

## 🔒 Security

- Never commit `.env.local` files
- Use `.env.example` for reference
- Keep dependencies updated: `npm audit`
- Review `.gitignore` before pushing

## 📄 License

This project is proprietary to Inkflow Creative.

## 👥 Contributors

- Development Team

## 📞 Support

For issues or questions, please contact the development team.

---

**Last Updated:** February 2026
