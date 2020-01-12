Rails.application.routes.draw do
  devise_for :users
  root 'welcome#home'
  get 'welcome/home'
  get 'app', to: 'welcome#app', as: 'app'

  namespace :api do 
    namespace :v1 do 
      resources :talks
    end 
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # get 'sessions/new'
  # get    '/login',   to: 'sessions#new'
  # post   '/login',   to: 'sessions#create'
  # delete '/logout',  to: 'sessions#destroy'
  # resources :users, only: [:index, :create, :show ]
end
