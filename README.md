# MovieExplorer

MovieExplorer is a responsive React application for browsing and searching movies/TV shows with the free TVMaze API.

## Features

- Responsive home page with navbar, hero section, CTA and footer
- Dedicated movie listing page
- Live title search using TVMaze `/search/shows?q=:query`
- Initial show listing using TVMaze `/shows`
- Reusable movie cards with poster, title, rating and release year
- Movie details modal with summary, rating, date, genres, runtime, status, language and network
- Modal closes by close button, backdrop click, or Escape key
- Loading skeletons, empty states, API error handling, and 404 page
- Mobile, tablet and desktop responsive layouts

## Tech Stack

- React
- JavaScript
- Vite
- Tailwind CSS
- React Router
- Lucide React
- TVMaze API

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production Build

```bash
npm run build
npm run preview
```

## API

This project uses the free TVMaze API and does not require an API key.

- All shows: `https://api.tvmaze.com/shows`
- Search: `https://api.tvmaze.com/search/shows?q=batman`

## Deployment

You can deploy the project on Vercel or Netlify. For SPA routing, configure your host to serve `index.html` for unknown routes when required.
