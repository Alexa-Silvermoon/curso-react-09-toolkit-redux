import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { todosApi } from './apis';
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({

  reducer: {

    counter: counterSlice.reducer,

    pokemons: pokemonSlice.reducer, // lo trae desde pokemonSlice.js

    [ todosApi.reducerPath ]: todosApi.reducer

  },

  middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( todosApi.middleware )

});

// Configurar store y slices https://www.udemy.com/course/react-cero-experto/learn/lecture/32219342#questions
// usar valores del store y el dispatch https://www.udemy.com/course/react-cero-experto/learn/lecture/32219464#questions
// pokemonSlice https://www.udemy.com/course/react-cero-experto/learn/lecture/32219820#questions/18075510
// obtener un todo por id https://www.udemy.com/course/react-cero-experto/learn/lecture/32220308?start=15#questions
