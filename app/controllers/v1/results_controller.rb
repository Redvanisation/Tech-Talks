class V1::ResultsController < ApplicationController
  def index
    # render json: { :results => [
    #   {
    #     :name => 'redvan',
    #     :code => '123456'
    #   }
    # ] }.to_json
    render json: User.all
  end
end