const movieTitlesArray = Object.keys(movieData);
const movieCard = document.querySelector('.movie');

const displayMovieCard = () => {
    movieTitlesArray.forEach(movie => {
        movieCard.insertAdjacentHTML('beforeend',
        `<h2 class="movie__title">${movie}</h2>
        <h3 class="plot">Plot</h3>
        <p class="plot__description">${movieData[movie].plot}</p>
        <h3 class="cast"></h3>
        <p class="cast__description">${movieData[movie].cast.join(', ')}.</p>
        <h3 class="runtime">Runtime</h3>
        <p class="runtime__description">${movieData[movie].runtime} min.</p>
        <h3 class="rating">Rating</h3>
        <p class="rating__descriptioin">${movieData[movie].rating}</p>
        <h3 class="year">Year</h3>
        <p class="year__description">${movieData[movie].year}</p>
        `);
    });
};
displayMovieCard();

const form = document.querySelector('#movie__form')
const title = document.querySelector('#title');
const year = document.querySelector('#year');
const plot = document.querySelector('#plot');
const rating = document.querySelector('#rating');
const runtime = document.querySelector('#runtime');
const cast = document.querySelector('#cast');

// const addMovie = (key, value) => {
//     return movieData[key] = value;
//   }
form.addEventListener('submit', event => {
    event.preventDefault();
    movieCard.insertAdjacentHTML('beforeend',
        `<h2 class="movie__title">${title.value}</h2>
        <h3 class="plot">Plot</h3>
        <p class="plot__description">${plot.value}</p>
        <h3 class="cast"></h3>
        <p class="cast__description">${cast.value}.</p>
        <h3 class="runtime">Runtime</h3>
        <p class="runtime__description">${runtime.value} min.</p>
        <h3 class="rating">Rating</h3>
        <p class="rating__descriptioin">${rating.value}</p>
        <h3 class="year">Year</h3>
        <p class="year__description">${year.value}</p>
        `);
    // addMovie(`${title.value}`, {
    //     rating: `${rating.value}`, 
    //     runtime: `${runtime.value}`,
    //     year: `${year.value}`,
    //     plot: `${plot.value}`,
    //     cast: [`${cast.value}`]
    //   })
});



  