import React from "react";
import { useState } from "react";

const TourList = (data) => {
	let [locations, setLocations] = useState(data);
	const removeLocation = (id) => {
		setLocations(locations.filter((dest) => dest.id !== id));
	};
	console.log(typeof data);
	return (
		<article>
			{data.map((location) => {
				return (
					<>
						<h3>{location.id}</h3>
					</>
				);
			})}
			<p>Come back for more Tours!</p>
			<button>Refresh Tour List</button>
		</article>
	);
};

export default TourList;
