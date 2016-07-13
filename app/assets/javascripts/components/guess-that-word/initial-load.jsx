var InitialLoad = React.createClass({
	handleSelectGameType:function(type){
		if (type === 1) {
			this.props.handleGameMode(1)
		}
		else {
			this.props.handleGameMode(2)
		}
	},
	render:function(){
		return (
				<div id="hangman-body-container">
					<div id="hangman-content-container">
						<div id="hangman-content">
							<div>
								<button type="button" onClick={()=> this.handleSelectGameType(1)}>1 Player</button>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<button type="button" onClick={() => this.handleSelectGameType(2)}>2 Player</button>
							</div>
						</div>
					</div>
				</div>
			)
	}
})