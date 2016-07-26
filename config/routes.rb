Rails.application.routes.draw do

  devise_for :admins

  root 'page#home'

  get 'blogs' => 'blogs#index', as: :blogs
  get 'blogs/new' => 'blogs#new', as: :new_blog
  get 'blogs/:id' => 'blogs#show'
  post 'blogs/create' => 'blogs#create'



  get 'portfolio/guess-that-word' => 'snowman#index'
  get 'portfolio/snowman/word/retrieve' => 'snowman#retrieve'
  get 'portfolio/battleship' => 'battleship#index'


end
