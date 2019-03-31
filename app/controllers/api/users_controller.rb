module Api
  # User Controller
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

    def show
      @user = User.find_by!(username: params[:id])
      render 'api/users/show'
    end

    def destroy
      @user = current_user
      @user.destroy!
      redirect_to root
    end

    private

    def user_params
      params.require(:user).permit(
        :email,
        :password,
        :username,
        :first_name,
        :last_name,
        :location
      )
    end
  end
end
