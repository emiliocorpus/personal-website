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

  end

  def submit_post

  end

end
