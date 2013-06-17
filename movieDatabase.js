var imdb = [
  {title: "Aliens",
  duration: 2,
  stars: ["Sigourney", "Dude Man", "Alian"]
  },
  {title:  "Matrix",
  duration: 2.5,
  stars:  ["Kiano", "Bold Guy", "The Oracle"]
  }];
for (var i = 0; i < imdb.length; i++) {
var movie = imdb[i];
console.log(movie.title + ' lasts for ' + movie.duration + ' hours.  Stars:  ' + movie.stars[0] + " " + movie.stars[1] + " " + movie.stars[3]);
}