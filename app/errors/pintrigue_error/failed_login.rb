# frozen_string_literal: true

module PintrigueError
  # Failed login called in session controller
  class FailedLogin < PintrigueError::Base
    def initialize
      super(
        status: 401,
        message: 'Invalid username or password.'
      )
    end

    def as_json(*)
      {
        error_type: self.class.to_s,
        error_message: {
          password: ["Whoops, something's wrong with your email or password."]
        }
      }
    end
  end
end
