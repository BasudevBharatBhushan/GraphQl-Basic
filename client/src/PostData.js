import React,{useState}  from "react";
import {useLazyQuery, gql} from "@apollo/client";

const GET_MOVIE_BY_NAME = gql`
    query Movie($name:String!){
        movie(name:$name){
            name
            yearOfPublication
        }
    }
`;


function PostData(){
    const [movieSearched, setMovieSearched] = useState("");
    
    const [fetchMovie, {data:MovieSearchData , error:MovieError}]= useLazyQuery(GET_MOVIE_BY_NAME);

    if(MovieError)console.log(MovieError);

    return (
        <div>
            <input 
            type="text" 
            placeholder="Intersteller..." 
            onChange={(event)=>{
                setMovieSearched(event.target.value);
                }}
            />
            <button 
                onClick={()=>{
                    fetchMovie({
                        variables:{
                            name:movieSearched
                        },
                    });
                }}
            >
                Fetch Data
            </button>
            <div>
                {MovieSearchData && (
                    <div>
                        <h1>MovieName: {MovieSearchData.movie.name}</h1>
                        <h1>Year Of Release : {MovieSearchData.movie.yearOfPublication}</h1>
                        {" "}
                    </div>
                )}
                {MovieError && <h1> There was an error fetching the data</h1> }
            </div>
        </div>
    );
}

export default PostData;