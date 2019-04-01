# frozen_string_literal: true

module Api
  # Pins Controller
  class PinsController < ApplicationController
    def index
      @pinjoins = PinJoin.includes(:pin).all
      render 'api/pins/index'
    end

    def board_index
      @pinjoins = PinJoin.includes(:pin).where(board_id: params[:board_id])
      render 'api/pins/index'
    end

    #something is wrong here / check my queries later.
    def user_index
      user = User.find(params[:user_id])
      @pinjoins = user.pin_joins.includes(:pin)
      render 'api/pins/index'
    end

    def show
      @pin = Pin.find(params[:id])
      render 'api/pins/show'
    end

    def update
      @pin = current_user.pins.find(params[:id])
      @pin.update!(pin_params)
      render 'api/pins/show'
    end

    def create
      board = Board.find(params[:board_id])
      @pin = Pin.create!(pin_params)
      board.pins << @pin
      render 'api/pins/show'
    end

    def destroy
      @pin = current_user.pins.find(params[:id])
      board = @pin.board
      @pin.destroy
      # how do I find current_board
      @board = current_board
      render 'api/boards/show'
    end

    private

    def pin_params
      params.require(:pin).permit(:link_url)
    end
  end
end
