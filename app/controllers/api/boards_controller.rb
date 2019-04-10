# frozen_string_literal: true

module Api
  # Boards Controller
  class BoardsController < ApplicationController
    def index
      @boards = Board.all
      render 'api/boards/index'
    end

    def show
      @board = Board.find(params[:id])
      render 'api/boards/show'
    end

    def update
      @board = current_user.boards.find(params[:id])
      @board.update!(board_params)
      render 'api/boards/show'
    end

    def create
      @board = Board.new(board_params)
      @board.creator_id = current_user.id
      @board.save!
      render 'api/boards/show'
    end

    def destroy
      @board = current_user.boards.find(params[:id])
      @board.destroy
      render 'api/boards/show'
    end

    private

    def board_params
      params.require(:board).permit(:name, :description, :is_public)
    end
  end
end
