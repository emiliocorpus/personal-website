var ProjectsButton = React.createClass({
	handleClick:function() {
		event.preventDefault()
		this.props.click("projects")
	},
	render:function() {
		return(
			<div className="debugger sidebar-button">
				<a href="#" className="button-link"  onClick={this.handleClick}>Projects</a>
			</div>
		)
	}
})