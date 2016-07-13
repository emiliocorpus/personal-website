class SnowmanController < ApplicationController
	layout 'snowman'

	def retrieve
		if params["category"] == 'random'
			category = select_random_category
			words = Word.where(category: category)
			@word = words.sample
		else
			words = Word.where(category: params["category"])
			@word = words.sample
		end
		render json: @word
	end


	private

	def select_random_category
		categories =['desserts', 'mammals', 'sports', 'countries']
		categories.sample
	end

	def select_random_word(category)
		category.sample
	end
end
