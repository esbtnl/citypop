import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/Home"
import City from "../pages/City"
import Country from "../pages/Country"

const WebRouter = () => (
    <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/city" component={City}></Route>
        <Route exact path="/country" component={Country}></Route>
    </Router>
)
export default WebRouter