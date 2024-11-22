import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        enableGptSearch: false,
        gptMovieResults:null
    },
    reducers:{
        setGptSearch(state){
           state.enableGptSearch = !state.enableGptSearch;
        },
        addGptMovieResults(state,action){
           state.gptMovieResults = action.payload
        }
    }
})

export const {setGptSearch ,addGptMovieResults} = gptSlice.actions;

export default gptSlice.reducer;