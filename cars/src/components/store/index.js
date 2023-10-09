import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, changeSearchTerm, addCar, deleteCar } from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/formSlice";


const store = configureStore({
    reducer:{
        forms: formReducer,
        cars:  carsReducer
    }
})


export {store, changeSearchTerm, changeCost, changeName, addCar, deleteCar}