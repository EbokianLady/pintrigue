Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users
    resources :boards do
      resources :pins, only: [:create]
      resources :pin_joins, only: [:create]
    end
    resources :pins, only: [:destroy, :index, :show, :update]
    resources :pin_joins, only: [:destroy, :index, :show, :update]
  end

end
