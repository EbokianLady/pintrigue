# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  username        :string           not null
#  first_name      :string
#  last_name       :string
#  location        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  description     :text
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
