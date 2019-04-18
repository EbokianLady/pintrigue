# frozen_string_literal: true

module Api
  # Follows Controller
  class FollowsController < ApplicationController
    def create
      @user = current_user
      follow = Follow.new(follow_params)
      follow.follower_id = @user.id
      follow.save!
      render 'api/users/show'
    end

    def destroy
      @user = current_user
      follow = current_user.followings.find_by!(follow_params)
      follow.destroy
      render 'api/users/show'
    end

    private

    def follow_params
      params.require(:follow).permit(:followed_id, :followed_type)
    end
  end
end
