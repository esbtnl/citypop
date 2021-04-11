import "../css/city.css"
import { useState } from "react"
import searchAPI from "../services/searchAPI"
import Population from "../components/Population"
import CityForm from "../components/CityForm"

/**
 * Page component dedicated for searching for a city
 */
function City() {
    const [ infoShow, setInfoShow] = useState(false)
    const [ city, setCity ] = useState({name: "", population: ""})

    /**
     * Function deciding to show population for a city
     */
    const toggleInfo = () => {
        setInfoShow(!infoShow)
    }
    /**
     * Function calling the API getting an array of citys
     */
    const getCitys = (name) => {
        return searchAPI(name, false)
    }
    const onSubmit = (data) => {
        getCitys(data.city).then(result => {
            console.log(result)
            //Sorting the array by population
            var data = result.sort(function(a, b){return b.population - a.population})
            // Assigning the city with biggest population
            var city = data.slice(0,1)
            data.length === 0 ? setCity({name: "City exploded", population: "0"}) : setCity(city[0])
        })
        toggleInfo()
    }

    return (
    <div className="city-container">
        {infoShow ? 
        <div className="info">
            <Population city={city} toggleInfo={toggleInfo}></Population>
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