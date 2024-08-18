import React from 'react';
import './App.css';
import 'carbon-components/css/carbon-components.min.css';
import Slideshow from './components/Slideshow.tsx';
import TechExperience from './components/TechExperience.tsx';
import AppHeader from './components/Header.tsx';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  Content,
} from 'carbon-components-react';
import AppFooter from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
    <Router>
      <div className="App">
        <AppHeader />
        <main className="content">
          <Switch>
            <Route path="/" />
            {/* <Route path="/about" component={About} /> */}
            {/* <Route path="/services" component={Services} /> */}
            {/* <Route path="/contact" component={Contact} /> */}
          </Switch>
        </main>
        <Content>
        <div className="container">
          <div className="left-component">
          <section className="slideshow">
            <Slideshow />
          </section>
          </div>
          <div className="right-component">
          <section >
            <TechExperience />
          </section>
          </div>
        </div>
      </Content>
      <AppFooter/>
      </div>
    </Router>
      
     
    </div>
  );
}

export default App;
