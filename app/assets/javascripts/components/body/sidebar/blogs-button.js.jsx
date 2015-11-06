var BlogsButton = React.createClass({
	handleClick:function() {
		event.preventDefault()
		debugger
		this.props.click("blogs")
	},
	render:function() {
		return(
			<div className="debugger sidebar-button">
				<a href="#" onClick={this.handleClick}>Blogs</a>
			</div>
		)
	}
})