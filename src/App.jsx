import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// containers
import Top from './containers/Top';
import Profile from './containers/Profile';
import NotFound from './containers/NotFound';

// test
import Blog1 from './blog/Blog1';
import Blog2 from './blog/Blog2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>

          <Route exact path="/">
            <Top />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/blog/1">
            <Blog1 />
          </Route>

          <Route path="/blog/2">
            <Blog2 />
          </Route>

          <Route>
            <NotFound />
          </Route>

        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
