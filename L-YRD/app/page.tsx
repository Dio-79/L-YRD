import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
	
interface mechanism {
  OnClick: ()=> void,
  label: string,
  importance?:    'primary' | 'secondary';
  disabled?:      boolean;

}
function Buttons({
label,
OnClick,
importance = 'primary',
disabled = true,
}: mechanism) {
	return (
		<>
		<header>
	<div className='Menubar'>
		<button>
			 ☰  
		</button>
	</div>
	    <div className="Header">
		<h1 >NEW LIMITED EDITION FLAVORS OUT THIS WEEKEND ! LEARN MORE</h1>
    </div>
	<div className='Logo'>
		
	</div>
	<button></button>

	<nav>
		<ul className='LinkHeader'>
		<li><a href='Drink'>Drinks</a></li>
	    <li> <a href='Cake In A Can'>Cake In A Can</a></li>
        <li> <a href='Bundle'>Bundle</a></li>
	    <li><a href='event Ordering'>event Ordering</a></li>
        <li><a href='More'>More</a></li>
</ul>

	</nav>
	</header>
<body>
	<div className='body'>
    <p>ESPRESSO SHOTS & CAKE-IN-A-CAN MADE FRESH. KEPT SIMPLE.</p>
	<p className='text'>Discover a new standard of premium cakes crafted with fresh and simple ingredients. Delivered in our signature cans.</p>
    
	</div>
</body>
		</>

	);
}

}

