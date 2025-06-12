// src/layouts/MainLayout.tsx
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Layout.css";

export default function MainLayout() {
    return (
      <div className="layout-container animated-bg">
        <main className="layout-main">
          <Outlet />
        </main>
        <Footer />
      </div>
    );
  }