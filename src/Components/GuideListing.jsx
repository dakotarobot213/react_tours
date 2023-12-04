import React from "react";
// import { useState } from "react";

const GuideListing = ({ id, name, info, image, price, removeGuide }) => {
	// const [guides, setGuides] = useState(data);
	return (
		<div className='card'>
			<div>
				<h4>
					{name} | ${price}
				</h4>
				<img
					src={image}
					alt={name.split(" ")[2]}
				/>
			</div>
			<div>
				<p>{info}</p>
				<button onClick={() => removeGuide(id)}>Not interested</button>
			</div>
		</div>
	);
};

export default GuideListing;

// id: "rec6d6T3q5EBIdCfD",
// 		name: "Best of Paris in 7 Days Tour",
// 		info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
// 		image: "https://www.course-api.com/images/tours/tour-1.jpeg",
// 		price: "1,995",
