require 'rails_helper'

feature 'User signup' do
  let(:user) { build(:user) }

  scenario 'user can sign up with valid data' do
    visit new_user_registration_path
    fill_in 'user[email]', with: user.email
    fill_in 'user[password]', with: user.password
    fill_in 'user[password_confirmation]', with: user.password_confirmation

    expect do
      click_button 'Sign up'
    end.to change(User, :count).by(1)
  end
end
