Rails.application.routes.draw do
  namespace :api do
    get '/random-greeting', to: 'greetings#random_greeting'
  end
end
