var HangmanPage = React.createClass({
	getInitialState:function() {
		return {
			gameMode: "",
			currentStage: "",
			victory: false,
			guesses: {
				allGuesses:[],
				incorrectGuesses:[]
			},
			error: "",
			word:{value: "", valid: false, error:false}
		}
	},
	resetGame:function(){
		this.setState(this.getInitialState())
	},

	handleGameMode:function(type){
		this.setState({
			gameMode: type,
			currentStage: 'selecting'
		})
	},
	handleCategorySelect:function(category){
		$.ajax({
		  url: "snowman/word/retrieve",
		  dataType: 'json',
		  cache: false,
		  data: {category: category},
		  success: function(retrievedCategory) {
		  	console.log('SUCESS')
		  	this.setState({
		  		word: {
		  			value: retrievedCategory.word.toUpperCase(),
		  			checkArray: this.splitWord(retrievedCategory.word.toUpperCase()),
		  			category: retrievedCategory.category.toUpperCase(),
		  			valid:true,
		  			errors:false
		  		},
		  		currentStage: 'guessing'
		  	})
		  }.bind(this),
		  error: function(xhr, status, err) {
		    console.error('You were unable to hit the words controller');
		  }.bind(this)
		});
	},
	splitWord:function(string) {
		var array = []
		for (var i = 0; i <= string.length - 1; i++) {
			array.push({
				letter: string[i],
				guessed: false
			})
		}
		return array
	},
	handleWordSubmit:function(word){
		var valid = this.validate(word)
		if (valid == 0){
			this.setState({
				word: {
					value: word.toUpperCase(),
					checkArray: this.splitWord(word.toUpperCase()),
					category: false, 
					valid: true,
					errors:false
				},
				currentStage: 'guessing'
			})
		}
		else {
			this.setState({
				word:{
					value: "", 
					valid: false, 
					error:true
				}
			})
		}
	},
	validate:function(inputText){
		var letters = /^[A-Za-z]+$/;
		var valid = 0
		for (var i =  0; i <= inputText.length - 1; i++) {
			if (inputText[i].match(letters)) {
			}
			else {
				valid ++
			}
		}
		return valid
	},
	checkIfValidGuess:function(letter) {
		var check = this.state.guesses.allGuesses
		var valid = 0
		if (letter.length > 1 || letter == "") {
			this.setState({
				error: "Please submit a valid, SINGLE letter"
			})
			valid ++
			return valid
		}
		if (!letter.match(/[A-Z]/i)) {
    		// alphabet letters found
    		this.setState({
    			error: 'Please submit a valid, SINGLE letter'
    		})
    		valid ++
    		return valid
		}
		for (i=0;i<=check.length - 1;i++) {
			if (check[i] == letter) {
				valid ++
			}
			this.setState({
				error:"Letter has been already guessed"
			})
		}
		return valid
	},
	checkIfGameIsOver:function(){
		var invalid = 0
		var gameStatus = {completed:false, status: 'n/a'}
		var checkArray = this.state.word.checkArray
		var incorrectGuesses = this.state.guesses.incorrectGuesses
		for (i=0;i<=checkArray.length-1;i++){
			if (checkArray[i].guessed == false) {
				invalid ++
			}
		}
		if (invalid == 0) {
			gameStatus = {
				completed: true,
				victory: true
			}
		}
		else if (incorrectGuesses.length == 9) {
			gameStatus = {
				completed: true,
				victory: false
			}
		}
		return gameStatus
	},
	handleGuess:function(letter){
		if (!this.checkIfGameIsOver().completed) {
			if (this.checkIfValidGuess(letter) == 0) {
				var word = this.state.word
				var checkArray = this.state.word.checkArray
				var correct = false
				var allGuesses = this.state.guesses.allGuesses
				var incorrectGuesses = this.state.guesses.incorrectGuesses
				allGuesses.push(letter)
				for (var i =0;i<=checkArray.length - 1;i++) {
					if (checkArray[i].letter == letter) {
						checkArray[i].guessed = true
						correct = true
					}
				}
				if (correct) {
					this.setState({
						guesses: {
							allGuesses: allGuesses,
							incorrectGuesses: incorrectGuesses
						},
						word: {
							category: word.category,
							checkArray:checkArray,
							value: word.value
						},
						error: ""
					})
					var gameStatus = this.checkIfGameIsOver()
					if (gameStatus.completed) {
						this.setState({
							currentStage: "completed",
							victory: gameStatus.victory
						})
					}
				}
				else {
					incorrectGuesses.push(letter)
					this.setState({
						guesses: {
							allGuesses: allGuesses,
							incorrectGuesses: incorrectGuesses
						},
						error: ""
					})
					var gameStatus = this.checkIfGameIsOver()
					if (gameStatus.completed) {
						this.setState({
							currentStage: "completed",
							victory: gameStatus.victory
						})
					}
				}
			}
		}
	},
	render:function(){
		var pageDisplay;
		var gameMode = this.state.gameMode
		if (gameMode === "") {
			pageDisplay = <InitialLoad handleGameMode={this.handleGameMode} />
		}
		else {
			pageDisplay = <CurrentHangmanGame data={this.state} handleWordSubmit={this.handleWordSubmit} handleCategorySelect={this.handleCategorySelect} handleGuess={this.handleGuess} resetGame={this.resetGame}/>
		}
		
		return (
			<div id="hangman-page-container">
				<div>
					<a href="/">Home</a>
				</div>
				<HangmanHeader />
				{pageDisplay}
			</div>
		)
	}
})


