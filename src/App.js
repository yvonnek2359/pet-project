import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HeaderContainer } from './containers/HeaderContainer';
import { TopStoriesContainer } from './containers/TopStoriesContainer';
import { StoriesContainer } from './containers/StoriesContainer';
import { AskStoriesContainer } from './containers/AskStoriesContainer';
import { ShowStoriesContainer } from './containers/ShowStoriesContainer'
import { JobStoriesContainer } from './containers/JobStoriesContainer';
import { AskStoryDetails } from './components/AskStoryDetails';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderContainer />
          <Switch>
              <Route exact path="/" component = { TopStoriesContainer }></Route>
              <Route exact path="/news" component = { TopStoriesContainer }></Route>
              <Route exact path="/newest" component = { StoriesContainer }></Route>
              <Route exact path="/ask" component = { AskStoriesContainer }></Route>
              <Route exact path="/show" component = { ShowStoriesContainer }></Route>
              <Route exact path="/jobs" component = { JobStoriesContainer }></Route>
              {/* <Route exact path="/item/:askstoryid" component = { AskStoryDetails }></Route> */}
            </Switch>
      </div>
    </Router>
  );
}

export default App;
