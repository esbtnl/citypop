import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { City } from '../pages/City'
import { Country } from '../pages/Country'

/**
 * Component handling navigation of pages from the url
 */
export const WebRouter = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/city" component={City} />
    <Route exact path="/country" component={Country} />
  </Router>
)
