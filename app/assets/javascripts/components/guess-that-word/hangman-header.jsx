var HangmanHeader = React.createClass({
	render:function(){
		return (
			<div id="hangman-header" >
				
				<div id="hangman-header-content">
					<span id='title'>GUESS THAT WORD</span><br/>
					<span id="built-with">built with React.js</span>
				</div>
			</div>
		)
	}
})