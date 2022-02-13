import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Signup from "./Components/Signup/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const handleSignup = () => {
    window.location.href = "/signup";
  };
  return (
    <Router>
      <Switch>
        <div className="App h-screen bg-blue-300 ">
          <Navbar />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={handleSignup}
          >
            Try Now
          </button>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/signup" component={Signup} />
        </div>
      </Switch>
    </Router>
  );
};

export default App;
