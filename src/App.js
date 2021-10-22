import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/Home/Index';
import About from './components/About';
import Blog from './components/Blog';
import Footer from './components/Layouts/Footer';

function App() {
  return (
    <Router>
        <div>
          <Switch>
          <Route exact path="/:slug">
              <Blog />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
