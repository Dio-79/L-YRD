import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


interface Mechanism {
  onClick: () => void;
  label: string;
  importance?: 'primary' | 'secondary';
  disabled?: boolean;
}

function Buttons({
  label,
  onClick,
  importance = 'primary',
  disabled = true,
}: Mechanism) {
  return (
    <button
      type="button"
      className={`btn btn-${importance}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

interface ProductProp {
  title: string;
  image: string;
  description: string;
}

function Product({ title, image, description }: ProductProp) {
	const navigate = useNavigate();
  return (
    <div className='product-card'>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
        <Buttons
          label="DETAILS"
          onClick={() => navigate('/products/oreo')}
          disabled={false}
        />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header>
        <div className='Menubar'>
          <button> ☰ </button>
        </div>
        <div className="Header">
          <h1>NEW LIMITED EDITION FLAVORS OUT THIS WEEKEND ! LEARN MORE</h1>
        </div>
        <div className='Logo'></div>
        <button></button>
        <nav>
          <ul className='LinkHeader'>
            <li><a href='Drink'>Drinks</a></li>
            <li><a href='Cake In A Can'>Cake In A Can</a></li>
            <li><a href='Bundle'>Bundle</a></li>
            <li><a href='event Ordering'>event Ordering</a></li>
            <li><a href='More'>More</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='body'>
          <p>ESPRESSO SHOTS & CAKE-IN-A-CAN MADE FRESH. KEPT SIMPLE.</p>
          <p className='text'>Discover a new standard of premium cakes crafted with fresh and simple ingredients. Delivered in our signature cans.</p>
          <Buttons label="EXPLORE OUR CATALOGUE" onClick={() => {}} />
        </div>
        <div>
          <p>OUR FEATURED COLLECTION</p>
          <p>VIEW ALL PRODUCTS</p>
        </div>
        <nav>
          <li></li>
          <li></li>
          <li></li>
        </nav>
      </main>
    </>
  );
}



