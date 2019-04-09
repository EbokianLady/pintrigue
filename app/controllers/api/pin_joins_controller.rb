# frozen_string_literal: true

module Api
  # PinJoins Controller
  class PinJoinsController < ApplicationController
    def index
      @pinjoins = PinJoin.includes(:pin).all
      render 'api/pins/index'
    end

    def update
      @pinjoin = current_user.pin_joins.find(params[:id])
      @pinjoin.update!(pinjoin_params)
      render 'api/pins/show'
    end

    def show
      @pinjoin = PinJoin.includes(:pin).find(params[:id])
      render 'api/pins/show'
    end

    def create
      @pinjoin = PinJoin.create!(pinjoin_params)
      render 'api/pins/show'
    end

    def destroy
      @pinjoin = current_user.pin_joins.find(params[:id])
      @pinjoin.destroy
      render 'api/pins/show'
    end

    private

    def pinjoin_params
      params.require(:pin).permit(:description, :title, :pin_id, :board_id)
    end
  end
end
