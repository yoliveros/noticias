import React, { Component } from 'react'


export default class CategoryList extends Component {

	handleClick = id => () => {
		const { selectCategory } = this.props
		selectCategory(id)
	}

	render() {
		const { categories } = this.props
		return (
			<ul>
				{categories.map(m => <li onClick={this.handleClick(m.id)} key={m.id}>{m.name}</li>)}
			</ul>
		)
	}
}