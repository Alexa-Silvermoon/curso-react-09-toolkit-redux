import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({

    name: 'pokemon',
    initialState: {

        page: 0,
        pokemons: [],
        isLoading: false

    },

    reducers: {

        startLoadingPokemons: (state, /* action */ ) => { // thunks.js

            state.isLoading = true;

        },

        setPokemons: ( state, action ) => { // conecta con thunks.js

            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;

        }

    }
});

// Action creators are generated for each case reducer function
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;

// pokemonSlice https://www.udemy.com/course/react-cero-experto/learn/lecture/32219820#questions/18075510
// axios https://www.udemy.com/course/react-cero-experto/learn/lecture/32220084#questions
// mostrar los pokemon paginadamente https://www.udemy.com/course/react-cero-experto/learn/lecture/32220110#questions
