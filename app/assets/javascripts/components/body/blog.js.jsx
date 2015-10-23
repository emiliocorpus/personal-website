var BlogButton = React.createClass({
	render: function () {
		return (
			<a href="#body-container" id="blog-button" className="debugger" onClick={this.handleClick}>
				Blogs
			</a>
		)
	},
	handleClick: function() {
		event.preventDefault()
		this.props.receiveClick("blogs")

	}

})