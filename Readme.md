# Anaesh K N - Professional Portfolio

This is the personal portfolio website for Anaesh K N, a Software Engineer specializing in .NET technologies.

## 🚀 Project Structure

Inside of this Astro project, you'll see the following folders and files:

```text
/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── CNAME
│   └── images/
│       ├── namebg.svg
│       ├── profile.jpg
│       └── profile.png
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Education.astro
│   │   ├── Experience.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Home.astro
│   │   ├── NavbarIcon.astro
│   │   └── Skills.astro
│   ├── content/
│   │   ├── experience/
│   │   │   ├── 1_Logitech.md
│   │   │   ├── 2_Disprz.md
│   │   │   ├── 3_BMeS.md
│   │   │   └── 4_Solid.md
│   │   ├── education/
│   │   │   ├── college.md
│   │   │   └── school.md
│   │   ├── skills/
│   │   │   └── technical.md
│   │   └── config.ts
│   ├── data/
│   │   └── site.json
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── 404.astro
│   │   └── index.astro
│   └── env.d.ts
├── styles/
│   └── global.css
├── scripts/
│   └── main.js
├── astro.config.mjs
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📁 Content Management

This site uses Astro's content collections feature for managing dynamic content:

- **Experience**: Work experience entries in `src/content/experience/`
- **Education**: Education history in `src/content/education/`
- **Skills**: Technical skills in `src/content/skills/`
- **Site Data**: Static site metadata in `src/data/site.json`

To add new content, simply create a new markdown file in the appropriate content collection directory with the proper frontmatter.

## 🎨 Features

### Theme Toggle
The site includes a light/dark mode toggle feature:
- **Desktop**: Theme toggle button appears next to the mobile menu icon in the navbar
- **Mobile**: Theme toggle appears as a menu item in the collapsed mobile menu
- Theme preference is saved in localStorage and respects OS-level dark mode preference

### Skills Icons
The skills section uses [Devicon](https://devicon.dev/) for technology icons. The mapping between skills and icons is defined in the Skills component.

### Name Background
The name "Anaesh K N" has a custom SVG background (`namebg.svg`) that creates an oval-shaped decorative element behind the text. This is implemented through CSS in the global stylesheet.

### Responsive Design
The site is fully responsive and works on all device sizes:
- Desktop: Full-width layout with alternating timeline items
- Tablet: Adjusted spacing and sizing
- Mobile: Single-column layout with proper touch targets

### Content Collections
Astro's content collections are used for structured content management:
- Experience entries with detailed project information
- Education history
- Technical skills organized by category
- All content is type-safe with defined schemas

### Animations
The site includes subtle animations for enhanced user experience:
- Fade-in effects as elements scroll into view
- Smooth hover transitions on interactive elements
- Smooth scrolling navigation

## 🔍 SEO Features

### Meta Tags
- Comprehensive meta tags for description, keywords, and author
- Open Graph tags for social media sharing
- Twitter Card tags for Twitter sharing
- Canonical URLs to prevent duplicate content issues

### Structured Data
- JSON-LD structured data for Person schema
- Semantic HTML with itemprop attributes
- Proper use of schema.org vocabularies

### Sitemap Generation
- Automatic sitemap generation with @astrojs/sitemap
- robots.txt file for search engine crawlers

### Performance Optimizations
- Image optimization with proper alt tags and dimensions
- Lazy loading for images where appropriate
- Minified CSS and JavaScript

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- ARIA attributes where needed
- Color contrast compliant with WCAG standards

## 📝 Content Structure

### Experience
Work experience is organized with numbered files for proper chronological ordering:
- `1_Logitech.md` - Current position at Logitech
- `2_Disprz.md` - Detailed experience at Disprz with project information
- `3_BMeS.md` - Experience at BM e-Solutions
- `4_Solid.md` - Early career at Solid Solutions International

Each experience entry includes:
- Company and role information
- Date ranges
- Detailed descriptions
- Technology stacks (where applicable)
- Project details (for complex roles like Disprz)

### Education
Education history includes:
- Institution names
- Degree information
- Date ranges
- Academic achievements

### Skills
Technical skills are organized by category:
- Programming Languages
- Technologies & Frameworks
- Each skill has an associated Devicon

## 🛠️ Development

### Adding New Experience
1. Create a new markdown file in `src/content/experience/` with numbered prefix for ordering
2. Add frontmatter with required fields (date, role, company, description)
3. Optionally add techStack array
4. Add body content for detailed project information using HTML structure

### Adding New Education
1. Create a new markdown file in `src/content/education/`
2. Add frontmatter with required fields (date, degree, institution, score)

### Adding New Skills
1. Modify `src/content/skills/technical.md`
2. Add new categories or skills to existing categories
3. Update icon mapping in `src/components/Skills.astro` if needed

### Customizing Site Data
Static site metadata can be modified in `src/data/site.json`:
- Home section content
- About section content
- Contact information

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3b82f6)
- **Accent**: Magenta (#ec4899)
- **Dark Background**: Very dark (#020617)
- **Card Background**: Slate (#1e293b)
- **Text**: Light slate colors for readability

### Typography
- **Font**: Inter with system font fallbacks
- **Headings**: Bold and prominent
- **Body**: Comfortable line height for readability

### Spacing
- Consistent 8px grid system
- Appropriate whitespace for visual hierarchy
- Responsive padding and margins

## 🚀 Deployment

This site is configured for automatic deployment to GitHub Pages using GitHub Actions:

### GitHub Actions Workflow
The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:
- Automatically builds and deploys the site on every push to the `main` branch
- Can be triggered manually from the Actions tab
- Builds the site using Node.js 20
- Deploys to GitHub Pages

### Setup Instructions
1. Go to your repository Settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "GitHub Actions"
4. The site will automatically deploy on the next push to main

### SEO Configuration
The site includes comprehensive SEO features:
- Automatic sitemap generation
- robots.txt for crawler management
- Structured data (JSON-LD) for rich snippets
- Semantic HTML with proper heading hierarchy
- Meta tags for social media sharing

### Custom Domain (Optional)
To use a custom domain:
1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure your domain's DNS settings to point to GitHub Pages

### Manual Deployment
If you prefer to deploy manually:
```bash
npm run build
# Then push the contents of the dist/ folder to your gh-pages branch
```
