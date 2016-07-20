Rails.application.routes.draw do

  root 'page#home'

  get 'blogs' => 'page#blogs', as: :blogs



  get 'portfolio/guess-that-word' => 'snowman#index'
  get 'portfolio/snowman/word/retrieve' => 'snowman#retrieve'
  get 'portfolio/battleship' => 'battleship#index'


end
