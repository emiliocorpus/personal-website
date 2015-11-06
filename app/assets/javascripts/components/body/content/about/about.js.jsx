var About = React.createClass({
	render:function() {
		return (
			<div id="about-me-container" className="debugger">
				<u><h1>About Me</h1></u>
				<div id="about">I am a <em>full-stack, <b>freelance</b>, web developer</em> and I am <b>currently seeking full-time employment</b>. I am interested in any position that can allow me to grow and increase my budding programming knowledge. My ultimate goal is to become a senior-level software engineer but I am open to exploring different avenues and experiences along the way! My current areas of expertise include <em><b>Ruby on Rails</b></em> and <em><b>Object Oriented Javascript</b></em>. I am easily adaptable and able to learn things fairly quick (I started web development in early 2015). I consided myself to be a compassionate worker and am very family-oriented.

					<p>Outside of coding and builing web-apps, I am an avid ukulele player, basketball enthusiast, die-hard Raider fan, and a well-seasoned Netflix veteran!</p>
				</div>

				<div id="about-table" className="debugger">

					<div className="debugger">
						<h3>Current Known Languages</h3>
							<ul>
								<li>HTML5/CSS3</li>
								<li>Javascript</li>
									<ul>
										<li>React.js</li>
										<li>AJAX</li>
										<li>Jquery</li>
									</ul>
								<li>Ruby</li>
									<ul>
										<li>Ruby Gems</li>
										<li>Ruby on Rails</li>
										<li>Sinatra</li>
									</ul>
								<li>SQL</li>
								<li>PostgreSQL</li>
								<li>SQLite3</li>
								<li>Swift</li>
							</ul>
					</div>

					<div className="debugger">
						<h3 st>Technical Skillset</h3>
						<ul>
								<li>Object Oriented Programming</li>
								<li><b>M</b>odel-<b>V</b>iew-<b>C</b>ontroller Design</li>
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
								<li>Terminal/iTerm2</li>
								<li>Electronic Medical Records</li>
								<ul>
									<li>EPIC</li>
									<li>HMED</li>
								</ul>
						</ul>
					</div>

					<div id="education"className="debugger">
						<h3>Education</h3>
						<h4>DevBootcamp</h4>
						<ul >
							<li className="list-style-none"><u>Summary:</u></li>
							<li className="list-style-none">DevBootcamp is an 18+ week program in which students learn the fundamentals of Object Oriented Design, web development, team building, peer programming, but most importantly, how to efficiently learn new concepts and languages on the fly. <br /><br /></li>

							<li className="list-style-none"><u>Areas of Emphasis</u>:</li>
								<ul >
									<li>Ruby / Ruby on Rails</li>
									<li>Object Oriented Javascript</li>
									<li>Emphathetic Engineering</li>
									<li>Peer Programming</li>
								</ul>
						</ul>


						<h4>University of California: Irvine</h4>
						<ul>
							<li className="list-style-none"><u>Degree:</u> Biological Sciences</li>
							<li className="list-style-none"><u>Areas of Emphasis:</u></li>
								<ul>
									<li>Human Anatomy/Physiology</li>
									<li>Microbiology</li>
									<li>Ecology</li>
									<li>Molecular Biology</li>
								</ul>
						</ul>
					</div>

					<div id="experiences" className="debugger">
						<h3>Previous Employment</h3>
						<h4>DevBootcamp Teaching Assistant </h4>
							
							<p> <span><u><em>September 2015 - Current</em></u></span><br/><br/>
								Responsible for assisting current DevBootcamp students by teaching best programming practices. Also help students with algorithms, refactoring, and code reviews.
							</p>

						<h4>John Muir Emergency Room Scribe</h4>

							<p>
								<span><u><em>January 2013 - June 2015</em></u></span><br/><br/>
								Complete/write medical charts for emergency room physicians. Responsible for recording physical exams, medical decision making and procedure notes. Experience with HMED and EPIC medical record systems.
							</p>

						<h4>Neil Okamura, D.O., Part-Time Receptionist/Clerk</h4>

							<p>
								<span><u><em>June 2008 - June 2010</em></u></span><br/><br/>
								Room patients, take over-the-phone prescription requests, build new-patient charts and sorting charts.

							</p>
					</div>

				</div>
			</div>
		)
	}
})