var BlogsButton = React.createClass({
	handleClick:function() {
		event.preventDefault()
		this.props.click("blogs")
	},
	render:function() {
		return(
			<div className="debugger sidebar-button">
				<a href="#" className="button-link" onClick={this.handleClick}>Blogs</a>
			</div>
		)
	}
})