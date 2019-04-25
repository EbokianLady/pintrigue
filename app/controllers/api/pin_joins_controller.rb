# frozen_string_literal: true

module Api
  # PinJoins Controller
  class PinJoinsController < ApplicationController
    def index
      @pinjoins = PinJoin.includes(:pin, :board, :creator).all
      render 'api/pins/index'
    end

    def index_all
      ids = current_user ? current_user.board_ids : []
      @pinjoins = PinJoin.includes(:pin, :board, :creator)
                         .where.not(board_id: ids)
                         .page(params[:page]).per(10)
      render 'api/pins/index'
    end

    def index_board
      @pinjoins = PinJoin.includes(:pin, :board, :creator)
                         .where(board_id: params[:id])
                         .page(params[:page]).per(10)
      render 'api/pins/index'
    end

    def index_user
      user = User.find_by!(username: params[:id])
      ids = user.board_ids
      @pinjoins = PinJoin.includes(:pin, :board, :creator)
                         .where(board_id: ids)
                         .page(params[:page]).per(10)
      render 'api/pins/index'
    end

    def update
      @pinjoin = current_user.pin_joins.find(params[:id])
      @pinjoin.update!(pinjoin_params)
      render 'api/pins/show'
    end

    def show
      @pinjoin = PinJoin.includes(:pin, :board, :creator).find(params[:id])
      render 'api/pins/show'
    end

    def create
      @pinjoin = PinJoin.new(pinjoin_params)
      @pinjoin.board_id = params[:board_id]
      @pinjoin.save!
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
