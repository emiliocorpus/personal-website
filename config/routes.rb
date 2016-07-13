Rails.application.routes.draw do

  root 'page#home'

  get 'about' => 'page#about', as: :about
  get 'blogs' => 'page#blogs', as: :blogs
  # get 'portfolio/'=> 'projects#index', as: :portfolio
  # get 'resume' => 'page#resume', as: :resume
  # get 'contact' => 'page#contact', as: :contact

  get 'portfolio/guess-that-word' => 'snowman#index'
  get 'portfolio/snowman/word/retrieve' => 'snowman#retrieve'
  get 'portfolio/battleship' => 'battleship#index'


end
