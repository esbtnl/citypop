import "../css/population.css"

const Population = (props) => {
    console.log(props.search.label)
    return(
        <div className="population-container">
            <h1>{props.search.label}</h1>
            <p>{props.search.value}</p>
        </div>
    )
}
export default Population