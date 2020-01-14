class WelcomeController < ApplicationController
  before_action :authenticate_user!, only: [:index]

  def home
  end

  def index
  end
end
