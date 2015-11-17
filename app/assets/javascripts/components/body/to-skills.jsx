var ToSkills = React.createClass({
	render:function(){
		return (
			<div id="view-skills-button-container">
				<Link to="my-skills" spy={true} smooth={true} offset={50} duration={1500} href="#my-skills" id="view-skills-button" >
					SKILLS<br />
					<span>&darr;</span>
				</Link>
			</div>
		)
	}
})