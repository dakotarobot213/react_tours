import React from "react";
import { useState } from "react";
import GuideListing from "./guideListing";

const GuideList = (data) => {
	const [guides, setGuides] = useState(data);
	return (
		<div>
			{guides.map((dest) => {
				<GuideListing
					key={dest.id}
					{...dest}
				/>;
			})}
		</div>
	);
};

export default GuideList;
