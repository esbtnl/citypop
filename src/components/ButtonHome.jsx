import city from "../res/city.jpg"
import map from "../res/map.jpg"

import "../css/buttonHome.css"

const buttons = [
    {
        url: city,
        title: "City",
    },
    {
        url: map,
        title: "Country",
    },
];

const ButtonHome = () => {
    return (
    <div className="buttons-container">
        {buttons.map((image) => (
            <div className="button">
                <h1>{image.title}</h1>
                <a href={image.title}><img src={image.url} alt={image.title} className="button"/></a>
            </div>
        ))}
    </div>)
}
export default ButtonHome