/** @format */

import { Component } from "react";
import './Heading.styles.css'

class Heading extends Component {
	render() {
        const {title} = this.props
		return (
			<div className="heading">
				<h1>{title}</h1>
			</div>
		);
	}
}

export default Heading;
