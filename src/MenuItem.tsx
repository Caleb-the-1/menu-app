import React from 'react';
import './MenuItem.css';

interface MenuItemProps {
  title: string;
  description: string;
  price: number;
  image?: string; // optional
}

export default function MenuItem({ title, description, price, image }: MenuItemProps) {
  return (
    <div className="menu-item">
      <h2>{title}</h2>
      <p>{description}</p>
      {image && <img src={image} alt={title} />}
      <h3>₦{price}</h3>
    </div>
  );
}

