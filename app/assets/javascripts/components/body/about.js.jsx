var AboutMeButton = React.createClass({
	render: function() {
		return (
			<a href="#body-container" id="about-button" className="debugger" onClick={this.handleClick}>
				About
			</a>
		)
	},
	handleClick: function() {
		event.preventDefault()
		this.props.receiveClick("about")
	}
})