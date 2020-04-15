import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar'
import  FAQ from './pages/Faq'
import  Home  from './pages/Home'
import 'typeface-roboto';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router'
import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router history={history}>
                    <Switch>
                        <Route
                            exact
                            path="/faq"
                            strict
                            component={FAQ}
                        />
                        <Route exact strict path="/" component={Home} />
                    </Switch>
                  </Router>
    </div>
  );
}

export default App;
export const history = createBrowserHistory();
