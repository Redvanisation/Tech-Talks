module Api 
  module V1
    class TalksController < ApplicationController
      def index
        if user_signed_in?
          render json: [current_user, current_user.talks]
        else
          render json: {}, status: 401
        end
      end
    end
  end
end
