# MovieExplorer – UI/UX Complete

MovieExplorer is a responsive React application for browsing and searching TV shows with the free TVMaze API. This version expands the original project with three additional pages and a complete UI/UX improvement pass.

## Pages

1. **Home** – Hero, primary CTA, product preview, feature overview
2. **Movies** – Live title search, browse grid, details dialog
3. **Discover** – Genre filters and rating/newest/A–Z sorting
4. **Favorites** – Persistent saved titles with local search
5. **About** – Product purpose, UX approach, data source, accessibility and privacy
6. **404** – Friendly fallback page

## UI/UX improvements

- Clear user flow and CTA hierarchy
- Consistent design system, spacing, typography and components
- Responsive mobile/tablet/desktop layouts
- Loading skeletons, error messages and empty states
- Hover, active, selected and focus-visible interaction states
- Meaningful poster alt text and keyboard-friendly controls
- Accessible movie-details dialog with Escape/backdrop/close-button support
- Reduced-motion support
- Favorites saved with browser `localStorage`

See `UI_UX_AUDIT.md` for the requirement-by-requirement audit.

## Tech Stack

- React
- JavaScript / JSX
- Vite
- Tailwind CSS
- React Router
- Lucide React
- TVMaze API

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## API

No API key is required.

- All shows: `https://api.tvmaze.com/shows`
- Search: `https://api.tvmaze.com/search/shows?q=batman`

## Deployment

The included Vercel and redirect configuration supports SPA routing. The project can also be deployed to Netlify or another static host that serves `index.html` for unknown client-side routes.
