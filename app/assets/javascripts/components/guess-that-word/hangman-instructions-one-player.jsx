var HangmanInstructionsOnePlayer = React.createClass({
	handleCategorySelect:function(e){
		e.preventDefault()
		var category = e.target.word.value
		if (category.length > 0) {
			this.props.handleCategorySelect(category.toLowerCase())
		}
	},
	render:function(){
		return (
			<div id="select-category-container">
				<div id="category">CATEGORIES</div>
				<br/><br/>
				<div id="categories-container">
					<form onSubmit={this.handleCategorySelect} refs="category">
					  <input type="radio" name="word" value="desserts"/> Desserts<br/>
					  <input type="radio" name="word" value="sports"/> Sports<br/>
					  <input type="radio" name="word" value="mammals"/> Mammals<br/>
					  <input type="radio" name="word" value="countries"/> Countries<br/>
					  <input type="radio" name="word" value="random"/> Random<br/><br/>
					  <input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		)
	}
})