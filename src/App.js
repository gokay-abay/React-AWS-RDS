import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./component/Home"
import ProfileDetail from "./component/ProfileDetail"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/profile/:id">
          <ProfileDetail />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
