import '../css/city.css'
import { useState } from 'react'
import searchAPI from '../services/searchAPI'
import { Population } from '../components/Population'
import { CityForm } from '../components/CityForm'
import RingLoader from 'react-spinners/RingLoader'

/**
 * Page component dedicated for searching for a city
 */
export const City = () => {
  const [infoShow, setInfoShow] = useState(false)
  const [city, setCity] = useState({ name: '', population: '' })
  const [loading, setLoading] = useState(false)
  /**
   * Function deciding to show population for a city
   */
  const toggleInfo = () => {
    setInfoShow((previousValue) => !previousValue)
  }
  const toggleLoading = () => {
    setLoading((previousValue) => !previousValue)
  }
  /**
   * Function calling the API getting an array of citys
   */
  const getCitys = (name) => {
    return searchAPI(name, false)
  }
  const onSubmit = (data) => {
    setCity({ name: '', population: '' })
    toggleLoading()
    getCitys(data.city)
      .then((result) => {
        //Sorting the array by population
        var data = result.sort(function (a, b) {
          return b.population - a.population
        })
        var city = data.slice(0, 1)
        data.length === 0
          ? setCity({ name: 'City exploded', population: '0' })
          : setCity(city[0])
      })
      .then(toggleLoading)
    toggleInfo()
  }

  return (
    <div className="city-container">
      {infoShow ? (
        <div className="info">
          {loading ? (
            <RingLoader color={'#ffffff'} loading={loading} size={150} />
          ) : (
            <Population city={city} toggleInfo={toggleInfo} />
          )}
        </div>
      ) : (
        <div className="search">
          <CityForm onSubmit={onSubmit} />
        </div>
      )}
    </div>
  )
}
