import React from "react";
import { useState } from "react";
import Guide from "./Guide";

const GuideList = ({ data }) => {
	const [guides, setGuides] = useState(data);

	const resetGuides = () => {
		setGuides(data);
	};

	const removeGuide = (id) => {
		setGuides(guides.filter((guide) => guide["id"] !== id));
	};

	return (
		<div className='guideList'>
			{guides.map((dest) => {
				return (
					<Guide
						key={dest.id}
						{...dest}
						removeGuide={removeGuide}
					/>
				);
			})}
			<button onClick={() => resetGuides()}>Refresh</button>
		</div>
	);
};

export default GuideList;
