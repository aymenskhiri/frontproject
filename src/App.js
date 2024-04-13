import logo from './logo.svg';
import './App.css';
import Login from './Components/LoginSignup/Login';
import Signup from './Components/LoginSignup/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* Additional routes can be defined here */}
      </Switch>
    </Router>
  );
};

export default App;