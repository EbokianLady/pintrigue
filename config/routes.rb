Rails.application.routes.draw do

  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :destroy, :show, :update] do 
      resources :boards, only: [:index]
    end
    resources :boards, only: [:destroy, :show, :update, :create] do 
      resources :pins, only: [:create]
    end
    resources :pins, only: [:destroy, :index, :show, :update]
  
    get 'users/:user_id/pins', :to => 'pins#user_index'
    get 'boards/:board_id/pins', :to => 'pins#board_index'
  end

end
