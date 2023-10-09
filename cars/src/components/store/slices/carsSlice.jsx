import { createSlice, nanoid } from "@reduxjs/toolkit"
export {createSlice} from "@reduxjs/toolkit"

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        carList: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload
        },
        addCar(state, action){
            state.carList.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        deleteCar(state, action){
            const updated = state.carList.filter((car)=>{
                return car.id !== action.payload
            })
            state.carList = updated
        }
    }
})

export const {changeSearchTerm, addCar, deleteCar} = carsSlice.actions
export const carsReducer = carsSlice.reducer