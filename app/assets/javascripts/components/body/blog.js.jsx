var BlogButton = React.createClass({
	render: function () {
		return (
			<a href="#blogs" id="blog-button" className="debugger" onClick={this.handleClick}>
				Blogs
			</a>
		)
	},
	handleClick: function() {
		event.preventDefault()
	}

})