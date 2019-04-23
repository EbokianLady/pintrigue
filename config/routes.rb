Rails.application.routes.draw do
  root 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users
    resources :boards do
      resources :pins, only: [:create]
      resources :pin_joins, only: [:create]
    end
    resources :pins, only: [:destroy, :index, :show, :update]
    resources :pin_joins, only: [:destroy, :index, :show, :update]
    resources :follows, only: [:create, :destroy]
  end

  get 'api/all_pins', to: 'api/pin_joins#index_all'
  get 'api/board_pins/:id', to: 'api/pin_joins#index_board'
  get 'api/user_pins/:id', to: 'api/pin_joins#index_user'
end
