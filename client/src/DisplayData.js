import React from "react";
import {useQuery,gql} from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      id
      name
      age
      username
      nationality
    }
  }
`;

const QUERY_ALL_MOVIES = gql `
    query GetAllMovies{
        movies{
            name
        }
    }
`;

function DisplayData() {

    const { data, loading, refetch } = useQuery(QUERY_ALL_USERS);
    const {data:moviedata} = useQuery(QUERY_ALL_MOVIES);
    
    if (loading) {
      return <h1> DATA IS LOADING...</h1>;
    }
    if(data)console.log(data);
  
    return (
      <div>
        {data && data.users.map((user)=>{
            return(
                <div> 
                    <h1>Name: {user.name}</h1>
                    <h1>Username: {user.username}</h1>
                    <h1>Age: {user.age}</h1>
                    <h1>Nationality: {user.nationality}</h1>
                </div>

            );
        })}

        {moviedata && moviedata.movies.map((e)=>{
            return(
                <div> 
                    <h1>Name: {e.name}</h1>
                    
                </div>

            );
        })}

      </div>
    );
  }

export default DisplayData;