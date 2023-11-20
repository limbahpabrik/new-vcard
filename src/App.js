import "./App.css";
import "./card.css";
import Header from "./SocialButtons";

function Card() {
	return (
		<>
			<div className={"card"}>
				<Top />
				<Bottom />
			</div>
		</>
	);
}

function Top() {
	return (
		<div className={"top"}>
			<Header />
			<Text />
		</div>
	);
}

function Text() {
	return (
		<div className={"text"}>
			<div className={"name-wrapper"}>
				<div className="name">
					<i>Muhammad Gibran Af Kara</i>
				</div>
			</div>
			<div className="title">Front End Website</div>
		</div>
	);
}

function Bottom() {
	return (
		<div className="bottom">
			<div className="desc">
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
					eligendi itaque, commodi repellat laudantium voluptatibus pariatur a
					illo provident autem vitae alias neque quo incidunt veniam quas dolor
					debitis dicta.
				</p>
			</div>
			<div className="buttons">
				<button>
					<i>PhD</i>
				</button>
				<button>
					<i>Mountenering</i>
				</button>
				<button>
					<i>3D Geek</i>
				</button>
			</div>
		</div>
	);
}

function App() {
	return (
		<div className="App">
			<Card />
		</div>
	);
}

export default App;
