class PageController < ApplicationController
  layout 'application'

  def home
  	last_blog = Blog.all.last
    projects = Project.all
    @content = {last_blog:last_blog, projects: projects}
  end

  def blogs
  	@blogs = Blog.all.reverse
  end

  def resume
     # pdf_filename = Rails.root.join("public", "resume.pdf")
     # send_file(pdf_filename, :filename => "resume.pdf", :disposition => "inline", :type => "application/pdf")
  end
end
 