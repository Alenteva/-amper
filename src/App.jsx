// import { useState } from 'react'
import css from "./App.module.css";
import { GrCatalog } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";

import { Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("./Pages/HomePage"));
const FavoritesList = lazy(() => import("./Pages/FavoritesList"));
const Catalog = lazy(() => import("./Pages/Сatalog"));

export default function App() {
  return (
    <div className={css["AppBox"]}>
      <header className={css["Header"]}>
        <nav className={css["Nav"]}>
          <NavLink className={css["Logo"]} to="/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqrgebp0K3zLXkuhZJ8gbk9pNXty-YzSq0g&s"
              width="100"
              height="90"
              alt="Logo"
            />
          </NavLink>
          <NavLink className={css["NavItem"]} to="/catalog">
            Каталог <GrCatalog />
          </NavLink>
          <NavLink className={css["NavItem"]} to="/favorites">
            Обране <FaRegHeart />
          </NavLink>
        </nav>
      </header>

      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
