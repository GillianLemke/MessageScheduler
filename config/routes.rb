Rails.application.routes.draw do
  namespace :api do
      resources :user
      resources :message
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
