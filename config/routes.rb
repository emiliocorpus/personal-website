Rails.application.routes.draw do
  resources :page, only: [:index]
  root 'page#index'  
  resources :projects, only: [:index]
  resources :blogs, only: [:index]
end
