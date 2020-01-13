module Api 
  module V1
    class FavTalksController < ApplicationController
      def index
        @fav_talks = current_user.talks
        
        if user_signed_in? && @fav_talks
          render json: @fav_talks
        else
          render json: {}, status: 401
        end
      end
    end
  end
end
