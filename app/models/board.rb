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

# Board Model
class Board < ApplicationRecord
  validates :creator_id, :name, presence: true

  belongs_to :creator, foreign_key: :creator_id, class_name: :User
  has_many :pin_joins, dependent: :destroy
  has_many :pins, through: :pin_joins, source: :pin

  has_many :follows, as: :followed, dependent: :destroy
  has_many :followers, through: :follows

  def cover_urls
    urls = []
    pins = self.pins
    if pins.length >= 3
      pins[0..2].each do |pin|
        urls << Rails.application.routes.url_helpers.rails_blob_path(pin.picture, only_path: true)
      end
    else
      pins.each do |pin|
        urls << Rails.application.routes.url_helpers.rails_blob_path(pin.picture, only_path: true)
      end
    end
    urls
  end
end
