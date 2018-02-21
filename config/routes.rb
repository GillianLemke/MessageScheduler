Rails.application.routes.draw do
  namespace :api do
      resources :user username, password
  end
end
