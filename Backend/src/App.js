import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import CreateFlight from "./Components/CreateFlight";
import Flight from "./Components/Flight";

// if you got here that means I am crying 
// Hallo
function App() {
  return (
    <div className="App">
     {/*  <Flight/>*/}

  {/*    <Router>
        <Switch>
             <Route exactpath = "/createFlight" component={CreateFlight}/>
          </Switch>
  </Router> */}
    </div>
  );
}

export default App;
