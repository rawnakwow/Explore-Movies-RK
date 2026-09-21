import { useEffect, useState } from "react";
import FavoritesContext from "./favorites-context";

const STORAGE_KEY = "movie-explorer-favorites";

const readSavedFavorites = () => {
  if (typeof window === "undefined") return [];

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(readSavedFavorites);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    if (!notice) return undefined;

    const timer = window.setTimeout(() => setNotice(null), 2400);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const isFavorite = (movieId) =>
    favorites.some((movie) => movie.id === movieId);

  const toggleFavorite = (movie) => {
    const alreadySaved = isFavorite(movie.id);

    setFavorites((current) =>
      alreadySaved
        ? current.filter((item) => item.id !== movie.id)
        : [movie, ...current],
    );

    setNotice({
      tone: alreadySaved ? "neutral" : "success",
      message: alreadySaved
        ? `${movie.name} removed from favorites.`
        : `${movie.name} saved to favorites.`,
    });
  };

  const value = { favorites, isFavorite, toggleFavorite, notice };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
