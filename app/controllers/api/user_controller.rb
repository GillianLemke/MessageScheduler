module Api
  class UserController < ApplicationController
    def index
      @ideas = User.all
      render json: @ideas
    end
  end
end
