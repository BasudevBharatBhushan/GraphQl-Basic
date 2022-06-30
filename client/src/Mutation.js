import React,{useState} from "react";
import {useMutation, gql} from "@apollo/client";
import DisplayData from "./DisplayData";

const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateUserInput!){
        createUser(input:$input){
            name
            id
        }
    }
`;

function Mutation(){

    //Create User States
    const [name , setName] = useState("");
    const [username , setUsername] = useState("");
    const [age , setAge] = useState(0);
    const [nationality , setNationality] = useState("");

    const [createUser] = useMutation(CREATE_USER_MUTATION);

    return (
        <div>
            <div>
                <input type= "text" placeholder="Name" onChange={(event)=>{setName(event.target.value)}}/>
                <input type= "text" placeholder="Username" onChange={(event)=>{setUsername(event.target.value)}}/>
                <input type= "number" placeholder="Age" onChange={(event)=>{setAge(event.target.value)}}/>
                <input type= "text" placeholder="Nationality" onChange={(event)=>{setNationality(event.target.value.toUpperCase())}}/>
                <button 
                    onClick={()=>{
                        createUser({
                            variables:{
                                input:{
                                    name:name,
                                    username:username,
                                    age:Number(age),
                                    nationality:nationality
                                }
                            }
                        }
                        // refetch();
                    )}
                    }>Create User</button>
            </div>
        </div>
        
    )
}

export default Mutation;