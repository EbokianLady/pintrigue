# frozen_string_literal: true

# Users Controller for testing aws
class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
    render :show
  end
end
