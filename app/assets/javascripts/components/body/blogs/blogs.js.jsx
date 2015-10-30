var Blogs = React.createClass({
	getInitialState: function() {
		return {
			blogs: this.handleLoad()
		}
	},

	handleLoad: function() {
	  $.ajax({
	    url: '/blogs',
	    dataType: 'json',
	    cache: false,
	    success: function(data) {
	        this.setState({projects: data})
	    }.bind(this),
	    error: function(xhr, status, err) {
	      console.error('/blogs', status, err.toString());
	      console.error(this.state.projects);
	    }.bind(this)
	  });
	},
	loadCheck:function () {
		var blogs = this.state.blogs
		var blogsHolder = []
		if (this.state.projects !== undefined) {
			blogs.map(function(index, el)) {
				var blog = < Blog data={blogs[el]} />
				blogsHolder.push(blog)
			}
		}
		return blogsHolder
	},
	render:function() {
		var loadedBlogs = this.loadCheck()
		return (
			<div>
				<br />
				{loadedBlogs}
				<br />
			</div>

		)
	}
})