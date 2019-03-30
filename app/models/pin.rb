# == Schema Information
#
# Table name: pins
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  link_url   :string
#

class Pin < ApplicationRecord
  # has a photo through aws
  # has_one_attached :picture

  has_many :pin_joins
  has_many :boards, 
    through: :pin_joins,
    source: :board
end
