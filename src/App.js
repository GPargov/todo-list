/** @format */

import "./App.css";
import { Component } from "react";
import Heading from "./Heading/Heading.component";
import Form from "./Form/Form.component";
import ToDoItem from "./ToDoItem/ToDoItem.component";

class App extends Component {
	constructor() {
		super();

		this.state = {
			inputText: "",
			inputItem: [],
		};
	}

	onHandleChange = (event) => {
		const { value } = event.target;
		const inputText = value;
		this.setState(() => {
			return {
				inputText,
			};
		});
	};

	deleteItem = (id) => {
		const { inputItem } = this.state;
		const newInputItem = inputItem.filter((item, index) => {
			return index !== id;
		});
		this.setState({ inputItem: newInputItem });
	};

	addItem = () => {
		this.setState({
			inputItem: [...this.state.inputItem, this.state.inputText],
		});
		this.setState({ inputText: "" });
	};

	render() {
		const { inputText, inputItem } = this.state;
		const { onHandleChange, addItem, deleteItem } = this;

		return (
			<div className="container">
				<Heading title={"To-Do List"} />
				<Form
					onChange={onHandleChange}
					inputText={inputText}
					newItem={addItem}
				/>
				<div>
					<ul>
						{inputItem.map((item, index) => {
							return (
								<ToDoItem
									key={index}
									id={index}
									item={item}
									deleteItem={deleteItem}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
