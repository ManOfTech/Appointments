Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :documentation, only: :index
  namespace :api, except: [:new, :edit] do
    # Add API Routes here

    # For API version 1
    namespace :v1 do
      resources :appointments, only: [:index]
    end
  end

end
