import logo from './logo.svg';
  import './App.css';
  import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './view/Home/Home';
import About from './view/About/About';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/about' exact component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
