import React from "react";
import "./MenuItem.css"; // 👈 styles for the cards

interface Props {
  title: string;
  description: string;
  price: number;
  image?: string;
}

export default function MenuItem({ title, description, price, image }: Props) {
  return (
    <div className="menu-item">
      {image && <img src={image} alt={title} className="menu-img" />}
      <div className="menu-info">
        <h3 className="menu-title">{title}</h3>
        <p className="menu-desc">{description}</p>
        <p className="menu-price">₦{price.toLocaleString()}</p>
      </div>
    </div>
  );
}


