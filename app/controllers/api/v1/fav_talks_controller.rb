module Api
  module V1
    class FavTalksController < ApplicationController
      skip_before_action :verify_authenticity_token

      def index
        @fav_talks = current_user.talks

        if user_signed_in? && @fav_talks
          render json: @fav_talks
        else
          render json: {}, status: 401
        end
      end

      def update
        @fav_talk = Talk.find(params[:id])
        current_user.talks << @fav_talk unless current_user.talks.include?(@fav_talk)
      end
    end
  end
end
