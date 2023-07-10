# frozen_string_literal: true

Rails.application.routes.draw do
  get '/api/greetings', to: 'api/greetings#random_greeting', as: 'api_greetings'
end
