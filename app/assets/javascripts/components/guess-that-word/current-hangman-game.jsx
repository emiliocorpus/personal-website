var CurrentHangmanGame = React.createClass({
	resetGame:function(e){
		e.preventDefault()
		this.props.resetGame()
	},
	render:function(){
		var display
		if (this.props.data.gameMode == 2){
			switch (this.props.data.currentStage) {
				case "selecting":
					display = <HangmanInstructionsTwoPlayer handleWordSubmit={this.props.handleWordSubmit} data = {this.props.data} />
					break;
				case "guessing":
					display = <ActiveHangmanGame data = {this.props.data} handleGuess={this.props.handleGuess}/>
					break;
				case "completed":
					display = <HangmanCompleted data = {this.props.data} resetGame={this.props.resetGame}/>
					break;
			}
		}
		else {
			switch (this.props.data.currentStage) {
				case "selecting":
					display = <HangmanInstructionsOnePlayer handleCategorySelect={this.props.handleCategorySelect} data={this.props.data} />
					break;
				case "guessing":
					display = <ActiveHangmanGame data = {this.props.data} handleGuess={this.props.handleGuess}/>
					break;
				case "completed":
					display = <HangmanCompleted data = {this.props.data} resetGame={this.props.resetGame}/>
					break;
			}
		}
		return (
			<div id="hangman-body-container">
				<div id="hangman-content-container">
					<div id="hangman-content">
						{display}
						<div><a href="/portfolio/guess-that-word" className="back-to-hangman-home"onClick={this.resetGame}>Back To Game Mode Selection</a></div>
					</div>
				</div>
			</div>

		)
	}
})