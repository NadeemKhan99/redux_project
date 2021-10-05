import { configureStore } from "@reduxjs/toolkit";
import {counterReducer} from './counterslice';
import {multiplyReducer} from './counterslice';


export const store = configureStore({
    reducer : {
        counter: counterReducer,
        multiplyer: multiplyReducer,
    }
});