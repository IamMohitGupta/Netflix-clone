import React,{useState,useEffect} from 'react';
import axios from './axios';
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_Url = "http://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(()=> {
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData();
    },[fetchUrl]);

    const opts={
        height:"390",
        width:"100%",
        playervars:{
            autoplay:1,
        },
    };

    const handleclick = (movie) =>{
        if(trailerUrl){
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.name || "")
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
    };

    return (
        <div className = "row">
            <h2>{title}</h2>

            <div className="row_posters">
                {
                    movies.map(movie => (
                        <img 
                        key={movie.id}
                        onClick={()=> handleclick(movie)}
                        className={`row_poster ${isLargeRow && "row_large"}`} 
                        src={`${base_Url}${movie.poster_path}`} 
                        alt={movie.name}>
                        </img>
                    ))
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

export default Row;