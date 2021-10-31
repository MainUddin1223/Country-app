
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Componants/Home/Home';
import DEtail from './Componants/Detail/DEtail';
import NoMatch from './Componants/NoMatch/NoMatch';
import Country from './Componants/Country/Country';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path ="/">
            <Home/>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>
         <Route exact path="/about/:detail">
           <Country/>
         </Route>
         <Route  path="*">
           <NoMatch/>
         </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
