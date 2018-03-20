# spec/factories/user.rb
FactoryBot.define do
  factory :todo do
    name { Faker::HarryPotter.character }
    username { Faker::Name.unique.first_name }
    phone { Faker::Number.number(10) }
    email { Faker::Internet.unique.email }
  end
end
