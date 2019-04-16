# == Schema Information
#
# Table name: follows
#
#  id            :bigint(8)        not null, primary key
#  follower_id   :integer          not null
#  followed_id   :integer          not null
#  followed_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

# Follow Model
class Follow < ApplicationRecord
  validates :followed_id, :follower_id, :followed_type, presence: true
  validates :followed_type, inclusion: %w[User Board]

  belongs_to :follower, class_name: :User
  belongs_to :followed, polymorphic: true
end
