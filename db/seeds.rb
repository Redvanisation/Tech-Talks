user1 = User.first || User.create(email: 'red@red.com', password: 'password', password_confirmation: 'password');

user2 = User.second || User.create(email: 'test@test.com', password: 'password', password_confirmation: 'password');

talks1 = [
  {
    id: 1,
    title: 'ReactJS',
    description: 'Some talk about react! bla bla bla bla bla',
    speakers: 'John Doe',
    location: 'New York City, NY'
  },
  {
    id: 2,
    title: 'Ruby on Rails',
    description: 'Some talk about Rails! Rails Rails Rails Rails Rails Rails',
    speakers: 'Michael Hartl',
    location: 'Texas, TX'
  }
]

talks2 = [
  {
    id: 3,
    title: 'JavaScript',
    description: 'Some talk about JavaScript! JavaScript ES6 ES5 ES7 ES8 Frameworks...',
    speakers: 'JS Dude, James Bond',
    location: 'Los Angeles, CA'
  },
  {
    id: 4,
    title: 'Redux',
    description: 'Some talk about Redux! Redux Redux Redux Redux Redux Redux...',
    speakers: 'Redux lover',
    location: 'Boston, MA'
  },
]

talks1.each do |talk_hash|
  user1.talks.create(talk_hash)
end

talks2.each do |talk_hash|
  user2.talks.create(talk_hash)
end