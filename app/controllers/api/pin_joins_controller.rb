# frozen_string_literal: true

module Api
  # PinJoins Controller
  class PinJoinsController < ApplicationController
    def create
      board = Board.find(params[:board_id])
      # pin = Pin.find!(params[:pin][:])

      # @pinjoin = PinJoin.create!(
      #   pin_id: pin.id,
      #   board_id: board.id,
      #   description: params[:pin][:description],
      #   title: params[:pin][:title]
      # )

      render 'api/pins/show'
    end

    def destroy
      pinjoin = current_user.pin_joins.find(params[:id])
      pinjoin.destroy
      @board = pinjoin.board
      render 'api/boards/show'
    end

    private

    def pinjoin_params
      params.require(:pin).permit(:description, :title)
    end
  end
end
