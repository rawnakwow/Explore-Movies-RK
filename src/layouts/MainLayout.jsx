import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#07070b] text-zinc-100">
      <Navbar />
      <main className="min-h-[calc(100vh-165px)]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default MainLayout;
