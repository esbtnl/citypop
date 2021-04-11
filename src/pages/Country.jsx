import "../css/country.css"
import React, { useState } from "react"
import searchAPI from "../services/searchAPI"
import CountrySelector from "../components/CountrySelector"
import Population from "../components/Population"



function Country () {
    const [ cityShow, setCityShow ] = useState(false)
    const [ populationShow, setPopulationShow ] = useState(false)

    const [ search, setSearch ] = useState("")
    const [ cityList, setCityList ] = useState([])
    const [ city, setCity ] = useState([])
    
    const getCitys  = (country) => {
        return searchAPI(country, true)
    }
    const handleSearch = (country) => {
        setSearch(country)
        getCitys(country).then(result => {
            setCityList(result.sort(function(a, b){return b.population - a.population}).slice(0,3))
        })
    }
    const handleSelect = (city) => {
        setCity(city)
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
        {cityShow ? 
            (populationShow ?
            <div className="info">
                <Population city={city} toggleInfo={togglePopulation}></Population>
            </div>
            :
            <div className="info-container">
                <div className="info">
                    <button 
                        onClick={toggleCitys} 
                        className="backBtn">
                            Back to search
                    </button>
                    <h1>{search.label}</h1>
                    <ul>{cityList.map(city => 
                        <li key={city.id}>
                            <button 
                                onClick={() => handleSelect(city)} 
                                className="countryBtn">{city.name}
                            </button>
                        </li>)}
                    </ul>               
                </div>
            </div>
            )
            :
            <div className="search">
                <CountrySelector 
                    handleSearch={handleSearch} 
                    toggleInfo={toggleCitys}/>
            </div>
        }
    </div>
    )
}
export default Country