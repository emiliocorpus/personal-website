var Projects = React.createClass({
	getInitialState: function() {	
		$.ajax({
			url: '/projects',
			dataType: 'json',
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

	},

	hitServer: function() {
		
	},

	render: function() {



		return (




		)
	}
})