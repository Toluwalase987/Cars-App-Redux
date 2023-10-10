import { createSlice, nanoid } from "@reduxjs/toolkit"
export {createSlice} from "@reduxjs/toolkit"



const loadCarListFromLocalStorage = () => {
    try {
      const carListJSON = localStorage.getItem("carList");
      return carListJSON ? JSON.parse(carListJSON) : [];
    } catch (error) {
      console.error("Error loading car list from localStorage:", error);
      return [];
    }
  };

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        carList: loadCarListFromLocalStorage(),
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload
        },
        addCar(state, action){
            const newCar = {
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
              };
              state.carList.push(newCar);
              // Persist the updated car list to localStorage
              localStorage.setItem("carList", JSON.stringify(state.carList));
        
        },
        deleteCar(state, action){
            const updated = state.carList.filter((car) => {
                return car.id !== action.payload;
              });
              state.carList = updated;
              // Persist the updated car list to localStorage
              localStorage.setItem("carList", JSON.stringify(updated));
        }
    }
})

export const {changeSearchTerm, addCar, deleteCar} = carsSlice.actions
export const carsReducer = carsSlice.reducer