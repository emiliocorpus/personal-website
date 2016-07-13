var HangmanCompleted = React.createClass({
	resetGame:function(e){
		debugger
		e.preventDefault()
		this.props.resetGame()
	},
	render:function() {
		var puzzleDisplay = []
		var checkArray = this.props.data.word.checkArray
		var incorrectGuesses = this.props.data.guesses.incorrectGuesses
		var guessedLetters = []
		var errors, gameOver, category
		var gameLossMessage = "Darn, better luck next time. To play again please click " 
		var word = this.props.data.word.value
		if (this.props.data.victory == true && this.props.data.currentStage == "completed") {
			gameOver = <span id ="game-over-message"><span className="font-clr-green">Congratulations</span> you guessed it correctly! To play again please click <a href="/portfolio/guess-that-word" onClick={this.resetGame}>here</a>!</span>

		}
		if (this.props.data.victory == false && this.props.data.currentStage == "completed") {
			gameOver = <span id ="game-over-message" className="font-color-black">{gameLossMessage}<a href="/portfolio/guess-that-word">here</a></span>
		}
		for (i=0; i <= checkArray.length - 1; i++) {
			if (checkArray[i].guessed == false) {
				puzzleDisplay.push(<span className="font-clr-red" key={i}>{checkArray[i].letter}</span>)
				puzzleDisplay.push(<span> </span>)
			}
			else {
				puzzleDisplay.push(<span className="font-clr-green" key={i}>{checkArray[i].letter}</span>)
				puzzleDisplay.push(<span> </span>)
			}
		}
		if (this.props.data.word.category !== false) {
			category = this.props.data.word.category
		}
		for (i=0; i <= incorrectGuesses.length - 1; i++) {
			guessedLetters.push(incorrectGuesses[i] + " ")
		}
		guessedLetters = guessedLetters.join('')
		return 	(
			<div className="hangman-game-container">
				<span id="category">{category}</span><br/><br/>
				{gameOver}<br/>
				<br/>
				<div id="puzzle">{puzzleDisplay}</div><br/>
				<div id="guessed-letters"> Incorrect Letters:<br/>{guessedLetters}</div><br/>
			</div>
		)
	}
})