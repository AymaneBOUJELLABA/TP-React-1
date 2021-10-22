import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

export const counterSlice = createSlice({

    name : "counter",
    initialState,

    reducers : {

        incrementCounter : (state) => {
            state.value+=1;
        },

        decrementCounter : (state) => {
            state.value-=1;
        }
    }

})

export const selectValue = (state) => state.counter.value;

export const { incrementCounter, decrementCounter } = counterSlice.actions;

export default counterSlice.reducer;