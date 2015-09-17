var AboutMe = React.createClass({
	render: function() {
		return (
			<div id="about-me-container" className="debugger">
				<div id="bio"className="debugger">
					My name is Emilio and I love Andrea Lee
				</div>

				<div id="about-me-pic" className="debugger">
					Picture container here
				</div>

				<div id="languages" className="debugger"> 
					<h3> Languages</h3>
					<ul>
						<li>Ruby on Rails</li>
						<li>Javascript</li>
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
						<li>Skill #1</li>
						<li>Skill #2</li>
						<li>Skill #3</li>
						<li>Skill #4</li>
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
						<li>Tool #1</li>
						<li>Tool #2</li>
						<li>Tool #3</li>
						<li>Tool #4</li>
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