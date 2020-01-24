Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'fortunes#index'
  resources :fortunes, only: [:edit, :update, :index, :show, :new, :destroy, :create] do
  end
end
