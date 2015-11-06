var Content = React.createClass({
	render:function() {
		var display;
		if (this.props.displayedContent === "about") {
			display = <About />
		}
		else if (this.props.displayedContent === "projects") {
			display = <Projects />
		}
		else if (this.props.displayedContent === "blogs") {
			display = <Blogs />
		}
		return (
			<div id="content-container" className="debugger">
				{display}
			</div>
		)
	}
})