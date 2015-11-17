var ToPortfolio = React.createClass({
	render:function(){
		return (
			<div id="view-portfolio-button-container">
				<Link to="my-portfolio" spy={true} smooth={true} offset={50} duration={1500} href="#my-portfolio" id="view-portfolio-button" >
					PORTFOLIO<br />
					<span>&darr;</span>
				</Link>
			</div>
		)
	}
})