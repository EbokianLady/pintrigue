# frozen_string_literal: true

# Application Controller, handles current user
class ApplicationController < ActionController::Base
  include ErrorHandler

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def current_user!
    @current_user ||= User.find_by!(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    redirect_to root unless logged_in?
  end

  def require_logged_out
    # redirect to users#show? / render "api/users/#{user.id}" if logged_in?
  end
end
