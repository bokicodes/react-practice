import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	const style = {};

	return (
		<header className="header">
			<h1 style={style}>Fast React Pizza Co.</h1>;
		</header>
	);
}

function Menu() {
	return (
		<main className="menu">
			<h2>Our menu</h2>

			{pizzaData.length > 0 ? (
				<>
					<p>Small app where we show a bunch of pizzas</p>
					<ul className="pizzas">
						{pizzaData.map((pizza) => (
							<Pizza pizzaObj={pizza} key={pizza.name} />
						))}
					</ul>
				</>
			) : (
				<p>No pizzas</p>
			)}
		</main>
	);
}

function Pizza({ pizzaObj }) {
	//console.log(props); //objekat sa parametrima, key value pairs gde je key naziv parametra a value vrednost
	console.log(pizzaObj);

	return (
		<li className={`pizza ${pizzaObj.soldOut ? "sold-out" : undefined}`}>
			<img src={pizzaObj.photoName} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
			</div>
		</li>
	);
}

function Footer() {
	// kada ne bi imali jsx morali bi js:
	// return React.createElement("footer", null, "We're currently open1");

	// kao i svaka funkcija moze da ima pre returna sta god
	const hour = new Date().getHours();
	const openHour = 8;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);

	// if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
	// else alert("Sorry, we're closed");

	return (
		<footer className="footer">
			{isOpen && <p>We're open until {closeHour}</p>}
			{!isOpen && <p>We are opening at {openHour}</p>}
		</footer>
	);
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// React before 18
//React.render(<App />, document.getElemenyById("root"));
