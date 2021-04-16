// api : a6730432ddfd8926e4cf3d396ae5b3c0
// url : https://api.themoviedb.org/3
// https://api.themoviedb.org/3/search/movie?api_key=a6730432ddfd8926e4cf3d396ae5b3c0&language=en-US&query=abc&page=1&include_adult=false

async function getResults(keyword) {
    const api_key = "a6730432ddfd8926e4cf3d396ae5b3c0";
    const base_url = "https://api.themoviedb.org/3"

    const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${keyword}`);
    const data = await response.json();
    console.log(data.results);
}

getResults('abc');