# frozen_string_literal: true

module Api
  # Users Controller
  class UsersController < ApplicationController
    def create
      @user = User.new(user_params)
      @user.save!
      login!(@user)
      render 'api/users/show'
    end

    def update
      @user = current_user
      @user.update!(user_params)
      render 'api/users/show'
    end
    # @user.custom_method(params[:photo])

    def show
      @user = User.find_by!(username: params[:id])
      render 'api/users/show'
    end

    def destroy
      @user = current_user
      @user.destroy!
    end

    private

    def user_params
      params.require(:user).permit(
        :email,
        :password,
        :username,
        :first_name,
        :last_name,
        :location,
        :description,
        :photo
      )
    end
  end
end
