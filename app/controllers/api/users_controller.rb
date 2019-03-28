class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = current_user

        if @user && @user.update_attributes(user_params)
            render "api/users/show"
        elsif @user
            render json: @user.errors.full_messages
        else
            render json: ['Missing Current User']
        end
    end

    def show
        @user = User.find_by(username: params[:id])

        if @user
            render "api/users/show"
        else
            render json: ['No one has that username']
        end
    end

    def destroy
        @user = current_user

        if @user
            @user.destroy!
            redirect_to root
        else
            render json: ['Missing Current User']
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :username, :first_name, :last_name, :location)
    end
end
