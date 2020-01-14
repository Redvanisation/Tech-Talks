Rails.application.routes.draw do
  root 'welcome#index'
  
  devise_for :users
  
  get 'welcome/home'
  get 'index', to: 'welcome#index', as: 'index'

  namespace :api do 
    namespace :v1 do 
      resources :talks
      resources :the_users
      resources :fav_talks
    end 
  end
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
