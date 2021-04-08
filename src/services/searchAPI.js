const URL = "http://api.geonames.org/searchJSON?username=weknowit&maxRows=30&featureClass=p";

function API_data(data){
  const arrayData = data.geonames.map(item => {
    return {name: item.name, 
            population: item.population, 
            id: item.geonameId} 
  })
  return arrayData;
}

async function searchAPI(search, country) {
  console.log("Search API")
  console.log("SEARCH: " + search.value)
  var response = ""
  if(country){
    response = await fetch(URL + "&country=" + search.value)
  }else {
    response = await fetch(URL + "&name=" + search)
  }
  const json = await response.json();
  const data = await API_data(json);
  return data
}
export default searchAPI