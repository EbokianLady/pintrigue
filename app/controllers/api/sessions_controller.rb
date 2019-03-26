class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        debugger
        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ['Invalid email or password']
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render status: 404
        end
    end
end
