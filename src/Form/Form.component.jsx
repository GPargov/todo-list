/** @format */

import "./Form.styles.css";
import { Component } from "react";

class Form extends Component {
	render() {
        const {onChange, inputText, newItem} = this.props
		return (
			<div className="form">
				<input onChange={onChange} type="text" value={inputText} />
				<button onClick={newItem}>
					<span>Add</span>
				</button>
			</div>
		);
	}
}

export default Form;
