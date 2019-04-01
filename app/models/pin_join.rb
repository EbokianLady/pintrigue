# == Schema Information
#
# Table name: pin_joins
#
#  id          :bigint(8)        not null, primary key
#  pin_id      :integer          not null
#  board_id    :integer          not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

# Joins table for Boards and Pins
class PinJoin < ApplicationRecord
  validates :pin_id, :board_id, presence: true
  validates :pin_id, uniqueness: { scope: :board_id }

  belongs_to :pin
  belongs_to :board
  has_one :creator, through: :board, source: :creator
end
