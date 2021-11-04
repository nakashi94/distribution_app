import React, { FC } from 'react';
import ResultPage from './ResultPage';
import TopHeader from '../components/topPage/TopHeader';
import TopMain from '../components/topPage/TopMain';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const TopPage: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TopHeader />
          <TopMain />
        </Route>
        <Route exact path="/search/:keyword">
          <ResultPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default TopPage
