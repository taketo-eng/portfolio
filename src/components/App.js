import React from 'react';
import ReactDOM from 'react-dom';


import Header from './Header';
import TopBack from './TopBack';
import Works from './Works';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import LeadLine from './LeadLine';

//import Router
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

if (document.getElementById('app')) {

    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <Header />

                <main>

                    <TopBack/>

                    <LeadLine/>
                    
                    <Switch>
                        <Route exact path="/">
                            <Works/>
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
        document.getElementById('app')
    );

}