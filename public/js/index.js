// films
fetch("http://localhost:3000/films")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (const film of data.films) {
      document
        .querySelector(".films")
        .append(
          "id: " + film.id + " title: " + film.title + " year: " + film.year
        );
    }
  })
  .catch((err) => {
    console.log(err);
  });

// genres
fetch("http://localhost:3000/genres")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    for (const genre of data.genres) {
      document
        .querySelector(".genres")
        .append("id: " + genre.id + " genre: " + genre.genre);
    }
  })
  .catch((err) => {
    console.log(err);
  });
