var Page = React.createClass({
	getInitialState:function() {
		return {
			currentContent: "about"
		}
	},
	receiveClick: function(clicked) {
		this.setState({
			currentContent: clicked
		})
	},
	render: function() {
		return (
			<div id="page-container">
				<Header />
				<Body />
				<Footer />
			</div>
		)
	}
})