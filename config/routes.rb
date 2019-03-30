Rails.application.routes.draw do

  root "static_pages#root"

  # resources :users, only: :show

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy, :show, :update] do 
      resources :boards, only: [:create, :index]
      resources :pins, only: [:index]
    end
    resources :boards, only: [:destroy, :show, :update] do 
      resources :pins, only: [:create, :index]
    end
    resources :pins, only: [:destroy, :index, :show, :update]
  end

end
