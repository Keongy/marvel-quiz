import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import Landing from '../Landing';
import Login from '../Login';
import Signup from '../Signup';
import Welcome from '../Welcome';
import ErrorPage from '../ErrorPage'
import '../../App.css';


function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/signup" component={Signup} />
        <Route component={ErrorPage} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
