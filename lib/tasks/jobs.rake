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

        # TODO: change back to 5 minutes
        if message.time < (now + 5.hours).utc && message.time > (now - 5.hours) then
          pp message

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
