class BlogsController < ApplicationController
  def index
  	@blog =  Blog.all.last
  end

  def show
  	@blog = Blog.find_by(id: params[:id])
  	if !@blog 
  		redirect_to blogs_path
  	else
  		@blog
  	end
  end

  def new
  	if current_admin
  		@blog = Blog.new
  	else
  		redirect_to blogs_path
  	end
  end

  def create
  	if current_admin
  		binding.pry
  		@blog = Blog.new(title: params["blog"]['title'], html: params['blog']['html'], pic_url: params['blog']['pic_url'])
  		if @blog.save
  			binding.pry
	  		redirect_to blogs_path
	  	else
	  		redirect_to new_blogs_path
	  	end
  	else
  		redirect_to root_path
  	end
  end
end
