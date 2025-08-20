import React, { useState, useRef } from "react";
import MenuItem from "./MenuItem.tsx";
import "./App.css";

interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: string;
  category: string;
}

const items: Item[] = [
  { id: 1, title: "Combo Meal", description: "Fried chicken with crispy fries.", price: 3500, image: "combos.jpg", category: "Combos" },
  { id: 2, title: "Jollof Rice", description: "Delicious jollof rice with chicken.", price: 2500, image: "rice.jpg", category: "Rice & Pasta" },
  { id: 3, title: "Shawarma Wrap", description: "Juicy beef shawarma wrap.", price: 2000, image: "shawarma.jpg", category: "Shawarma & Wraps" },
  { id: 4, title: "Breakfast Special", description: "Fluffy pancakes with syrup.", price: 1800, image: "breakfast.jpg", category: "Breakfast" },
  { id: 5, title: "Vegetable Soup", description: "Hot soup with assorted meat.", price: 3000, image: "soup.jpg", category: "Soup" },
  { id: 6, title: "Yam Porridge", description: "Soft yam porridge with palm oil.", price: 2200, image: "porridge.jpg", category: "Porridge" },
  { id: 7, title: "Grilled Fish", description: "Spicy grilled fish with garnish.", price: 4000, image: "protein.jpg", category: "Protein" },
  { id: 8, title: "Plantain Fries", description: "Golden fried plantain.", price: 1500, image: "sides.jpg", category: "Sides" },
  { id: 9, title: "Mango Smoothie", description: "Fresh blended mango smoothie.", price: 1200, image: "drinks.jpg", category: "Drinks" },
];


const categories = ["All", "Combos", "Rice & Pasta", "Shawarma & Wraps", "Breakfast", "Soup", "Porridge", "Protein", "Sides", "Drinks"];

export default function App(): JSX.Element {
  const [activeCategory, setActiveCategory] = useState("All");

  // Ref for scrollable categories
  const categoryRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (categoryRef.current) {
      categoryRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <div className="app-container">
      <h1 className="menu-title">Food Menu</h1>

      {/* Category filter with arrows */}
      <div className="category-bar">
        <button className="arrow" onClick={scrollLeft}>◀</button>

        <div className="category-scroll" ref={categoryRef}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`category-btn ${cat === activeCategory ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <button className="arrow" onClick={scrollRight}>▶</button>
      </div>

      {/* Grid of menu items */}
      <div className="menu-grid">
        {filteredItems.map((item) => (
          <MenuItem
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}



