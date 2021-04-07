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
  if(country){
    const response = await fetch(URL + "&country=" + search.value)
    const json = await response.json();
    const data = await API_data(json);
    return  data
    //API_data(json.geonames).sort(function(a, b){return b.population - a.population}).slice(0,3)
  
  }else {
    fetch(URL + "&name=" + search)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }
}
export default searchAPI