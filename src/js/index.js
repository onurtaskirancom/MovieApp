// api : a6730432ddfd8926e4cf3d396ae5b3c0
// url : https://api.themoviedb.org/3
// https://api.themoviedb.org/3/search/movie?api_key=a6730432ddfd8926e4cf3d396ae5b3c0&language=en-US&query=abc&page=1&include_adult=false


import Search from './models/Search';
import {elements} from './base';
import * as searchView from './views/searchView';
import * as movieView from './views/movieView';
import { Movie } from './models/Movie';



const state = {};

//search controller

const searchController = async () => {
    const keyword = elements.searchInput.value;

    if (keyword) {
        state.search = new Search(keyword);

        await state.search.getResults();

        searchView.clearInput();
        searchView.clearResults();

        searchView.displayResults(keyword, state.search.data);

    }else {
        alert('You must enter a keyword');
    }
}

elements.searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    searchController();
    console.log("form submitted");
});


// movie controller

const movieController = async () => {
    const id = window.location.hash.replace('#', '');
    if(id) {
        state.movie = new Movie(id);

        await state.movie.getMovie();

        movieView.displayMovie(state.movie.data);
        movieView.backToTop();
    }
};

window.addEventListener('hashchange', movieController);
elements.movieDetailsClose.addEventListener('click', movieView.closeDetails);