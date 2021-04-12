/**
 * Returns the relevant information from the API data
 */
const API_data = (data) => {
  const arrayData = data.geonames.map((item) => {
    return { name: item.name, population: item.population, id: item.geonameId }
  })
  return arrayData
}

async function searchAPI(search, country) {
  const URL =
    'http://api.geonames.org/searchJSON?username=weknowit&maxRows=30&featureClass=p'
  var response = ''
  if (country) {
    response = await fetch(URL + '&country=' + search.value)
  } else {
    response = await fetch(URL + '&name=' + search)
  }
  const json = await response.json()
  const data = await API_data(json)
  return data
}
export default searchAPI
