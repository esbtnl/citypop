import "../css/countrySelector.css"
import { useMemo } from "react"
import { FaSearch } from "react-icons/fa";
import countryList from "react-select-country-list"
import Select from "react-select"

/**
 * Component creating a form for selecting a country
 */
export default function CountrySelector({ handleSearch, toggleInfo }) {
    const options = useMemo(() => countryList().getData(), [])
    
    return (
        <div className="select-container">
            <Select options={options} onChange={handleSearch} id="select"></Select>
            <button type="submit" id="searchBtn" onClick={toggleInfo}><FaSearch id="search " size={42}/></button>
        </div>
        )
}
