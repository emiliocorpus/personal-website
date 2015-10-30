class ProjectsController < ApplicationController

	def index
		@projects = Project.all
		p projects
	end

end
