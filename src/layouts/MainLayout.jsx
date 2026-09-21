import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Toast from "../components/Toast";
import FavoritesProvider from "../context/FavoritesProvider";
import useFavorites from "../context/useFavorites";

const LayoutContent = () => {
  const { notice } = useFavorites();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-xl bg-white px-4 py-2 text-sm font-bold text-zinc-950 transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="min-h-[calc(100vh-160px)]" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
      <Toast notice={notice} />
      <ScrollRestoration />
    </div>
  );
};

const MainLayout = () => {
  return (
    <FavoritesProvider>
      <LayoutContent />
    </FavoritesProvider>
  );
};

export default MainLayout;
