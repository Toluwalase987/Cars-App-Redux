import { useSelector } from "react-redux"
import "./css/CarValue.css"

export default function CarValue(){
    const totalCost = useSelector(({cars: {carList, searchTerm}})=>{
        const filteredCars = carList.filter((car)=>{
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        })
        let cost = 0
        for (let car of filteredCars){
            cost += parseInt(car.cost)
        }
        return cost;
    })
    return(
        <div className="car-value">
            <p className="total-cost">Total Cost: ${totalCost}</p>
        </div>
    )
}