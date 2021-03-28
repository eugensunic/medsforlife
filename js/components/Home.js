import React from 'react';
import Navfooter from './Navfooter.js';
import { withRouter, Route, Router, Link } from 'react-router-dom';

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="container" style={{ marginTop: 100 }}>
        <div className="row">
          <Route
            render={({ history }) => (
              <div className="col-sm-4 click_me form-group center" onClick={() => history.push('/posts')}>
                Posts
                <div className="small-txt-below">PPIs usage discussion posts</div>
              </div>
            )}
          />
          <Route
            render={({ history }) => (
              <div className="col-sm-4 click_me form-group center" onClick={() => history.push('/statistics')}>
                Statistics
                <div className="small-txt-below">charts and tables about collected posts</div>
              </div>
            )}
          />
          <Route
            render={({ history }) => (
              <div className="col-sm-4 click_me form-group center" onClick={() => history.push('/research')}>
                Research
                <div className="small-txt-below">studies about PPIs</div>
              </div>
            )}
          />
        </div>
        <div className="row">
          <Route
            render={({ history }) => (
              <div className="col-sm-4 click_me form-group center" onClick={() => history.push('/form')}>
                Form
                <div className="small-txt-below">PPIs data collection form </div>
              </div>
            )}
          />
          <Route
            render={({ history }) => (
              <div className="col-sm-4 click_me form-group center" onClick={() => history.push('/tips')}>
                Tips
                <div className="small-txt-below">PPIs usage, side effects, alternatives, conclusion</div>
              </div>
            )}
          />
          <Route
            render={({ history }) => (
              <div className="col-sm-4 click_me form-group center" onClick={() => history.push('/faq')}>
                FAQ
                <div className="small-txt-below">useful information for education</div>
              </div>
            )}
          />
        </div>
        <Route
          render={({ history }) => (
            <div className="row click_me_row form-group center" onClick={() => history.push('/about')}>
              About
            </div>
          )}
        />
        <Route
          render={({ history }) => (
            <div className="row click_me_row form-group center" onClick={() => history.push('/overview')}>
              Form overview
            </div>
          )}
        />
        <Navfooter />
      </div>
    );
  }
}
<Route
  render={({ history }) => (
    <span className="nav_element" onClick={() => history.push('/')}>
      home
    </span>
  )}
/>;
