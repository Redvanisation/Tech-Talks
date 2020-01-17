FactoryBot.define do
  factory :talk do
    title { 'The great talk!' }
    description { 'bla bla bla bla' }
    speakers { 'John Doe' }
    date { '2020-01-11 20:39:43' }
    start_time { '10:30 AM' }
    end_time { '06:00 PM' }
    location { 'Somewhere, Earth' }
  end

  factory :blank_talk, class: 'Talk' do
    title { '' }
    description { '' }
    speakers { '' }
    date { '' }
    start_time { '' }
    end_time { '' }
    location { '' }
  end
end
