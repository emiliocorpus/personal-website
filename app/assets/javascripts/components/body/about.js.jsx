var AboutMeButton = React.createClass({
	render: function() {
		return (
			<a href="#about-me-container" id="about-button" className="debugger" onClick={this.handleClick}>
				About
			</a>
		)
	},
	handleClick: function() {
		event.preventDefault()
		this.props.receiveClick("about")
	}
})