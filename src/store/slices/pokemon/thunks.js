import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = ( page = 0 ) => {

    return async( dispatch, getState ) => {

        dispatch( startLoadingPokemons() ); // pokemonSlice.js

        //TODO: realizar peticion http

        // forma clasica con fetch
       /*  const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }` );
        const data = await resp.json();
        console.log( data ); // results, asi es como viene desde la API */

        // forma con axios
        const { data } = await pokemonApi.get( `/pokemon?limit=10&offset=${ page * 10 }` );
        // console.log( data );
        // console.log( data.results );

        dispatch( setPokemons( { pokemons: data.results, page: page + 1 } ) ); // conecta con pokemonSlice.js

    }
}

// https://www.udemy.com/course/react-cero-experto/learn/lecture/32220028?start=15#questions
// https://pokeapi.co/
// axios https://www.udemy.com/course/react-cero-experto/learn/lecture/32220084#questions
// mostrar los pokemon paginadamente https://www.udemy.com/course/react-cero-experto/learn/lecture/32220110#questions
