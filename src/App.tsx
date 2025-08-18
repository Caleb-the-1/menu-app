import React from 'react';
import MenuItem from './MenuItem.tsx';
import './App.css';

interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: string;
}

const items: Item[] = [
  { id: 1, title: 'Ekuru', description: 'kuru beans', price: 500, image: '/ekuru.jpg' },
  { id: 2, title: 'Jollof Rice x', description: 'Smokey Jay rice', price: 1000, image: '/Jellof Rice X.jpg' },
  { id: 3, title: 'Fried Rice x', description: 'Fried Rice', price: 800, image: '/fried Rice x.jpg' },
    { id: 4, title: 'jellof rice', description: 'Smoky Jellof Rice!!', price: 1000, image: '/j.rice.jpg' },
  { id: 5, title: 'Chairman Chow e', description: 'A combo of rice or pasta...', price: 3650, image: '/chairman.jpg' },
    { id: 6, title: 'chairman', description: 'chow for chairman!!', price: 2500, image: '/' },
  { id: 7, title: 'Yam', description: 'New stuff', price: 2000, image: '/yam.jpg' },
  { id: 8, title: 'Plantain', description: 'Plantain!!', price: 400, image: '/plantain.jpg' },
];

export default function App(): JSX.Element {
return (
  <div style={{ padding: 30 }}>
  <h1 style={{ textAlign: 'center', fontSize: 40, marginBottom: 20 }}>MENU</h1>
  <div className="menu-grid">
    {items.map((item) => (
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



