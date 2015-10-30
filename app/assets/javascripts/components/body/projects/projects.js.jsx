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
	    	console.log(data.length)
	        this.setState({projects: data})
	    }.bind(this),
	    error: function(xhr, status, err) {
	      console.error('/projects', status, err.toString());
	      console.error(this.state.projects);
	    }.bind(this)
	  });
	},
	loadCheck:function () {
		var projects = this.state.projects
		var projectsHolder = []
		if (this.state.projects !== undefined) {
			projects.map(function(index, el) {
				var project = <Project data={projects[el]} key={projects[el].id} />
				projectsHolder.push(project)
			})
		}
		return projectsHolder
	},
	render: function() {
		var loadedProjects = this.loadCheck()
		return (
			<div>
				<br />
				{loadedProjects}
				<br />
			</div>
		)
	}
})