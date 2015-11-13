var Body = React.createClass({
	render:function() {
		return(

			<div id="body-container" name="about" className="debugger ">
				<CSSTransitionGroup id="about-me" transitionName="example" transitionEnterTimeout={3000} transitionLeave={false}>
					<About/>
				</CSSTransitionGroup>
			</div>
		)
	}
})

