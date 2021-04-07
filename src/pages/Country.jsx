import "../css/country.css"
import CountrySelector from "../components/CountrySelector"
import Population from "../components/Population"
import { useState } from "react"

const Country = () => {
    const [ infoShow, setInfoShow ] = useState(false)
    const [ search, setSearch ] = useState([])
    const handleSearch = (country) => {
        setSearch(country)
    }
    const toggleInfo = () => {
        setInfoShow(!infoShow)
    }

    return (
    <div className="home-container">
        <h1>Country</h1>
        {infoShow ? 
            <div className="info">
                <button onClick={toggleInfo}>Back to search</button>
                <Population search={search}></Population>                
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