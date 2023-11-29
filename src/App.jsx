import "./App.css";
import GuideList from "./Components/GuideList";
import data from "./data";

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>
					Edit <code>src/App.jsx</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
			</header>
			<GuideList data={data} />
			{/* <div>
				{data.map((element) => {
					return (
						<div key={element.id}>
							<h4>{element.name}</h4>
							<p>{element.info}</p>
						</div>
					);
				})}
			</div> */}
		</div>
	);
}

export default App;
