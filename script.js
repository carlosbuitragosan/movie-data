
const movieCard = document.querySelector('.movie');
const movieDataArray = Object.entries(movieData);



//   ***** FORM SELECTORS  ******
const form = document.querySelector('#movie__form')
const title = document.querySelector('#title');
const year = document.querySelector('#year');
const plot = document.querySelector('#plot');
const rating = document.querySelector('#rating');
const runtime = document.querySelector('#runtime');
const cast = document.querySelector('#cast');
const successMessage = document.querySelector('.message__saved');
const enterInfo = document.querySelector('.enter__info');



    //   **** add new movie *****
const addMovie = (array) => {
    movieDataArray.push(array);
    return movieDataArray;
};

form.addEventListener('submit', event => {
    event.preventDefault();

        // **** making sure all fields are filled in. if not show message *****
    if (title.value==='' || plot.value==='' || cast.value==='' || runtime.value==='' || rating.value==='' || year.value==='') {
        enterInfo.style.display = 'block';
        setTimeout(() => {
            enterInfo.style.display = 'none';
        }, 2000);

    } else {

        addMovie([title.value[0]?.toUpperCase() + title.value.slice(1), {
            plot: plot.value,
            cast: [cast.value],
            runtime: runtime.value,
            rating: rating.value,
            year: year.value
        }]);
        // ***** reseting form values ****
        title.value = '';
        plot.value = '';
        cast.value = '';
        runtime.value = '';
        rating.value = '';
        year.value = '';
    
        // ******  pop up message upon submitting form *****
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 2000);

               // **** remove form with a timer after submitting *****
        setTimeout(() => {
            form.classList.toggle('form__toggle_view');
        }, 2500);
        // ****** after movie is added page re-renders ******
        render();
    };
});


//    ***** render movies  *******
const render = () => {
    movieCard.innerHTML = '';
    movieDataArray.forEach(movie => {
        movieCard.insertAdjacentHTML('beforeend',
        `<div class="movie__each">
        <h2 class="movie__title">${movie[0]}</h2>
        <h3 class="plot">PLOT</h3>
        <p class="plot__description">${movie[1].plot}</p>
        <h3 class="cast">CAST</h3>
        <p class="cast__description">${movie[1].cast.join(', ')}.</p>
        <h3 class="runtime">RUNTIME</h3>
        <p class="runtime__description">${movie[1].runtime} min.</p>
        <h3 class="rating">RATING</h3>
        <p class="rating__description">${movie[1].rating}</p>
        <h3 class="year">YEAR</h3>
        <p class="year__description">${movie[1].year}</p>
        </div>
        <hr>`);
    });
};



//    *****   SORT MOVIES BY NAME  *****
const sortByName = document.querySelector('.sort-by-name__button');
sortByName.addEventListener('click', () => {
    movieDataArray.sort();
    render();
});




//    **** SORT MOVIES BY YEAR ****
const sortByYear = document.querySelector('.sort-by-year__button');

sortByYear.addEventListener('click', () => {
    movieDataArray.sort((a, b) => {
        return b[1]?.year - a[1]?.year;
    });
    render();
});




    //  ***** SORT BY RATING  ******
const sortByRating = document.querySelector('.sort-by-rating__button');

sortByRating.addEventListener('click', () => {
    movieDataArray.sort((a, b) => {
        return b[1]?.rating - a[1]?.rating;
    });
    render();
})



//    *****   DROPDOWN MENU *****
const headerSortButton = document.querySelector('.header__sort');
const menuList = document.querySelector('.menu__toggle_view');

headerSortButton.addEventListener('click', () => {
    menuList.classList.toggle('menu__toggle_view')
});


    // **** DROPDOWN FORM *****
const formTitleButton = document.querySelector('.form__title_button');
formTitleButton.addEventListener('click', () => {
    form.classList.toggle('form__toggle_view');
});


render();
    