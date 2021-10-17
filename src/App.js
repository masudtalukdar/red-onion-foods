import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../src/components/Home/Navbar/NavbarMenu';
import Home from './components/Home/Home/Home';
import Menu from './components/Menu/Menu';
import Footer from './components/Home/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import About from './components/About/About';

function App() {
  return (
    <div className='App container-fluid'>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
            <Menu></Menu>
            <About></About>
          </Route>
          <Route path='/home'>
            <Home></Home>
            <Menu></Menu>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
