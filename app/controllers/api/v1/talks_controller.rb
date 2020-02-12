module Api
  module V1
    class TalksController < ApplicationController
      def index
        @talks = Talk.all

        if user_signed_in?
          render json: @talks
        else
          render json: {}, status: 401
        end
      end

      def show
        if user_signed_in?
          @talk = Talk.find(params[:id])
          render json: @talk
        else
          render json: {}, status: 401
        end
      end
    end
  end
end
