var Link = Scroll.Link

var LearnMore = React.createClass({
	handleClick:function(e){
		e.preventDefault()
		this.props.sendClick()
	},
	render: function() {
		return(
			<div id="learn-more-button-container">
				<Link to="about-me" spy={true} smooth={true} offset={50} duration={500} href="#about-me" id="learn-more-button" >LEARN MORE<br/>
					<span>&darr;</span>
				</Link>
			</div>
		)
	}
})

