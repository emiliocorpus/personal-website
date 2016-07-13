var ActiveHangmanGame = React.createClass({
	validateLetter:function(e){
		e.preventDefault()
		var guess = ReactDOM.findDOMNode(this.refs.guess).value.toUpperCase()
		this.props.handleGuess(guess)
		ReactDOM.findDOMNode(this.refs.guess).value = ""
	},
	render:function(){
			var puzzleDisplay = []
			var checkArray = this.props.data.word.checkArray
			var guessesLeft = 9 - this.props.data.guesses.incorrectGuesses.length
			var incorrectGuesses = this.props.data.guesses.incorrectGuesses
			var guessedLetters = []
			var errors, gameOver, category
			var word = this.props.data.word.value
			if (this.props.data.error.length > 0) {
				errors = this.props.data.error
			}
			for (i=0; i <= checkArray.length - 1; i++) {
				if (checkArray[i].guessed == false) {
					puzzleDisplay.push(<span className="size-40" key={i}>_ </span>)
				}
				else {
					puzzleDisplay.push(<span className="font-clr-green size-40" key={i}>{checkArray[i].letter + " "}</span>)
				}
			}
			for (i=0; i <= incorrectGuesses.length - 1; i++) {
				guessedLetters.push(incorrectGuesses[i] + " ")
			}
			guessedLetters = guessedLetters.join('')
			if (this.props.data.word.category !== false){
				category = this.props.data.word.category
			}
		return (
			<div className="hangman-game-container">
				<span id="category">{category}</span><br/><br/>
				<form onSubmit={this.validateLetter}>
				  <input type="text" name="guess" ref="guess" maxLength="1" size="1"/>
				  <br/>
				  <input type="submit" value="Guess" />
				 </form>
				 <br/>
				<div id="puzzle" >{puzzleDisplay}</div><br/>
				<div id="guessed-letters">Incorrect Letters:<br/>{guessedLetters}</div><br/>
				<div id="guesses-left">{guessesLeft} Guesses Left</div>
				<div id="error-message">{errors}</div>
			</div>
		)
	}
})