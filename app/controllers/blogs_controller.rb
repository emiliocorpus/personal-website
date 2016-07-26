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

  		redirect_to blogs_path
  	else
  		redirect_to root_path
  	end
  end
end
