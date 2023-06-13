import React, { useEffect } from 'react'
import { useState } from 'react';

const MovieDisplayComponent = () => 
{
    const [movies, setMovies] = useState([]);
    
    const [filter, setFilter] = useState("");
    
    const filterHandler = (event) => {
        setFilter(()=>event.target.value);
        // console.log(filter);
    };

    useEffect(() => {
        fetchFilteredMovies();
    }, [filter]);

    const fetchFilteredMovies = async () => {
        fetch('http://localhost:3500/api/v1/movie',
        {
            method:'POST',
            crossDomain : true,
            headers : {
                'Content-type' : 'application/json',
                'Access-Control-Allow-Origin' : "*"
            },
            body : JSON.stringify({
                filter : filter
            })
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
    }

  const fetchMovies = async () => {

    try{
      const response = await fetch("http://localhost:3500/api/v1/movie");
      response.json().then((data) => {
        //   console.log(data);
        setMovies(data);
      });

    }
    catch(err)
    {
      console.log(err);
    }

  }

  useEffect(()=>{
    //   console.log(filter);
    fetchMovies();
  },[movies]);

  return (

    <React.Fragment>

          <div className='mb-3'>
              <label className='mx-3'>Select Genre </label>
              <select value={filter} onChange={filterHandler}>
                <option name="action" value="action">Action</option>
                <option name="thriller" value="thriller">Thriller</option>
                <option name="sports" value="sports">Sports</option>
              </select>
          </div>

        <div className='container'>
        {
            movies?.map((movie) => (
            <div key={movie._id} className="movie">
                <p>Movie Name: {movie.movieName}</p>
                <p>Movie year: {movie.movieYear}</p>
                <p>Movie Genre: {movie.movieGenre}</p>
                <p>Imdb Rating: {movie.imdbRating}</p>
            </div>
            ))
        }

        </div>

    </React.Fragment>

  )
}

export default MovieDisplayComponent