import {createSlice} from "@reduxjs/toolkit"
import { reset } from "../actions"

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0
    },
    reducers: {
        changeName(state, action){
            state.name = action.payload
        },
        changeCost(state, action){
            state.cost = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(reset, (state, action)=>{
            return {
                name: '',
                cost: 0
            }
        })
    }
})

export const {changeCost, changeName} = formSlice.actions
export const formReducer = formSlice.reducer