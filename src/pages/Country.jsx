import '../css/country.css'
import React, { useState } from 'react'
import searchAPI from '../services/searchAPI'
import { CountrySelector } from '../components/CountrySelector'
import { Population } from '../components/Population'

/**
 * Page component for searching for a country
 */
export const Country = () => {
  const [cityShow, setCityShow] = useState(false)
  const [populationShow, setPopulationShow] = useState(false)

  const [country, setCountry] = useState('')
  const [cityList, setCityList] = useState([])
  const [city, setCity] = useState([])

  const getCitys = (country) => {
    return searchAPI(country, true)
  }

  const handleSearch = (search) => {
    setCountry(search)
    getCitys(search).then((result) => {
      setCityList(
        result
          .sort(function (a, b) {
            return b.population - a.population
          })
          .slice(0, 3)
      )
    })
  }

  const toggleCitys = () => {
    setCityShow((previousValue) => !previousValue)
  }

  const togglePopulation = () => {
    setPopulationShow((previousValue) => !previousValue)
  }

  const handleSelect = (city) => {
    setCity(city)
    togglePopulation()
  }
  return (
    <div className="country-container">
      {cityShow ? (
        populationShow ? (
          <div className="info">
            <Population city={city} toggleInfo={togglePopulation} />
          </div>
        ) : (
          <div className="info">
            <button onClick={toggleCitys} className="backBtn">
              Back to search
            </button>
            <h1>{country.label}</h1>
            <ul>
              {cityList.map((city) => (
                <li key={city.id}>
                  <button onClick={() => handleSelect(city)} className="countryBtn">
                    {city.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      ) : (
        <div className="search">
          <CountrySelector handleSearch={handleSearch} toggleInfo={toggleCitys} />
        </div>
      )}
    </div>
  )
}
