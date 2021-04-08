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

export default function ButtonHome() {
    return (
    <div className="buttons-container">
        {buttons.map((image) => (
            <a href={image.title}><button className="selectButton">Search by {image.title}</button></a>
        ))}
    </div>)
}
