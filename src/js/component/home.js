import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [value, setValue] = useState();
	const [toDo, setToDo] = useState([]);

	function addToDO(e) {
		if (value === "") return;
		setToDo([...toDo, { text: value }]);
		setValue("");
	}

	return (
		<>
			<div className="text-center mt-5">
				<h1>To Do List</h1>
				<input
					id="input"
					type="text"
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<button onClick={addToDO}>Add</button>
				<ul>
					{toDo.map(todo => (
						<li id="list" key={todo.index}>
							{todo.text}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}
