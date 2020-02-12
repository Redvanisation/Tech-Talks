require 'rails_helper'

RSpec.describe Talk, type: :model do
  let(:user) { create(:user) }
  let(:blank_talk) { build(:blank_talk) }
  let(:valid_talk) { build(:talk) }

  context 'Testing for talk presence and validation' do
    it 'Checks if the talk is valid with empty content' do
      expect(blank_talk).not_to be_valid
    end

    it 'Checks if the talk is valid with present content' do
      expect(valid_talk).to be_valid
    end
  end
end
