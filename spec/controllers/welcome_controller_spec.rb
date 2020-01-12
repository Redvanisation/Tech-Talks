require 'rails_helper'

RSpec.describe WelcomeController, type: :controller do

  describe "GET #home" do
    it "returns http success" do
      get :home
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #app" do
    it "returns http success" do
      get :app
      expect(response).to have_http_status(:success)
    end
  end

end
