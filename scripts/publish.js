import ghpages from 'gh-pages';

ghpages.publish('dist', function(err) {});

console.log('Published to github');
