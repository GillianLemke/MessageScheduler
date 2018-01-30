require 'rails_helper'

RSpec.describe 'Users API', type: :request do
  let(:user) { build(:user) }
  let(:valid_attributes) do
    attributes_for(:user)
  end

  describe 'GET /login' do
    context 'when valid request' do
      before { get '/api/login/#{username}/', params: valid_attributes.to_json}

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end

      it 'returns a success message' do
        expect(json['message']).to match(/Login successful/)
      end

      # it 'returns an authentication token' do
      #   expect(json['auth_token']).not_to be_nil
      # end
    end
    context 'when invalid request' do
      before { get '/api/login/#{username}/', params: {}}

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns failure message' do
        expect(json['message']).to match(/Login unsuccessful/)
      end
    end
  end
end
