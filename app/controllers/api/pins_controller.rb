# frozen_string_literal: true

module Api
  # Pins Controller
  class PinsController < ApplicationController
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

    private

    def pin_params
      params.require(:pin).permit(:link_url, :picture, :row_height)
    end

    def pinjoin_params
      params.require(:pin).permit(:description, :title)
    end
  end
end
