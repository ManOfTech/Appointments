class Appointment < ApplicationRecord
  belongs_to :customer
  belongs_to :provider

  validates :provider, :customer, presence: true
end
