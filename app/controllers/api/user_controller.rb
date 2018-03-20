module Api
  class UserController < ApplicationController
    def index
      @user = User.where(username: params[:username])
      render json: @user
    end
  end
end
