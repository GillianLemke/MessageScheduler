require 'rails_helper'

# Test suite for the Todo model
RSpec.describe User, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:phone) }
  it { should validate_presence_of(:email) }
end
