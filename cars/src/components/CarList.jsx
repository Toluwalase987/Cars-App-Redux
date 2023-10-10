import { useSelector, useDispatch } from "react-redux"
import "./css/CarList.css"
import { deleteCar } from "./store"

export default function CarList(){
    const dispatch = useDispatch()
    const cars = useSelector(({cars: {carList, searchTerm}})=>{
        return carList.filter((car)=>{
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
    })

    function handleDelete(car){
        return dispatch(deleteCar(car.id)) 
    }
    

    const renderedCars = cars.map((car)=>{
        return <div className="car-display" key={car.id}>
                   <p>{car.name} - ${car.cost}</p>
                   <button onClick={()=>{handleDelete(car)}}>Delete</button>
                   
                </div>
    })
    return(
        <div className="car-list">
            {renderedCars}
            <hr/>
        </div>
    )
}