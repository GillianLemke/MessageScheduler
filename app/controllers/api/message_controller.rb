module Api
  class MessageController < ApplicationController
    def index
      @messages = Message.where(from: params[:username])
      render json: @messages
    end

    def create
      @message = params[:message]
      Message.create!(
        to: @message[:to],
        from: @message[:from],
        time: @message[:time],
        message_type: @message[:message_type],
        reminder: @message[:reminder],
        reminder_time: @message[:reminder_time],
        repeat: @message[:repeat],
        text: @message[:text],
      )
      render json: @message
    end

  end
end
