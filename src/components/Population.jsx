import "../css/population.css"


const Population = (props) => {
    const { city, toggleInfo } = props

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    return(
        <div className="population-container">
            <button onClick={toggleInfo} className="backBtn">Back to search</button>
            <h1>{city.name}</h1>
            <div className="population">
                <h2>Population</h2>
                <p>{numberWithSpaces(city.population)}</p>
            </div>
            
        </div>
    )
}
export default Population