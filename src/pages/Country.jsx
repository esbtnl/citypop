import "../css/country.css"
import CountrySelector from "../components/CountrySelector"
import Population from "../components/Population"
import { useState } from "react"
import searchAPI from "../services/searchAPI"


const getCitys  = (country) => {
    return searchAPI(country, true)
}

const Country = () => {
    const [ cityShow, setCityShow ] = useState(false)
    const [ populationShow, setPopulationShow ] = useState(false)

    const [ search, setSearch ] = useState("")
    const [ cityList, setCityList ] = useState([])
    const [ city, setCity ] = useState([])

    const handleSearch = (country) => {
        setSearch(country)
        getCitys(country).then(result => {
            setCityList(result.sort(function(a, b){return b.population - a.population}).slice(0,3))
        })
    }
    const handleSelect = (city) => {
        setCity(city)
        console.log(city)
        togglePopulation()
    }
    const toggleCitys = () => {
        setCityShow(!cityShow)
    }

    const togglePopulation = () => {
        setPopulationShow(!populationShow)
    }
    return (
    <div className="country-container">
        <h1>Country</h1>
        {cityShow ? 

            (populationShow ?
            <div className="population">
                <button onClick={togglePopulation}>Back to citys</button>
                <Population city={city}></Population>
            </div>
            :
            <div className="info">
                <button onClick={toggleCitys}>Back to search</button>
                <h1>{search.label}</h1>
                <ul>{cityList.map(city => <li key={city.id}><button onClick={() => handleSelect(city)}>{city.name}</button></li>)}</ul>               
            </div>)
            :
            <div className="search">
                <CountrySelector handleSearch={handleSearch} toggleInfo={toggleCitys}></CountrySelector>
            </div>
        
        }
    </div>
    )
}
export default Country