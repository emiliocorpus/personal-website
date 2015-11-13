var Page = React.createClass({
	getInitialState:function() {
		return {
			currentContent: "about"
		}
	},
	receiveClick: function() {
		ReactDOM.findDOMNode(this.refs.bodyContainer).scrollIntoView({alignToTop: true, behavior:"smooth"})
	},
	render: function() {
		return (
			<div id="page-container">
				<Header handleClick={this.receiveClick}/>
				<Body ref="bodyContainer"/>
				<Footer />
			</div>
		)
	}
})

