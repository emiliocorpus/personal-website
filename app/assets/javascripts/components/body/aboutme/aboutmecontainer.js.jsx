var AboutMeContainer = React.createClass({
	render: function() {
		return (
			<div id="about-me-container" className="debugger">
				<div id="bio"className="debugger">
					<p>I am a full-stack web developer and <b>I am currently seeking full-time employment</b>. I would prefer any position that can provide me room to expand my technological knowledge and capacities. My current areas of expertise include Ruby on Rails and Object Oriented Javascript. </p>
				</div>

				<div id="about-me-contact-container">
					<div id="contact-images-container" className="debugger">
						<a href="http://www.twitter.com/uh_mili_oh">
							<img src="/assets/twitter-icon.png" id="twitter-icon"/>
						</a>
						<a href="https://www.linkedin.com/in/emiliocorpus">
							<img src="/assets/linkedin-icon.png" id="linkedin-icon"/>
						</a>
						<a href="http://www.github.com/emiliocorpus">
							<img src="/assets/github-icon.png" id="github-icon"/>
						</a>
					</div>
					<div id="about-me-pic-container" className="debugger">
						<img src="/assets/ecorpus.png" id="about-me-pic"/>
					</div>
				</div>

				<div id="languages" className="debugger about-section"> 
					<h3> Languages</h3>
					<ul>
						<li><b>HTML5/CSS3</b></li>
						<li><b>Javascript</b></li>
							<ul>
								<li>React.js</li>
								<li>AJAX</li>
								<li>Jquery</li>
							</ul>
						<li>Ruby</li>
							<ul>
								<li>Ruby Gems</li>
								<li><b>Ruby on Rails</b></li>
								<li>Sinatra</li>
							</ul>
						<li>SQL</li>
							<ul>
								<li><b>PostgreSQL</b></li>
								<li><b>SQLite3</b></li>
							</ul>
						<li>Swift</li>
					</ul>
				</div>
					
				<div id="education" className="debugger about-section">
					<h3> Education </h3>
					<ul>
						<li><u>Dev Bootcamp</u><br />
							Emphasis:<br/>
							<ul>
								<li>Ruby On Rails</li>
								<li>Object Oriented Design</li>
								<li>Javascript</li>
								<li>Test Driven Development</li>
								<li>Peer Programming/Empathetic Engineering</li>
								<li>Problem Solving Strategies</li>
							</ul>
						</li>
						<li>
							<u>University of California: Irvine</u><br/>
							Degree:<em> Bachelors of Science - Biology</em><br/>
							Emphasis:<br/>
							<ul>
								<li>Human Anatomy/Physiology</li>
								<li>Molecular Biology</li>
								<li>Ecology</li>
								<li>Genetics</li>
								<li>Organic Chemistry</li>
							</ul>
						</li>


					</ul>
				</div>


				<div id="skills" className="debugger about-section">
					<h3>Skillset</h3>
					<ul>
						<li>Object Oriented Design</li>
						<li>Pseudocode</li>
						<li>Agile Development</li>
						<li>Peer Programming</li>
						<li>Test Driven Development</li>
							<ul>
								<li>Jasmine</li>
								<li>Rspec</li>
							</ul>
						<li>Github/Git Workflow</li>
						<li>Heroku Toolbelt</li>
						<li>Mac OS X and Windows Operating Systems</li>
						<li>Sublime Text Shortcuts</li>
						<li>Command Line Shortcuts</li>
							<ul>
								<li>Terminal</li>
								<li>iTerm2</li>
							</ul>
						<li>Electronic Medical Records</li>
							<ul>
								<li>EPIC</li>
								<li>HMED</li>
							</ul>
						<li>Patient Confidentiality/HIPAA</li>

					</ul>
				</div>

				<div id="summary" className="debugger about-section">

					<h3>Summary</h3>
					
					<ul>
						<li>Experienced Peer Progammer</li>
						<li>Empathetic Engineering</li>
						<li>Highly Receptive to Criticism</li>
						<li>Easily adaptable</li>
						<li>Compassionate worker</li>
						<li>Family-oriented</li>
						<li>Open Source Advocate </li>
					</ul>
				</div>

				<div id="experiences" className="debugger about-section">
					<h3>Experiences</h3>
					<ul>
						<li>John Muir Health Center</li>
								<ul>
									<li className="experience">Emergency Room Medical Scribe</li>
									<ul>
										<li className="experience">Help increase emergency room efficiency by completing physician charts</li>
									</ul>
								</ul>
						<li>DevBootamp</li>
						
					</ul>
				</div>

				<div id="Quirks" className="debugger about-section">
					<h3>Quirks</h3>
					<ul>
						<li>Avid Ukulele Player</li>
						<li>Basketball Enthusiast</li>
						<li>Road bike Newbie</li>
						<li>Die-hard Raider Fan</li>
						<li>Netflix Veteran</li>
					</ul>
				</div>

			</div>
		)
	}
})