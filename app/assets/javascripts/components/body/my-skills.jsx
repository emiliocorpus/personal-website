var MySkills = React.createClass({
	render: function() {
		return (
			<Element id="skills-container" name="my-skills">
				<div className="skillset"> 
					<hr />
						SKILLS
					<hr />
				</div>

				

				<div className="skills-descriptions">
					<div className="skill-description">
						<span className="skill-bold">OBJECT ORIENTED PROGRAMMING</span>: I am well versed in Ruby and Javascript, and am applying/learning best-practices daily. I also am in the progress of learning Swift! I am quite experienced with React.js, and have built several apps, including this website using the React.js library.
					</div>

					<div className="skill-description">
						<span className="skill-bold">MVC DESIGN</span>: I am familiar with the Model-View-Controller design and try to implement the use of single-responsibility whenever using this design foundation. 
					</div>

					<div className="skill-description">
						<span className="skill-bold">AGILE DEVELOPMENT</span>: I enjoy this type of design strategy as it allows me to experience and further my knowledge of all aspects of the MVC.
					</div>

					<div className="skill-description">
						<span className="skill-bold">TEST DRIVEN DEVELOPMENT</span>: I have experience with RSPEC and Jasmine testing frameworks, and try to use test driven development whenever possible. It is definitely an area I want to experience and improve.
					</div>

					<div className="skill-description">
						<span className="skill-bold">GIT/VERSION CONTROL</span>: I am familiar with <a href="www.github.com">github</a> as almost all of my projects (big or small) or pushed to my repo. I am familiar with version controll and how the workflow of a team project should be structured. 
					</div>

				</div>		

				<div className="other-skills">
					I am also skilled with:
					<ul>
						<li>Jquery</li>
						<li>AJAX</li>
						<li>Regex</li>
						<li>API consumption</li>
						<li>Frontend design</li>
						<li>Node/NPM</li>
					</ul>
				</div>

				<div className="currently-learning">
					And am currently improving/learning:<br />
					<ul>
						<li>Swift</li>
						<li>Xcode</li>
						<li>Jasmine</li>
						<li>Sharepoint</li>
						<li>XML</li>
						<li>X-path</li>
					</ul>
				</div>	

				<div className="skills">	
					<div className="languages">
						<hr/>
							CURRENT TECHNOLOGIES
						<hr/>
					</div>
	
					<div className="skill-icon-pic-container" title="HTML5">
						<img src="assets/html.png"/>
					</div>
	
					<div className="skill-icon-pic-container" title="CSS3">
						<img src="assets/css.png"/>
					</div>
	
					<div className="skill-icon-pic-container" title="Javascript">
						<img src="assets/javascript.png"/>
					</div>
	
					<div className="skill-icon-pic-container" title="React.js">
						<img src="assets/react.png"/>
					</div>
	
					<div className="skill-icon-pic-container" title="Ruby on Rails">
						<img src="assets/ruby-on-rails.png"/>
					</div>
	
					<div className="skill-icon-pic-container" title="Ruby">
						<img src="assets/ruby.png"/>
					</div>
	
					<div className="skill-icon-pic-container" title="PostgreSQL">
						<img src="assets/postgreSQL.png"/>
					</div>
	
					<div className="skill-icon-pic-container" title="Github">
						<img src="assets/git.png"/>
					</div>
	
					<div className="skill-icon-pic-container" title="Heroku">
						<img src="assets/heroku.png"/>
					</div>
				</div>	

				<ToPortfolio />
			</Element>
		)
	}
})