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
					  <input type="radio" name="word" value="desserts"/> <label onClick=""> Desserts</label><br/>
					  <input type="radio" name="word" value="sports"/> <label onClick=""> Sports</label><br/>
					  <input type="radio" name="word" value="mammals"/> <label onClick="">Mammals</label><br/>
					  <input type="radio" name="word" value="countries"/> <label onClick="">Countries</label><br/>
					  <input type="radio" name="word" value="random"/> <label onClick="">Random</label><br/><br/>
					  <input type="submit" value="Submit" />
					</form>
				</div>
			</div>
		)
	}
})