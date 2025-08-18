import React from 'react';
import './MenuItem.css';

interface MenuItemProps {
  title: string;
  description: string;
  price: number;
  image?: string;
}

export default function MenuItem({ title, description, price, image }: MenuItemProps) {
  return (
    <div className="menu-item">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="price">₦{price}</span>
    </div>
  );
}

