var Sidebar = React.createClass({
	handleClicked:function(url){
		this.props.handleClick(url)
	},
	render:function() {
		return (
			<div id="sidebar-container" className="debugger">
				<div id="sidebar-pic-container">
					<img src="assets/ecorpus.png" />
				</div>
				<AboutButton click={this.handleClicked}/>
				<ProjectsButton click={this.handleClicked}/>
				<BlogsButton click={this.handleClicked} />
			</div>
		)
	}
})