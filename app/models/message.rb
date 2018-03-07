class Message < ApplicationRecord
  validates_presence_of :to, :from, :time
end
