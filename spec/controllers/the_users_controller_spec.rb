require 'rails_helper'

RSpec.describe Api::V1::TheUsersController, type: :controller do
  describe 'GET #index' do
    before do
      sign_in FactoryBot.create(:user)
      get :index
    end

    it 'returns http success' do
      expect(response).to have_http_status(:success)
    end
  end
end
