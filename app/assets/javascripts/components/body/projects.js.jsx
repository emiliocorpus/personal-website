var ProjectsButton = React.createClass({
	render: function() {
		return (
			<a href="#projects" id="projects-button" className="debugger" onClick={this.handleClick}>
				Projects
			</a>
		)
	},
	handleClick: function () {
		event.preventDefault()
		this.props.receiveClick("projects")

	}
})