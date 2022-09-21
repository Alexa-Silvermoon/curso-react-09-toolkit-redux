import { createSlice } from '@reduxjs/toolkit'

/* const initialState = {
  value: 0,
} */

export const counterSlice = createSlice({

  name: 'counter',

  initialState: {

    counter: 10

  },

  reducers: {

    increment: ( state ) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },

    decrement: ( state ) => {

      state.counter -= 1;
    },

    incrementByTwo: ( state, action ) => {

      state.counter += action.payload;
    }
    /* decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }, */
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByTwo } = counterSlice.actions
// Configurar store y slices https://www.udemy.com/course/react-cero-experto/learn/lecture/32219342#questions
// usar valores del store y el dispatch https://www.udemy.com/course/react-cero-experto/learn/lecture/32219464#questions
// ejemplos https://redux-toolkit.js.org/tutorials/quick-start
// decrement e increment https://www.udemy.com/course/react-cero-experto/learn/lecture/32219508?start=15#questions
