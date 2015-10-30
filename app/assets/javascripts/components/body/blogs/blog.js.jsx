var Blog = React.createClass({
	render: function() {
		return (
			<div className="single-blog debugger">
				<u><h3>Title:</h3></u> {this.props.data.title}<br />
				<h2>{this.props.data.date}</h2><br />
				<u><h3>Content:</h3></u> {this.props.data.content} <br />
				<hr />
			</div>
		)
	}
})