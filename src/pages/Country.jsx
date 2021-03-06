import '../css/country.css'
import React, { useState } from 'react'
import searchAPI from '../services/searchAPI'
import { CountrySelector } from '../components/CountrySelector'
import { Population } from '../components/Population'
import RingLoader from 'react-spinners/RingLoader'

/**
 * Page component for searching for a country
 */
export const Country = () => {
  const [cityShow, setCityShow] = useState(false)
  const [populationShow, setPopulationShow] = useState(false)
  const [loading, setLoading] = useState(false)

  const [country, setCountry] = useState('')
  const [cityList, setCityList] = useState([])
  const [city, setCity] = useState([])

  const toggleCitys = () => {
    setCityShow((previousValue) => !previousValue)
  }
  const togglePopulation = () => {
    setPopulationShow((previousValue) => !previousValue)
  }
  const toggleLoading = () => {
    setLoading((previousValue) => !previousValue)
  }

  const getCitys = (country) => {
    return searchAPI(country, true)
  }

  const handleSearch = (search) => {
    setCountry(search)
    toggleLoading()
    getCitys(search)
      .then((result) => {
        setCityList(
          result
            .sort(function (a, b) {
              return b.population - a.population
            })
            .slice(0, 3)
        )
      })
      .then(toggleLoading)
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
            {loading ? (
              <RingLoader color={'#ffffff'} loading={loading} size={150} />
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
                )
              </div>
            )}
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
