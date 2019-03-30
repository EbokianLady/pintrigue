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

class User < ApplicationRecord
    validates :session_token, :email, :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    attr_reader :password

    has_one_attached :photo

    has_many :boards,
      foreign_key: :creator_id,
      class_name: :Board

    has_many :pin_joins,
      through: :boards,
      source: :pin_joins

    has_many :pins,
      through: :pin_joins,
      source: :pins

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        encrypted = BCrypt::Password.new(self.password_digest)
        encrypted.is_password?(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    private

    def self.generate_session_token
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end
