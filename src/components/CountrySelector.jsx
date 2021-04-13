import '../css/countrySelector.css'
import { useMemo } from 'react'
import { FaSearch } from 'react-icons/fa'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import PropTypes from 'prop-types'

/**
 * Component creating a form for selecting a country
 */
export const CountrySelector = ({ handleSearch, toggleInfo }) => {
  const options = useMemo(() => countryList().getData(), [])

  return (
    <div className="select-container">
      <Select options={options} onChange={handleSearch} id="select" />
      <button type="submit" id="searchBtn" onClick={toggleInfo}>
        <FaSearch className="searchIcon" />
      </button>
    </div>
  )
}

CountrySelector.propTypes = {
  handleSearch: PropTypes.func,
  toggleInfo: PropTypes.func,
}
