# == Schema Information
#
# Table name: boards
#
#  id          :bigint(8)        not null, primary key
#  creator_id  :integer          not null
#  name        :string           not null
#  description :text
#  is_public   :boolean          default(TRUE)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Board < ApplicationRecord
  validates :creator_id, :name, presence: true

  belongs_to :creator,
  foreign_key: :creator_id,
  class_name: :User
  
  has_many :pin_joins
  
  has_many :pins,
  through: :pin_joins,
  source: :pin

  # has many pictures through pins?
end
