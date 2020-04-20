import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar'
import  Faq from './pages/Faq'
import  Home  from './pages/Home'
import  Guides  from './pages/Guides'
import  Sponsors  from './pages/Sponsors'
import  Roadmaps  from './pages/Roadmaps'
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
                        <Route exact path="/faq" strict component={Faq}/>
                        <Route exact strict path="/" component={Home} />
                        <Route exact strict path="/guides" component={Guides} />
                        <Route exact strict path="/sponsors" component={Sponsors} />
                        <Route exact strict path="/roadmaps" component={Roadmaps} />
                    </Switch>
                  </Router>
    </div>
  );
}

export default App;
export const history = createBrowserHistory();
