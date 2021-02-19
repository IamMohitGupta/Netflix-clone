import React,{useState,useEffect} from 'react';
import axios from './axios';
import requests from './request';
import './banner.css';

const base_Url = "http://image.tmdb.org/t/p/original/";

function Banner() {
    const [movie,setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchActionMovies);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    },[]);
    // console.log(movie);

    function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1)+"...":str;
    }

    return (
        <header className="banner"
        style={{
            backgroundSize : "cover",
            backgroundImage:`url(
                "http://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
            backgroundPosition: "center center",
        }
    }
        >
        <div className="banner_contents">
             <h1 className="title">
                 {movie?.title || movie?.name || movie?.original_name}
             </h1>
             <div className="banner_buttons">
                 <button className="banner_button">Play</button>
                 <button className="banner_button">My List</button>
             </div>
             <h1 className="desc">{truncate(movie?.overview,175)}</h1>
        </div>   
        <div className="fade"></div>
        </header>
    )
}

export default Banner