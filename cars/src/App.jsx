import CarForm from "./components/CarForm"
import CarSearch from "./components/CarSearch"
import CarList from "./components/CarList"
import CarValue from "./components/CarValue"


export default function App(){
  return(
    <div className="baba">
      <CarForm/>
      <CarSearch/>
      <CarList/>
      <CarValue/>
    </div>
  )
}