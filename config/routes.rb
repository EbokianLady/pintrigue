Rails.application.routes.draw do

  root "static_pages#root"

  resources :users, only: :show

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users
  end

end
