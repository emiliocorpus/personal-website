var HangmanInstructionsTwoPlayer = React.createClass({
	handleWordSubmit:function(e){
		e.preventDefault()
		var word = ReactDOM.findDOMNode(this.refs.word).value.toLowerCase()
		this.props.handleWordSubmit(word)
	},
	render:function() {
		var errors
		var word
		if (this.props.data.word.error == true) {
			errors = "Word invalid, please enter a single word with no numbers, symbols or spaces"
		}
		return (
			<div id='hangman-instructions'>
				<span id="error-message">{errors}</span><br/>
				<form onSubmit={this.handleWordSubmit}>
				  <input type="password" placeholder="Enter Word Here" ref="word" />
				  <br/><br/>
				  <input type="submit" value="Submit" />
				  <br/>
				 </form>
			</div>
		)
	}
})