var Header = React.createClass({
	render:function(){
		return (
			<div id="header-container" className="debugger">
				<div id="header-content">
					<HeaderName />
					<HeaderDescription />
				</div>
				<LearnMore />
			</div>
		)
	}
})