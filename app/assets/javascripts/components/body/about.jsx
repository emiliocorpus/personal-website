
var About = React.createClass({
	render:function() {
		return(
			<div key='about'  id="about-me-container" className="body-section animate-enter animate-leave">
				<div className="section-title"> 
					<hr/>
						ABOUT ME
					<hr/>
				</div>
				<div id="profile-pic-container">
					<img src="/assets/ecorpus/.png"/>
				</div>
				
				<div id="about">I am a full-stack, freelance, web developer and am currently seeking employment. I love embracing challenges as they come and learning new technologies on the fly. 

					 I am currently well versed in Ruby on Rails and Object Oriented Javascript. 

					Outside of programming and expanding my tech knowledge, I consider myself an avid ukulele player, basketball enthusiast, Warriors/Raiders die-hard, and Netflix afficionado!
				</div>

				<ToSkills />
			</div>
		)
	}
})