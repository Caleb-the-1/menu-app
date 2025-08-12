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
  { id: 2, title: 'Jollof Rice x', description: 'Smokey Jay rice', price: 1000, image: '/jollof.jpg' },
  { id: 3, title: 'Fried Rice x', description: 'Fried Rice', price: 800, image: '/friedrice.jpg' },
  { id: 4, title: 'Chairman Chow e', description: 'A combo of rice or pasta...', price: 3650, image: '/chairman.jpg' },
  { id: 5, title: 'Yam', description: 'New stuff', price: 2000, image: '/yam.jpg' },
  { id: 6, title: 'Plantain', description: 'Plantain!!', price: 400, image: '/plantain.jpg' },
];

export default function App(): JSX.Element {
  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ textAlign: 'center', fontSize: 40 }}>MENU</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
        {items.map(item => (
          <MenuItem key={item.id} title={item.title} description={item.description} price={item.price} image={item.image} />
        ))}
      </div>
    </div>
  );
}



