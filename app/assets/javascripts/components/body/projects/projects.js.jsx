var Projects = React.createClass({
	getInitialState: function() {	
		return {
			projects: this.handleLoad()
		}
	},
	handleLoad: function() {
	  $.ajax({
	    url: '/projects',
	    dataType: 'json',
	    cache: false,
	    success: function(data) {
	        this.setState({projects: data})
	    }.bind(this),
	    error: function(xhr, status, err) {
	      console.error('/projects', status, err.toString());
	      console.error(this.state.projects);
	    }.bind(this)
	  });
	},
	render: function() {
		return (
			<div>
				{this.state.projects}
			</div>
		)
	}
})