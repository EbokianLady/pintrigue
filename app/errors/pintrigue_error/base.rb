# frozen_string_literal: true

module PintrigueError
  # Base for Pintrigue Errors
  class Base < StandardError
    attr_reader :message, :status

    def initialize(status: 500, message: nil)
      @message = message || 'Something Went Wrong.'
      @status = status
    end

    def as_json(*)
      {
        error_type: self.class.to_s,
        error_message: message
      }
    end
  end
end
