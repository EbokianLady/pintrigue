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

    # TO-DO something is wrong here / check my queries later.
    def user_index
      user = User.find_by!(username: params[:user_id])
      @pinjoins = user.pin_joins.includes(:pin)
      render 'api/pins/index'
    end

    def show
      @pinjoin = PinJoin.find(params[:id]).includes(:pin)
      render 'api/pins/show'
    end

    def update
      @pinjoin = current_user.pin_joins.find(params[:id])
      @pinjoin.update!(pinjoin_params)
      render 'api/pins/show'
    end

    # TO-DO this should rollback if any part fails. How?
    def create
      board = Board.find(params[:board_id])
      pin = Pin.create!(pin_params)
      @pinjoin = PinJoin.create!(
        pin_id: pin.id,
        board_id: board.id,
        description: params[:pin][:description],
        title: params[:pin][:title]
      )
      render 'api/pins/show'
    end

    def destroy
      pinjoin = current_user.pin_joins.find(params[:id])
      pinjoin.destroy
      @board = pinjoin.board
      render 'api/boards/show'
    end

    private

    def pin_params
      params.require(:pin).permit(:link_url)
    end

    def pinjoin_params
      params.require(:pin).permit(:description, :title)
    end
  end
end
