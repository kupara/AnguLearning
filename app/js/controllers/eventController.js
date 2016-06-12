'use strict';

eventsApp.controller('EventController', function EventController($scope) {
  $scope.sortOrder = '-upvoteCount';
  $scope.event = {
    name: 'Andela All Female Bootcamp',
    date: 'April 28th',
    time: 'All Day',
    location: {
      address: '525 Kindaruma',
      city: 'Nairobi',
      country: 'Kenya'
    },
    imgUrl: 'img/angularjs-logo.png',
    sessions: [
    {
      name: 'Introduction to Python',
      creator: 'Anon',
      duration: '1 hr',
      level: 'Beginner',
      detail: 'Lorem ipsum dolor sit amet, Advanced adipiscing elit. Sed et condimentum odio. Integer a porta felis. Pellentesque cursus, dolor vitae mattis condimentum, orci aliquet mauris, id aliquet metus sapien ut ligula. Fusce egestas justo nec nunc luctus. Proin tempor nisl sit amet purus elementum fringilla.',
      upvoteCount: 0
    },
    {
      name: 'Version Control',
      creator: 'Sinon',
      duration: '1 hr',
      level: 'Advanced',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et condimentum odio. Integer a porta felis. Pellentesque cursus, dolor vitae mattis condimentum, lectus orci aliquet mauris, id aliquet metus sapien ut ligula. Fusce egestas justo nec nunc feugiat luctus. Proin tempor nisl sit amet purus elementum fringilla.',
      upvoteCount: 0
    },
    {
      name: 'Web Development with Flask',
      creator: 'Hunon',
      duration: '1 hr',
      level: 'Intermediate',
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et odio. Integer a porta felis. Pellentesque , dolor vitae mattis condimentum, lectus orci aliquet mauris, id aliquet metus sapien ut ligula. Fusce egestas justo nec nunc feugiat luctus. Proin tempor nisl sit amet purus elementum fringilla.',
      upvoteCount: 0
    }]
  };
  
  $scope.upvoteSession = function(session) {
    ++session.upvoteCount;
  };
  
  $scope.downvoteSession = function(session) {
    --session.upvoteCount;
  };
});