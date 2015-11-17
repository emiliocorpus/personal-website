var Element = Scroll.Element;

var Body = React.createClass({
	render:function() {
		return(
			<Element id="body-container" name="about-me" className="debugger ">
				<CSSTransitionGroup id="about-me" transitionName="fadeIn" transitionEnter={false} transitionLeave={false} transitionAppear={true} transitionAppearTimeout={1500}>
					<About/>
				</CSSTransitionGroup>

				
				<MySkills/>

				<MyPortfolio />

				<Interested />
		
			</Element>
		)
	}
})

