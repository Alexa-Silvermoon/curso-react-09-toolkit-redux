import axios from "axios";

export const pokemonApi = axios.create({

    baseURL: 'https://pokeapi.co/api/v2'

});

// axios https://www.udemy.com/course/react-cero-experto/learn/lecture/32220084#questions
