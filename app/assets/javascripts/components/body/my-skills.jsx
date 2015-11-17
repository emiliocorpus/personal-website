var MySkills = React.createClass({
	render: function() {
		return (
			<Element id="skills-container" name="my-skills">
				<div className="skillset"> 
					<hr />
						SKILLSET
					<hr />
				</div>

				

				<div className="skills-descriptions">
					<div className="skill-description">
						<b>OBJECT ORIENTED PROGRAMMING</b>: I am well versed in Ruby and Javascript, and am applying/learning best-practices daily. I also am in the progress of learning Swift! I am quite experienced with React.js, and have built several apps, including this website using the React.js library.
					</div>

					<div className="skill-description">
						<b>MVC DESIGN</b>: I am familiar with the Model-View-Controller design and try to implement the use of single-responsibility whenever using this design foundation. 
					</div>

					<div className="skill-description">
						<b>AGILE DEVELOPMENT</b>: I enjoy this type of design strategy as it allows me to experience and further my knowledge of all aspects of the MVC.
					</div>

					<div className="skill-description">
						<b>TEST DRIVEN DEVELOPMENT</b>: I have experience with RSPEC and Jasmine testing frameworks, and try to use test driven development whenever possible. It is definitely an area I want to experience and improve.
					</div>

					<div className="skill-description">
						<b>GIT/VERSION CONTROL</b>: I am familiar with <a href="www.github.com">github</a> as almost all of my projects (big or small) or pushed to my repo. I am familiar with version controll and how the workflow of a team project should be structured. 
					</div>

				</div>		

				<div className="other-skills">
					I am also familiar with:
					<ul>
						<li>Jquery</li>
						<li>AJAX</li>
						<li>Consuming APIs</li>
						<li>Frontend design</li>
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
	
					<div className="skill-icon-pic-container">
						<img src="assets/html.png"/>
					</div>
	
					<div className="skill-icon-pic-container">
						<img src="assets/css.png"/>
					</div>
	
					<div className="skill-icon-pic-container">
						<img src="assets/javascript.png"/>
					</div>
	
					<div className="skill-icon-pic-container">
						<img src="assets/react.png"/>
					</div>
	
					<div className="skill-icon-pic-container">
						<img src="assets/ruby-on-rails.png"/>
					</div>
	
					<div className="skill-icon-pic-container">
						<img src="assets/ruby.png"/>
					</div>
	
					<div className="skill-icon-pic-container">
						<img src="assets/postgreSQL.png"/>
					</div>
	
					<div className="skill-icon-pic-container">
						<img src="assets/git.png"/>
					</div>
	
					<div className="skill-icon-pic-container">
						<img src="assets/heroku.png"/>
					</div>
				</div>	

				<ToPortfolio />
			</Element>
		)
	}
})