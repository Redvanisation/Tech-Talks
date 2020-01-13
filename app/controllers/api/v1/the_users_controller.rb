module Api 
  module V1
    class TheUsersController < ApplicationController
      def index
        @users_list = User.all
        
        if user_signed_in?
          render json: [@users_list, current_user]
        else
          render json: {}, status: 401
        end
      end
    end
  end
end
