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
				<div className="debugger sidebar-button">
					<a href="https://www.linkedin.com/in/emiliocorpus" target="_blank"><img src="assets/linkedin-icon.png" /></a>
					<a href="https://github.com/emiliocorpus" target="_blank"><img src="assets/github-icon.png" /></a>
					<a href="https://twitter.com/uh_mili_oh" target="_blank"><img src="assets/twitter-icon.png" /></a>
				</div>
				<AboutButton click={this.handleClicked}/>
				<ProjectsButton click={this.handleClicked}/>
				<BlogsButton click={this.handleClicked} />
			</div>
		)
	}
})