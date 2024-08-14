// import { useState } from 'react'
import "./App.css";
import { GrCatalog } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa";

function Product() {
  return (
    <div>
      <header>
        <nav>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqqrgebp0K3zLXkuhZJ8gbk9pNXty-YzSq0g&s"
            width="100"
            height="100"
            alt="Logo"
          />
          <ul>
            <li>
              Каталог <GrCatalog />
            </li>
            <li>
              Обране <FaRegHeart />
            </li>
          </ul>
        </nav>
      </header>
      <h1>Оренда кемперів</h1>
      <h2>Оренда кемперів для активного відпочинку по всій Україні</h2>
      <img
        src="https://www.thalattacamp.gr/uploads/2022_fotos/camping/camper_3782.jpg"
        width="1280"
        alt="tourists near the camper"
      />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Product />
    </div>
  );
}
