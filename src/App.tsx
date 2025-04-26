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
import Projects from './components/Projects.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <AppHeader />
          <main className="content">
            <Switch>
              <Route path="/" />
              <Route path="#skills" component={Slideshow} />
              <Route path="#projects" component={Projects} />
               {/* <Route path="/contact" component={Contact} /> */}
            </Switch>
          </main>
          <Content>
            <div className="container">
                  <TechExperience />
            </div>
            <div id="projects" className='projects'>
              <section><Projects/></section>
              </div>
          </Content>
        </div>
        <AppFooter />
      </Router>


    </div>
  );
}

export default App;
