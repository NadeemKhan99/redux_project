import { createSlice } from "@reduxjs/toolkit";


// counter reducer
export const counterSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0
    },
    reducers:{
        increment: (state) => {
            state.count++
        },
        decrement: (state) => {
            state.count--
        },
        incrementByValue: (state, action) => {
            state.count += action.payload
        }
    }
});

// multiply slice

export const multiplySlice = createSlice({
    name: "Multiply",
    initialState: {
        multiByFive: 1
    },
    reducers: {
        multiply: (state) => {
            state.multiByFive *= 5
        },
        divide: (state) => {
            state.multiByFive /= 5
        }
    }
})

export const {increment, decrement, incrementByValue} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

export const {multiply, divide} = multiplySlice.actions;
export const multiplyReducer = multiplySlice.reducer;