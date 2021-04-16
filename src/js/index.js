// api : a6730432ddfd8926e4cf3d396ae5b3c0
// url : https://api.themoviedb.org/3
// https://api.themoviedb.org/3/search/movie?api_key=a6730432ddfd8926e4cf3d396ae5b3c0&language=en-US&query=abc&page=1&include_adult=false


import Search from './models/Search';

const state = {};

const searchController = async () => {
    const keyword = document.getElementById('txt-keyword').value;

    if (keyword) {
        state.search = new Search(keyword);

        await state.search.getResults();

        console.log(state.search.data);

    }else {
        alert('You must enter a keyword');
    }
}

document.getElementById('form-search').addEventListener('submit', function(e) {
    e.preventDefault();
    searchController();
    console.log("form submitted");
})