import axios from "axios";
import endpoint from "./endpoint";

export const getAllMovies=async()=>{

    try {
        const {data}=await axios.get(endpoint.getAllMovies);
        return data.results
        
    } catch (error) {
        console.error(error);
        return []
    }
}

export const getMovie=async(idMovie)=>{

    try {
        const {data}=await axios.get(endpoint.getMovie(idMovie));
        return data
        
    } catch (error) {
        console.error(error);
        return null
    }
}