var Header = React.createClass({
	receiveClick:function(){
		this.props.handleClick()
	},
	render:function(){
		return (
			<div id="header-container" className="debugger">
				<div id="header-content">
					<HeaderName />
					<HeaderDescription />
				</div>
				<LearnMore sendClick={this.receiveClick} />
			</div>
		)
	}
})