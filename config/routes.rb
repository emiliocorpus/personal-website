Rails.application.routes.draw do

  get 'blogs' => 'blogs#index', as: :blogs

  get 'blogs/:id' => 'blogs#show'

  root 'page#home'




  get 'portfolio/guess-that-word' => 'snowman#index'
  get 'portfolio/snowman/word/retrieve' => 'snowman#retrieve'
  get 'portfolio/battleship' => 'battleship#index'


end
