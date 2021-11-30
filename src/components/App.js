import React from "react";
import Nav from "./Nav";
import SortFilter from "./SortFilter";
import HogTiles from "./HogTiles";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<SortFilter />
			<HogTiles hogs={hogs}/>
		</div>
	);
}

export default App;
