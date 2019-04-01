# frozen_string_literal: true

module Api
  # Boards Controller
  class BoardsController < ApplicationController
    def index
      @user = User.find_by!(username: params[:user_id])
      @boards = @user.boards
      render 'api/boards/index'
    end

    def show
      @board = Board.find(params[:id])
      render 'api/boards/show'
    end

    def update
      @board = current_user.boards.find(params[:id])

      if @board.update_attributes(board_params)
        render 'api/boards/show'
      elsif @board
        render json: @board.errors.full_messages, status: 422
      end
    end

    def create
      @board = Board.new(board_params)
      @board.creator_id = current_user.id

      if @board.save
        render 'api/boards/show'
      else
        render json: @board.errors.full_messages, status: 422
      end
    end

    def destroy
      @board = current_user.boards.find(params[:id])
      @user = current_user

      if @board
        @board.destroy
        render 'api/users/show'
      else
        render status: 401
      end
    end

    private

    def board_params
      params.require(:board).permit(:name, :description, :is_public)
    end
  end
end
