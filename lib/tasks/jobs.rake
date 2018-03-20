require 'date'
require 'google/apis/gmail_v1'
require 'googleauth'
require 'googleauth/stores/file_token_store'
require 'fileutils'

Bundler.require(*Rails.groups)

namespace :jobs do
  desc "send messages that are scheduled to be sent within 5 minutes of the current time"
  task send_messages: :environment do

    OOB_URI = 'urn:ietf:wg:oauth:2.0:oob'
    APPLICATION_NAME = 'Gmail API Ruby Quickstart'
    CLIENT_SECRETS_PATH = 'lib/tasks/client_secret.json'
    CREDENTIALS_PATH = File.join(Dir.home, '.credentials',
                                 "gmail-ruby-quickstart.yaml")
    SCOPE = Google::Apis::GmailV1::AUTH_GMAIL_SEND

    # Initialize the API
    service = Google::Apis::GmailV1::GmailService.new
    service.client_options.application_name = APPLICATION_NAME
    service.authorization = authorize


    @users = User.all
    for user in @users do
      messages = Message.where(from: user[:username])

      for message in messages do
        now = Time.now.utc
        send = false

        pp message.repeat
        pp message.time
        pp now
        pp now + 5.minutes
        pp now - 5.minutes

        minus_five = now - 5.minutes
        plus_five = now + 5.minutes
        time = message.time

        pp (message.repeat == 0 || message.repeat == nil)
        pp (time < plus_five) and (time > minus_five)

        if (message.repeat == 0 || message.repeat == nil) and (time < plus_five) and (time > minus_five) then
          pp message
          send = true
        elsif message.repeat then
          if (message.repeat == 1) && message.time.month == now.month && message.time.day == now.day && message.time.hour == now.hour && message.time.minute < (now.minute + 5.minutes) && message.time.minute > (now.minute + 5.minutes) then
            pp message
            send = true
          elsif (message.repeat == 2) && message.time.day == now.day && message.time.minute < (now.minute + 5.minutes) && message.time.minute > (now.minute + 5.minutes) then
            pp message
            send = true
          elsif (message.repeat == 3) && message.time.wday == now.wday && message.time.hour == now.hour && message.time.minute < (now.minute + 5.minutes) && message.time.minute > (now.minute + 5.minutes) then
            pp message
            send = true
          elsif (message.repeat == 4) && message.time.hour == now.hour && message.time.minute < (now.minute + 5.minutes) && message.time.minute > (now.minute + 5.minutes) then
            pp message
            send = true
          end
        end

        if send then
          m = Mail.new(
            to: message[:to],
            from: "glemke1@emich.edu",
            subject: user[:name] + 'has sent you a message!',
            body: message[:text])

          msg = m.encoded

          message_object = Google::Apis::GmailV1::Message.new(raw:m.to_s)
          service.send_user_message("me", message_object)
        end
      end
    end
  end

end



##
# Ensure valid credentials, either by restoring from the saved credentials
# files or intitiating an OAuth2 authorization. If authorization is required,
# the user's default browser will be launched to approve the request.
#
# @return [Google::Auth::UserRefreshCredentials] OAuth2 credentials
def authorize
  FileUtils.mkdir_p(File.dirname(CREDENTIALS_PATH))

  client_id = Google::Auth::ClientId.from_file(CLIENT_SECRETS_PATH)
  token_store = Google::Auth::Stores::FileTokenStore.new(file: CREDENTIALS_PATH)
  authorizer = Google::Auth::UserAuthorizer.new(
    client_id, SCOPE, token_store)
  user_id = 'default'
  credentials = authorizer.get_credentials(user_id)
  if credentials.nil?
    url = authorizer.get_authorization_url(
      base_url: OOB_URI)
    puts "Open the following URL in the browser and enter the " +
         "resulting code after authorization"
    puts url
    code = gets
    credentials = authorizer.get_and_store_credentials_from_code(
      user_id: user_id, code: code, base_url: OOB_URI)
  end
  credentials
end
