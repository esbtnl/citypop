import { useState } from "react"
import Population from "../components/Population"
import "../css/city.css"
import searchAPI from "../services/searchAPI"

const getPopulation = () => {

}

const City = () => {
    const [ infoShow, setInfoShow] = useState(false)
    return (
    <div className="city-container">
        <h1>City</h1>
        {infoShow ? 
        <div>

        </div>
        :
        <div>

        </div>
        }
    </div>
    )
}
export default City