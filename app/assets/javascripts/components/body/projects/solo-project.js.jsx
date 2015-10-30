var Project = React.createClass({
	render: function() {
		return (
			<div className="single-project debugger">

				<a href={this.props.data.url}><img src="#" /></a><br />

				<u><h3>Title:</h3></u> <a href={this.props.data.url}>{this.props.data.title}</a> <br />
				<u><h3>Description:</h3></u> {this.props.data.description} <br />
				<hr />

			</div>
		)
	}
})