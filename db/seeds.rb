# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

for i in 0..20
  User.create!(
    name: Faker::HarryPotter.character,
    username: Faker::Name.unique.first_name,
    phone: Faker::Number.number(10),
    email: Faker::Internet.unique.email)
end

for i in 0..40
  Message.create!(
    to: Faker::Internet.email,
    from: 'Priscilla',
    time: Faker::Time.between(DateTime.now + 7, DateTime.now + 14),
    message_type: 1,
    reminder: Faker::Boolean.boolean,
    reminder_time: Faker::Time.between(DateTime.now, DateTime.now + 7),
    repeat: Random.rand(5),
    text: Faker::HarryPotter.quote)
end
