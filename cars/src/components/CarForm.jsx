import { useDispatch, useSelector } from "react-redux"
import { changeName, changeCost, addCar } from "./store"
import "./css/CarForm.css"
import { reset } from "./store/actions"


export default function CarForm(){
    const dispatch = useDispatch()

    const {name, cost} = useSelector((state)=>{
       return {
        name: state.forms.name,
        cost: state.forms.cost
       }
    })

    function handleNameChange(e){
        dispatch(changeName(e.target.value))
    }
    function handleCostChange(e){
        const carCost = parseInt(e.target.value) || 0
        dispatch(changeCost(e.target.value))
    }
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(addCar({name, cost}))
        dispatch(reset())
    }


    return(
        <div className="form-div">
            <h2 className="add-car">Add Car</h2>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="name-input">
                        <label className="name-cost">Name</label><br/>
                        <input className="actual-input" type="text" value={name} onChange={handleNameChange}/>
                    </div>
                    <div className="cost-input">
                        <label className="name-cost">Cost</label><br/>
                        <input className="actual-input" type="number" value={cost || ''} onChange={handleCostChange}/>
                    </div>  
                    <div className="btn">
                        <button className="btn-submit">Submit</button>
                    </div> 
                </div>
            </form>
        </div>
    )
}