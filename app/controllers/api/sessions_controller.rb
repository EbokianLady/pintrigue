module Api
  class SessionsController < ApplicationController
    def create
      @user = User.find_by_credentials!(user_params)
      login!(@user)
      render 'api/users/show'
    end

    def destroy
      logout!
      render status: 200
    end

    private

    def user_params
      params.require(:user).permit(:email, :password)
    end
  end
end
