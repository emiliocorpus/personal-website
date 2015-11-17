var MyPortfolio = React.createClass({
	render:function(){
		return(
			<Element id="portfolio-container" name="my-portfolio">
				<div className="section-title" > 
					<hr/>
						PORTFOLIO
					<hr/>
				</div>
				<div className="project-container" >

					<div className="project-picture debugger">
						<a href="http://www.polisee.io/" title="www.polisee.io"><img src="assets/polisee.png" /></a>
					</div>

					<div className="project-description debugger">

							<p><span className="project-title"><b>Polisee</b></span> empowers citizens by connecting them with issues they care about and the representatives who vote on those issues. Created to provide transparency and communication between the people and those who govern them. This project took approximately 1 week to build with a team of 4 other students. This was a great project to strengthen and build my object oriented javascript through the use of the React.js library.</p>

							<p><span className="project-techs">Technologies:</span> RoR, Rspec, React.js, Heroku, PostgreSQL, HTML/CSS, Materialize, Twitter OAuth and Twilio integration.</p>
					</div>


					
				</div>

				<div className="project-container">

					<div className="project-picture debugger">
						<a href="http://www.emiliocorpus.com/" title="www.emiliocorpus.com"><img src="assets/website-pic.png" /></a>
					</div>
					<div className="project-description debugger">

							<p><span className="project-title"><b>emiliocorpus.com</b></span> currently serves as my personal website and portfolio. It is currently built with Ruby on Rails and React.js. It presently behaves as single-page, coupled web application, and during it's construction helped me further understand best practices of object oriented design and really helped me improve my CSS skills.</p>

							<p><span className="project-techs">Technologies:</span> RoR, React.js, Heroku, PostgreSQL, HTML/CSS, NPM</p>
					</div>
				</div>


			</Element>
		)
	}
})