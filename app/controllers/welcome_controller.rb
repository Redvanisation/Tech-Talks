class WelcomeController < ApplicationController
  before_action :authenticate_user!, only: [:index]
  def index
    render layout: 'application'
  end

  def welcome
    if !signed_in?
      render layout: 'welcome_layout'
    else
      render :index
    end
  end
end
