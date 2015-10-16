var AboutMeButton = React.createClass({
	render: function() {
		return (
			<a href="#about" id="about-button" className="debugger" onClick={this.handleClick}>
				About
			</a>
		)
	},
	handleClick: function() {
		event.preventDefault()
	}
})