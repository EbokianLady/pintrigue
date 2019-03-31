# Global Error Handler
module ErrorHandler
  def self.included(klass)
    klass.class_eval do

      rescue_from Exception, with: :unhandled_exception
      rescue_from StandardError, with: :unhandled_error
      rescue_from PintrigueError::Base, with: :base_error
      rescue_from ActiveRecord::RecordNotFound, with: :not_found
      rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

      private

      def base_error(err)
        log(err)
        render json: err, status: err.status, layout: false
      end

      def invalid_record(err)
        render json: {
          error_type: err.class.to_s,
          record: err.record.class.to_s,
          error_message: err.record.errors.messages
        }, status: 400, layout: false
      end

      def not_found(err)
        render json: {
          error_type: err.class.to_s,
          error_message: err.message
        }, status: 404, layout: false
      end

      def unhandled_exception(err)
        log(err)
        raise
      end

      def unhandled_error(err)
        log(err)
        render json: {
          error_type: err.class.to_s,
          error_message: err.message
        }, status: 500, layout: false
      end

      def log(err)
        Rails.logger.info(err.message)
      end
    end
  end
end
