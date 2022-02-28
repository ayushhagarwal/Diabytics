import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Signup from "./Components/Signup/Signup";
import Datas from "./Components/Datas/Datas";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";

const App = () => {
  return (
    <Router>
      <Switch>
        <div className="App h-screen bg-blue-300 ">
          <Navbar />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/datas" component={Datas} />
          <Route exact path="/" component={Header} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
