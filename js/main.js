$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
    // Make a request to the URL 
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=fa155f635119344d33fcb84fb807649b&query='+searchText)
    .then(function (response) {
        var movies = response.data.results;
        console.log(movies);
        var output = '';
        $.each(movies, function(index, movie){
            output += '<div class="col-md-3">';
            output +=   '<div class="well text-center">';
            output +=       '<img src="http://image.tmdb.org/t/p/w185/'+movie.poster_path+'">';
            output +=       '<h5>'+ movie.title+'</h5>';
            output +=       '<a onclick=movieSelected("'+movie.id+' class="btn btn-primary" href="#")>Movie Details</a>';
            output +=   '</div>';
            output += '</div>';
        });

        $('#movies').html(output);

    })
    .catch(function (error) {
        console.log(error);
        console.log('something is going wrong');
    });
}