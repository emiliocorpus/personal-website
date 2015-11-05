var Sidebar = React.createClass({
	render:function() {
		return (
			<div id="sidebar-container" className="debugger">
				<div id="sidebar-pic-container">
					<img src="assets/ecorpus.png" />
				</div>
				<div className="debugger sidebar-button">
					<a href="#">About Me</a>
				</div>
				<div className="debugger sidebar-button">
					<a href="#">My Projects</a>
				</div>
				<div className="debugger sidebar-button">
					<a href="#">Blogs</a>
				</div>
			</div>
		)
	}
})