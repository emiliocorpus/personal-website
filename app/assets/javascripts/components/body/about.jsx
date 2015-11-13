var Element = Scroll.Element;

var About = React.createClass({
	render:function() {
		return(
			<Element key='about' name="about-me"id="about-me-container" className="body-section animate-enter animate-leave">
				<div className="section-title"> 
					<hr/>
						ABOUT ME
					<hr/>
				</div>
				<div id="profile-pic-container">
					<img src="/assets/ecorpus/.png"/>
				</div>
				
				<div id="about">I am a full-stack, freelance, web developer and am currently seeking employment. I love embracing new challenges and learning new technologies on the fly. 

					 My current areas of expertise include Ruby on Rails and Object Oriented Javascript. 

					Outside of coding and builing web-apps, I am an avid ukulele player, basketball enthusiast, Bay Area Sports afficionado, and a well-seasoned Netflix veteran!
				</div>
			</Element>
		)
	}
})