import { useState } from "react";
import "./styles/css/main.css";
import TourList from "./components/TourList";
import data from "./data";

function App() {
	return <TourList data={data} />;
}

export default App;
