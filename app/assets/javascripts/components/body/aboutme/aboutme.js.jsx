var AboutMe = React.createClass({
	render: function() {
		return (
			<div id="about-me-container" className="debugger">
				<div id="bio"className="debugger">
					<p>I am a full-stack web developer and <b>I am currently seeking full-time employment</b>. I would prefer any position that can provide me room to expand my technological knowledge and capacities. My current areas of expertise include Ruby on Rails and Object Oriented Javascript. </p>
				</div>

				<div id="about-me-pic-container" className="debugger">
					<img src="/assets/ecorpus.png" id="about-me-pic"/>
				</div>

				<div id="languages" className="debugger"> 
					<h3> Languages</h3>
					<ul>
						<li>Ruby</li>
							<ul>
								<li>Ruby on Rails</li>
								<li>Sinatra</li>
							</ul>
						<li>Javascript</li>
							<ul>
								<li>React.js</li>
								<li>AJAX</li>
								<li>Jquery</li>
							</ul>
						<li>SQL</li>
							<ul>
								<li>PostgreSQL</li>
								<li>SQLite3</li>
							</ul>
						<li>Swift</li>
					</ul>
				</div>
					
				<div id="education" className="debugger">
					<h3> Education </h3>
					<ul>
						<li>
							<u>University of California: Irvine</u><br/>
							Degree:<em> Bachelors of Science - Biology</em>
						</li>

						<li><u>Dev Bootcamp</u><br />
							Emphasis:<br/>
							<ul>
								<li> Ruby On Rails</li>
								<li>Object Oriented Design</li>
								<li>Javascript</li>
								<li>Test Driven Development</li>
							</ul>
						</li>

					</ul>
				</div>

				<div id="skills" className="debugger">
					<h3>Skillset</h3>
					<ul>
						<li>Agile Development</li>
						<li>Test Driven Development</li>
							<ul>
								<li>Jasmine</li>
								<li>Rspec</li>
							</ul>
						<li>Github/Git Workflow</li>
						<li>Object Oriented Design</li>
						<li>Mac OS X and Windows Operating Systems</li>
						<li>Electronic Medical Records</li>
							<ul>
								<li>EPIC</li>
								<li>HMED</li>
							</ul>
						<li>HIPAA</li>

					</ul>
				</div>

				<div id="Goals" className="debugger">
					<h3>Goals</h3>
					<ul>
						<li>Goal #1</li>
						<li>Goal #2</li>
						<li>Goal #3</li>
						<li>Goal #4</li>

					</ul>
				</div>

				<div id="Tools" className="debugger">
					<h3>Tools</h3>
					<ul>
						<li>Ruby on Rails</li>
						<li>Sublime Text</li>
						<li>Xcode</li>
						<li>Command Line</li>
							<ul>
								<li>Terminal</li>
								<li>iTerm2</li>
							</ul>
					</ul>
				</div>

				<div id="Quirks" className="debugger">
					<h3>Quirks</h3>
					<ul>
						<li>Quirk #1</li>
						<li>Quirk #2</li>
						<li>Quirk #3</li>
						<li>Quirk #4</li>
					</ul>
				</div>

			</div>
		)
	}
})