import React, { Component } from 'react'


export default class NewsList extends Component {
	render() {
		const { news } = this.props
		return (
			<ul>
				{news.map(m => <li key={m.id}>{m.name}</li>)}
			</ul>
		)
	}
}