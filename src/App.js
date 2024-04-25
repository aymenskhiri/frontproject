import logo from './logo.svg';
import './App.css';
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup';
import CreateSalle from './Components/Salle/CreateSalle';
import UpdateSalle from './Components/Salle/UpdateSalle';
import DeleteSalle from './Components/Salle/DeleteSalle';
import SalleListPage from './Components/Salle/SalleListPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/CreateSalle" component={CreateSalle} />
        <SalleListPage />
  
      </Switch>
    </Router>
  );
};

export default App;