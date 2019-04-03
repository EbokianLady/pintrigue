# == Schema Information
#
# Table name: pins
#
#  id         :bigint(8)        not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  link_url   :string
#

# Pin Model
class Pin < ApplicationRecord
  validate :ensure_photo

  has_one_attached :picture

  has_many :pin_joins
  has_many :boards, through: :pin_joins, source: :board

  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "Must be attached"
    end
  end
end
