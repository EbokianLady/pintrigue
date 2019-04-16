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
#  title       :string
#

require 'test_helper'

class PinJoinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
