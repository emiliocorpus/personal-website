var SingleLetter = React.createClass({
	render:function() {
		var text = this.props.letter
		var color = "fnt-clr-" + this.props.color
		return (
			<span className={color}>
				{text}
			</span>
		)
	}
})