import { useState } from "react"
import Population from "../components/Population"
import "../css/city.css"
import searchAPI from "../services/searchAPI"
import CityForm from "../components/CityForm"

const getPopulation = (name) => {
    return searchAPI(name, false)
}
const City = () => {
    const [ infoShow, setInfoShow] = useState(false)
    const [ city, setCity ] = useState([])
    const toggleInfo = () => {
        setInfoShow(!infoShow)
    }
    
    const onSubmit = (data) => {
        getPopulation(data.city).then(result => {
            var data = result.sort(function(a, b){return b.population - a.population}).slice(0,1)
            console.log(data)
            setCity(data[0])
        })
        toggleInfo()
    }

    return (
    <div className="city-container">
        <h1>City</h1>
        {infoShow ? 
        <div className="info">
            <button onClick={toggleInfo}>Back to search</button>
            <ul>
                <Population city={city}></Population>
            </ul>               

        </div>
        :
        <div className="search">
            <CityForm onSubmit={onSubmit}></CityForm>
        </div>
        }
    </div>
    )
}
export default City