const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '')
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
       y = prompt('На сколько оцените его?',''),
       c = prompt('Один из последних просмотренных фильмов?', ''),
       d = prompt('На сколько оцените?', '')

       personalMovieDB.movies[a] = y
       personalMovieDB.movies[c] = d

       console.log(personalMovieDB)