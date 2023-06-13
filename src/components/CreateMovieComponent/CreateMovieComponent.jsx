import React from 'react'
import { useState } from 'react'

const CreateMovieComponent = () => {

    const [data, setData] = useState({
        movieName : "",
        movieYear : "",
        // movieGenre : "",
        imdbRating : ""
    })

    const [movieGenre, setGenre] = useState("");
    const genreHandler = (event) => {
        setGenre(()=>event.target.value);
        // console.log(filter);
        console.log(movieGenre);
    };

    const clickHandler = (e) =>{
        setData((prev)=>(
            {
                ...prev, 
                [e.target.name] : e.target.value
            }
        ));
    }

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(data);

        fetch('http://localhost:3500/api/v1/admin/new',
        {
            method:'POST',
            crossDomain : true,
            headers : {
                'Content-type' : 'application/json',
                'Access-Control-Allow-Origin' : "*"
            },
            body : JSON.stringify({
                movieName : data.movieName,
                movieYear :  data.movieYear,
                movieGenre : movieGenre,
                imdbRating :  data.imdbRating
            })
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })

        setData({
            movieName : "",
            movieYear : "",
            movieGenre : "",
            imdbRating : ""
        })

    }

  return (
    <React.Fragment>
        
        <form onSubmit={submitHandler}>
          <h3>Add A New Movie</h3>

          <div className='mb-3'>
              <label>Movie Name</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter the Movie Name'
                value = {data.movieName}
                onChange={clickHandler}
                name = 'movieName'
                required
              />
          </div>

          <div className='mb-3'>
              <label>Movie Year</label>
              <input
                type='number'
                className='form-control'
                placeholder='Enter the released year of the movie'
                value = {data.movieYear}
                onChange = {clickHandler} 
                name = 'movieYear'
                required
              />
          </div>

          <div className='mb-3'>
              <label>Genre</label>
              {/* <input
                type='text'
                className='form-control'
                placeholder='Enter the genre of the movie'
                value = {data.movieGenre}
                onChange={clickHandler}
                name = 'movieGenre'
                required
              /> */}
              <select value={movieGenre} className='form-control' onChange={genreHandler}>
                <option name="action" value="Action">Action</option>
                <option name="thriller" value="Thriller">Thriller</option>
                <option name="scifi" value="SciFi">SciFi</option>
              </select>
          </div>

          <div className='mb-3'>
              <label>IMDB Rating</label>
              <input
                type='text'
                className='form-control'
                placeholder='Enter IMDB rating out of 10'
                value = {data.imdbRating}
                onChange={clickHandler}
                name = 'imdbRating'
                required
              />
          </div>

          <div className='d-grid'>
              <button type='submit' className='btn btn-success'> Add The movie </button>
          </div>
        
      </form>

    </React.Fragment>
  )
}

export default CreateMovieComponent