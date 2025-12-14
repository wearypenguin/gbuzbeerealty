# G. Buzbee Realty Website

A professional, accessible real estate website for G. Buzbee Realty based in High Springs, FL.

## Overview

This website follows GatorWebsites standards and features:
- **Accessible design** following WCAG guidelines
- **Responsive layout** works on all devices
- **Clean, professional styling** with brand colors (dark orange #b74e28 and white)
- **Fast performance** with minimal JavaScript and optimized CSS

## Site Structure

### Main Pages
- **index.html** - Home page with hero section and property search options
- **about.html** - About G. Buzbee Incorporated and Garrett Buzbee
- **gallery.html** - Featured property listings grid
- **blueprints.html** - Construction blueprints and plans
- **contact.html** - Contact form and business information

### Supporting Pages
- **properties/** - Individual property detail pages (template provided)

## Branding

### Colors
- Primary Brand: `#b74e28` (Dark Orange)
- Background: `#ffffff` (White)
- Text: `#1a1a1a` (Near Black)

### Contact Information
- **Phone:** 386-454-2555
- **Email:** info@gbuzbee.com
- **Address:** P.O. Box 574, High Springs, FL 32655

## Technical Details

### CSS Architecture
- `css/core.css` - Base styles and layout system (from GatorWebsites)
- `css/themes/buzbee.css` - Custom theme with brand colors

### JavaScript
- `js/nav.js` - Responsive navigation with hamburger menu
- `js/theme-toggle.js` - Dark/light mode toggle
- `js/back-to-top.js` - Scroll-to-top button
- `js/contact-form.js` - Contact form AJAX submission

### Accessibility Features
- Skip to main content link
- Proper heading hierarchy
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Color contrast compliance
- Semantic HTML

## Next Steps

### Before Launch
1. **Replace placeholder content** with actual property data
2. **Add real images** to replace photo placeholders
3. **Set up Formspree** - Update form action URL in contact.html
4. **Add favicon** - Create and link site icon
5. **Test all links** and navigation
6. **Run accessibility audit** with tools like WAVE or axe DevTools
7. **Optimize images** before uploading

### Content to Add
- Property photos and details
- Blueprint/construction plan documents
- Additional property listings
- MLS Search integration (if applicable)
- Laurel Pointe community information
- Optional: Google Analytics tracking code

## Deployment

The site is ready for GitHub Pages or any static hosting service. All paths are relative and will work when deployed.

### GitHub Pages Setup
1. Push to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select the main branch as source
4. Site will be available at `username.github.io/repository-name`

## Maintenance

- Update property listings in `gallery.html`
- Add new properties by copying `properties/sample-property.html` template
- Update contact information in all pages if it changes
- Keep JavaScript and CSS files in sync with GatorWebsites core updates

## Support

Built following GatorWebsites standards. For questions or updates, refer to the GatorWebsites system documentation.

---

**Version:** 1.0  
**Last Updated:** December 2025  
**Built By:** GatorWebsites
