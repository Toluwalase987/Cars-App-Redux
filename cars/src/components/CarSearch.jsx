import { useDispatch, useSelector } from "react-redux"
import {changeSearchTerm} from "./store"
import "./css/CarSearch.css"

export default function CarSearch(){
    const dispatch = useDispatch()

    const searchTerm = useSelector((state, action)=>{
        return state.cars.SearchTerm
    })

    function handleSearchTerm(e){
        dispatch(changeSearchTerm(e.target.value))
        }

    return(
        <div className="searchTerm">
            <h3 className="my-cars">My Cars</h3>
            <div>
                <label className="label">Search</label>
                <input className="input" type="text" value={searchTerm} onChange={handleSearchTerm}/>
            </div>
        </div>
    )
}