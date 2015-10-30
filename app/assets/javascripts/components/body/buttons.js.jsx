var Buttons = React.createClass({
	getInitialState: function(){
		return {
			currentPage: "about"
		}
	},

	receiveClick: function(button) {
		if (button==="about") {
			this.setState({
				currentPage: "about"
			})
		}
		else if (button==="blogs") {
			this.setState({
				currentPage: "blogs"
			})
		}
		else {
			this.setState({
				currentPage: "projects"
			})
		}
	},
	render: function() {
			var partial
			if (this.state.currentPage==="about"){
				partial = <AboutMeContainer />
			}
			else if (this.state.currentPage==="blogs"){
				partial = <BlogsContainer />
			}
			else {
				partial = <ProjectsContainer />
			}
	return (
			<div>
				<div id="buttons-container" className="debugger">
					<AboutMeButton receiveClick={this.receiveClick}/>
					<ProjectsButton receiveClick={this.receiveClick}/>
					<BlogButton receiveClick={this.receiveClick}/>
				</div>
				<div id="content-container">
					{partial}
				</div>
			</div>
		)
	}

})