module Api
  class MessageController < ApplicationController
    def index
      @messages = Message.where(from: params[:username])
      render json: @messages
    end
  end
end
