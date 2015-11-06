var AboutButton = React.createClass({
	handleClick:function() {
		event.preventDefault()
		this.props.click("about")
	},
	render:function() {
		return(
			<div className="debugger sidebar-button">
				<a href="#" className="button-link" onClick={this.handleClick}>About Me</a>
			</div>
		)
	}
})