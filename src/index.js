import React from 'react';
import ReactDOM from 'react-dom';

//parts
import Header from './components/Header';
import TopBack from './components/TopBack';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

//small parts
import LeadLine from './components/LeadLine';

import reportWebVitals from './reportWebVitals';

//import Router
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Header />

          <main>

              <TopBack/>

              <LeadLine/>
              
              <Switch>
                  <Route exact path="/">
                      <Works page="work" title="Works"/>
                      <Works page="art" title="Arts"/>
                  </Route>

                  <Route exact path="/about">
                      <About/>
                  </Route>

                  <Route exact path="/contact">
                      <Contact/>
                  </Route>
              </Switch>
          </main>

          <Footer />


      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
