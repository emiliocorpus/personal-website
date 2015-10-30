var Project = React.createClass({
	render: function() {
		return (
			<div className="single-project debugger">
				Title: {this.props.data.title} <br />
				Description: {this.props.data.description} <br />
				Link: {this.props.data.url} <br />
			</div>
		)
	}
})