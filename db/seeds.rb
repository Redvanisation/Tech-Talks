user = User.first || User.create(email: 'test@test.com', password: 'password', password_confirmation: 'password')
talks = [
  {
    title: 'My first post', 
    description: 'The start of something special'
  },
  {
    title: 'My second post', 
    description: 'This is really getting good'
  },
  {
    title: 'Oh my god, Yeah!!!',
    description: 'Enough said.'
  }
]
talks.each do |talk_hash|
  user.talks.create(talk_hash)
end