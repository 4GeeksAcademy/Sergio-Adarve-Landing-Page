import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const cards = [
	{
		image: "https://picsum.photos/id/4/200/300",
		title: "Card title",
		description: "Quisque iaculis tincidunt nisl in hendrerit. Proin commodo a tellus ut lacinia.",
	},
	{
		image: "https://picsum.photos/id/3/200/300",
		title: "Card title",
		description: "Quisque iaculis tincidunt nisl in hendrerit. Proin commodo a tellus ut lacinia.",
	},
	{
		image: "https://picsum.photos/id/1/200/300",
		title: "Card title",
		description: "Quisque iaculis tincidunt nisl in hendrerit. Proin commodo a tellus ut lacinia.",
	},
	{
		image: "https://picsum.photos/id/2/200/300",
		title: "Card title",
		description: "Quisque iaculis tincidunt nisl in hendrerit. Proin commodo a tellus ut lacinia.",
	}
];

const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;