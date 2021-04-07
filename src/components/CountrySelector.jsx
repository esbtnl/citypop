import { useMemo } from "react"
import countryList from "react-select-country-list"
import Select from "react-select"


const CountrySelector = (props) => {
    const { handleSearch, toggleInfo } = props
    const options = useMemo(() => countryList().getData(), [])
    
    return (
        <div>
            <Select options={options} onChange={handleSearch}></Select>
            <button onClick={toggleInfo}>Search</button>
        </div>
        )
}
export default CountrySelector