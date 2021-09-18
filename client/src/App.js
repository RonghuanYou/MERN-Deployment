import './App.css';
import { Switch, Route } from 'react-router-dom';
import Create from "./components/Create"
import Main from "./components/Main"
import Pirate from "./components/Pirate"

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/pirates">
            <Main />
          </Route>

          <Route exact path="/pirate/new">
              <Create />
          </Route>

          <Route exact path="/pirate/:id">
            <Pirate />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
