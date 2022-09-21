import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"

export const PokemonApp = () => {

  const dispatch = useDispatch();

  const { isLoading, pokemons = [], page } = useSelector( state => state.pokemons ); // useSelector llama al store.js

  useEffect(() => {

    dispatch( getPokemons() );
  
  }, [])
  
  return (

    <>
        <h1>PokemonApp con Redux ToolKit</h1>
        <hr />
        <span>Cargando: { isLoading ? 'True' : 'False' }</span>

        <ul>
          {/* TODO: mostrar listado de los pokemones en el html 
           pokemons.map() */}

           {
              /* pokemons.map( pokemon => (

                <li key={ pokemon.name }>{ pokemon.name }</li> // {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}

              )) */

              pokemons.map( ( { name } ) => (

                <li key={ name }>{ name }</li> // {name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/'}

              ))
           }
        </ul>

        <button
          // TODO: el boton debe estas desactivado mientras el cargando este en true
          className="btn btn-primary"
          disabled={ isLoading }
          onClick={ () => dispatch( getPokemons( page ) ) }
        >
          Siguiente
        </button>
    </>
  );
}
// mostrar los pokemon paginadamente https://www.udemy.com/course/react-cero-experto/learn/lecture/32220110#questions
