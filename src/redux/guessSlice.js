import { createSlice, current } from "@reduxjs/toolkit";
import {valid} from '../assets/wordList.json'
const initialState={
    guesses:['','','','','',''],
    currentguess:'',
    currentguessarray:['','','','','',''],
    guesscount:0,
    word:valid[Math.floor(Math.random() * 2316) ].toUpperCase()
}

export const guessSlice=createSlice({
    name:'guess',
    initialState,
    reducers:{
        addGuess:(state,action)=>{
            const { index, guess } = action.payload;
            state.guesses = [
              ...state.guesses.slice(0, index),
              guess,
              ...state.guesses.slice(index + 1),
            ];
        },
    addCurrentGuess:(state,action)=>{
        state.currentguess=action.payload
    },
    addCurrentGuessArray:(state,action)=>{
        const { index, guess } = action.payload;
            state.currentguessarray= [
              ...state.currentguessarray.slice(0, index),
              guess,
              ...state.currentguessarray.slice(index + 1),
            ];
        },
    incrementcounter:(state,action)=>{
        state.guesscount=action.payload;
    },
    invalidWord:(state,action)=>{
        state.currentguessarray= [
            ...state.currentguessarray.slice(0, action.payload),
            '',
            ...state.currentguessarray.slice(action.payload + 1),
          ];
        state.currentguess=''
        //state.guesscount--;
    },
    resetgame:(state)=>{
        state.guesses=['','','','','',''],
        state.currentguessarray=['','','','','',''],
        state.currentguess='',
        state.guesscount=0,
        state.word=valid[Math.floor(Math.random() * 2316) ].toUpperCase()
    }
    }
})

export const {addGuess,addCurrentGuessArray,addCurrentGuess,incrementcounter,resetgame,invalidWord} = guessSlice.actions;
export default guessSlice.reducer;