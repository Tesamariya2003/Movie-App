import React, { useState } from 'react'
import MovieNavbar from './MovieNavbar'

const ViewAllMovies = () => {
    const[movieData,changeMovieData]=useState(
        [
            {"moviename":"Asssasin","description":"MalayalamMovie","poster":"https://compote.slate.com/images/77440fdf-a599-4fd1-90fc-cc619aa7419d.jpg?crop=590%2C885%2Cx0%2Cy0"},
            {"moviename":"Alien","description":"MalayalamMovie","poster":"https://creativereview.imgix.net/content/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&q=60&w=729&h=1080"},
            {"moviename":"Kalki","description":"MalayalamMovie","poster":"https://i.pinimg.com/originals/64/15/cb/6415cb69f4651186cd0d6e55037da48f.jpg"},
            {"moviename":"Bahubali","description":"MalayalamMovie","poster":"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"},
            {"moviename":"Bahubali","description":"MalayalamMovie","poster":"https://media.designrush.com/tinymce_images/205878/conversions/2.-Wendy-content.jpg"},
            {"moviename":"Bahubali","description":"MalayalamMovie","poster":"https://media.designrush.com/tinymce_images/205878/conversions/2.-Wendy-content.jpg"},
            {"moviename":"Bahubali","description":"MalayalamMovie","poster":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQudt5t_EZf55GHHTHhDogYg1HvLhU3-3Y6bQ&s"},
            {"moviename":"Bahubali","description":"MalayalamMovie","poster":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaIFN9MXnbHCmIy_EbV-cuFJQnK1hWV4Tqtg&s"},
            {"moviename":"Titanic","description":"MalayalamMovie","poster":"https://creativereview.imgix.net/content/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&q=60&w=729&h=1080"},
            {"moviename":"Ram","description":"MalayalamMovie","poster":"https://i.pinimg.com/originals/64/15/cb/6415cb69f4651186cd0d6e55037da48f.jpg"},
            {"moviename":"Bahubali","description":"MalayalamMovie","poster":"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"},
            {"moviename":"Bahubali","description":"MalayalamMovie","poster":"https://media.designrush.com/tinymce_images/205878/conversions/2.-Wendy-content.jpg"},
            {"moviename":"Bahubali","description":"MalayalamMovie","poster":"https://media.designrush.com/tinymce_images/205878/conversions/2.-Wendy-content.jpg"},
            {"moviename":"Bahubali","description":"MalayalamMovie","poster":"https://compote.slate.com/images/77440fdf-a599-4fd1-90fc-cc619aa7419d.jpg?crop=590%2C885%2Cx0%2Cy0"},
            {"moviename":"Titanic","description":"MalayalamMovie","poster":"https://creativereview.imgix.net/content/uploads/2024/12/AlienRomulus-scaled.jpg?auto=compress,format&q=60&w=729&h=1080"},
            {"moviename":"Ram","description":"MalayalamMovie","poster":"https://i.pinimg.com/originals/64/15/cb/6415cb69f4651186cd0d6e55037da48f.jpg"},
            {"moviename":"Bahubali","description":"MalayalamMovie","poster":"https://www.indiewire.com/wp-content/uploads/2019/12/nightingale-1.jpeg?w=675"},
            {"moviename":"Bahubali","description":"MalayalamMovie","poster":"https://media.designrush.com/tinymce_images/205878/conversions/2.-Wendy-content.jpg"},
            {"moviename":"Bahubali","description":"MalayalamMovie","poster":"https://media.designrush.com/tinymce_images/205878/conversions/2.-Wendy-content.jpg"},

        ]
    )

    return (
        <div>
            <MovieNavbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            
                          {movieData.map(
                            (value,index) =>{
                              return (
                              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card">
                                    <img src={value.poster} class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">{value.moviename}</h5>
                                            <p class="card-text">{value.description}</p>
                                        </div>
                                </div>
                            </div>)}
                          )}
                         
                           
                          
                            
                          
                            
                       
                           
                      
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAllMovies