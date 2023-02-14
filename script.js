let movieTitlesArray = Object.keys(movieData);
const movieCard = document.querySelector('.movie');
const movieDataArray = Object.entries(movieData);

const form = document.querySelector('#movie__form')
const title = document.querySelector('#title');
const year = document.querySelector('#year');
const plot = document.querySelector('#plot');
const rating = document.querySelector('#rating');
const runtime = document.querySelector('#runtime');
const cast = document.querySelector('#cast');




    //   **** add new movie *****
const addMovie = (array) => {
    movieDataArray.push(array);
    return movieDataArray;
}
form.addEventListener('submit', event => {
    event.preventDefault();
    addMovie([title.value, {
        plot: plot.value,
        cast: [cast.value],
        runtime: runtime.value,
        rating: rating.value,
        year: year.value
    }])
    title.value = '';
    plot.value = '';
    cast.value = '';
    runtime.value = '';
    rating.value = '';
    year.value = '';
    render();
});


//    ***** render movies  *******
const render = () => {
    movieCard.innerHTML = '';
    movieDataArray.forEach(movie => {
        movieCard.insertAdjacentHTML('beforeend',
        `<h2 class="movie__title">${movie[0]}</h2>
        <h3 class="plot">Plot</h3>
        <p class="plot__description">${movie[1].plot}</p>
        <h3 class="cast">Cast</h3>
        <p class="cast__description">${movie[1].cast.join(', ')}.</p>
        <h3 class="runtime">Runtime</h3>
        <p class="runtime__description">${movie[1].runtime} min.</p>
        <h3 class="rating">Rating</h3>
        <p class="rating__description">${movie[1].rating}</p>
        <h3 class="year">Year</h3>
        <p class="year__description">${movie[1].year}</p> 
        `);
    });
};

//    *****   SORT MOVIES BY NAME  *****

const sortByName = document.querySelector('.sort-by-name__button');
sortByName.addEventListener('click', () => {
    console.log(movieDataArray)
    movieDataArray.sort();
    render();
})

render();
