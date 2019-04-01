# frozen_string_literal: true

module Api
  # Sessions Controller
  class SessionsController < ApplicationController
    def create
      User.create!(email: '') if params[:user][:email] == ''

      @user = User.find_by_credentials!(user_params)
      login!(@user)
      render 'api/users/show'
    end

    def destroy
      logout!
    end

    private

    def user_params
      params.require(:user).permit(:email, :password)
    end
  end
end
