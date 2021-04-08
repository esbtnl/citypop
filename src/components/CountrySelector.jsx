import { useMemo } from "react"
import countryList from "react-select-country-list"
import Select from "react-select"
import "../css/countrySelector.css"
import { FaSearch } from "react-icons/fa";


export default function CountrySelector(props) {
    const { handleSearch, toggleInfo } = props
    const options = useMemo(() => countryList().getData(), [])
    
    return (
        <div className="select-container">
            <Select options={options} onChange={handleSearch} id="select"></Select>
            <button type="submit" id="searchBtn" onClick={toggleInfo}><FaSearch id="search " size={42}/></button>
        </div>
        )
}
