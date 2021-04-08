import "../css/population.css"


const Population = (props) => {
    const { city } = props
    return(
        <div className="population-container">
            <h1>{city.name}</h1>
            <p>{city.population}</p>
        </div>
    )
}
export default Population