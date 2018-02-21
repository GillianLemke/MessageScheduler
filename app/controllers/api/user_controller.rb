module Api
  class UserController < ApplicationController
    def index username, password
      @user = User.where(["name = :name", { name: username }])
      render json: @user
    end
  end
end
