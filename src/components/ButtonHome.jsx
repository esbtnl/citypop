import "../css/buttonHome.css";

/**
 * Component creating the buttons on the homescreen
 */
export default function ButtonHome() {
    const buttons = ["city", "country"];

    return (
    <div className="buttons-container">
        {buttons.map((btn) => (
            <a href={btn}><button className="selectButton">Search by {btn}</button></a>
        ))}
    </div>)
}
