user1 = User.first || User.create(email: 'red@red.com', password: 'password', password_confirmation: 'password');

user2 = User.second || User.create(email: 'test@test.com', password: 'password', password_confirmation: 'password');

talks1 = [
  {
    id: 1,
    title: 'ReactJS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
    speakers: 'John Doe',
    speciality: 'Front-end Web Development',
    date: '11-01-2020',
    start_time: '10:30 AM',
    end_time: '06:00 PM',
    location: 'New York City, NY'
  },
  {
    id: 2,
    title: 'Ruby on Rails',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
    speakers: 'Michael Hartl',
    speciality: 'Full-Stack web development',
    date: '22-01-2020',
    start_time: '10:30 AM',
    end_time: '06:00 PM',
    location: 'Texas, TX'
  }
]

talks2 = [
  {
    id: 3,
    title: 'JavaScript',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
    speakers: 'James Bond',
    speciality: 'JavaScript, NodeJS',
    date: '13-02-2020',
    start_time: '10:30 AM',
    end_time: '06:00 PM',
    location: 'Los Angeles, CA'
  },
  {
    id: 4,
    title: 'Redux',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
    speakers: 'Redux lover',
    speciality: 'Front-End Development, UI/UX',
    date: '26-02-2020',
    start_time: '10:30 AM',
    end_time: '06:00 PM',
    location: 'Boston, MA'
  },
  {
    id: 5,
    title: 'Photoshop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
    speakers: 'PS Dude',
    speciality: 'Graphic Design, UI/UX',
    date: '28-02-2020',
    start_time: '10:30 AM',
    end_time: '06:00 PM',
    location: 'Houston, TX'
  },
  {
    id: 6,
    title: 'AWS Amplify',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non',
    speakers: 'AWS lover',
    speciality: 'Full-Stack web development',
    date: '02-03-2020',
    start_time: '10:30 AM',
    end_time: '06:00 PM',
    location: 'New York City, NY'
  },
]

talks1.each do |talk_hash|
  user1.talks.create(talk_hash)
end