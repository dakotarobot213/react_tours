import React from "react";
import { useState } from "react";
import GuideListing from "./GuideListing";

const GuideList = ({ data }) => {
	const [guides, setGuides] = useState(data);

	const resetGuides = () => {
		setGuides(data);
	};

	const removeGuide = (id) => {
		setGuides(guides.filter((guide) => guide["id"] !== id));
	};

	return (
		<div>
			{guides.map((dest) => {
				return (
					<GuideListing
						key={dest.id}
						{...dest}
						removeGuide={removeGuide}
					/>
				);
			})}
			<button>Refresh</button>
		</div>
	);
};

export default GuideList;
