Rails.application.routes.draw do
  namespace :api do
      resources :user
      resources :message
  end
end
