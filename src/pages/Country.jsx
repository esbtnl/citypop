import "../css/country.css"
import CountrySelector from "../components/CountrySelector"
import Population from "../components/Population"
import { useState } from "react"
import searchAPI from "../services/searchAPI"


const getCitys  = (country) => {
    return searchAPI(country, true)
}

const Country = () => {
    const [ infoShow, setInfoShow ] = useState(false)
    const [ search, setSearch ] = useState("")
    const [ cityList, setCityList ] = useState([])
    const handleSearch = (country) => {
        setSearch(country)
        getCitys(country).then(result => {
            setCityList(result.sort(function(a, b){return b.population - a.population}).slice(0,3))
        })
    }
    const toggleInfo = () => {
        setInfoShow(!infoShow)
    }

    return (
    <div className="country-container">
        <h1>Country</h1>
        {infoShow ? 
            <div className="info">
                <button onClick={toggleInfo}>Back to search</button>
                <h1>{search.label}</h1>
                <ul>{cityList.map(city => <li key={city.id}><button>{city.name}</button></li>)}</ul>               
            </div>
            :
            <div className="search">
                <CountrySelector handleSearch={handleSearch} toggleInfo={toggleInfo}></CountrySelector>
            </div>
        
        }
    </div>
    )
}
export default Country