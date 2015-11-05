var Page = React.createClass({
	render: function() {
		return (
			<div id="page-container">
				<Header />
				<Sidebar />
				<Content />
				<Footer />
			</div>
		)
	}
})