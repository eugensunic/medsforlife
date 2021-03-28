import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Router } from 'react-router-dom';

@connect(store => {
  return {
    navbar: store.navbar
  };
})
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <div>
        <div className="nav_center">
          <Route
            render={({ history }) => (
              <span
                className="nav_element"
                onClick={() => {
                  history.location.pathname !== '/' ? history.push('/') : '';
                }}>
                home
              </span>
            )}
          />
          <Route
            render={({ history }) => (
              <span
                className="nav_element"
                onClick={() => {
                  history.location.pathname !== '/posts' ? history.push('/posts') : '';
                }}>
                posts
              </span>
            )}
          />
          <Route
            render={({ history }) => (
              <span
                className="nav_element"
                onClick={() => {
                  history.location.pathname !== '/statistics' ? history.push('/statistics') : '';
                }}>
                statistics
              </span>
            )}
          />
          <Route
            render={({ history }) => (
              <span
                className="nav_element"
                onClick={() => {
                  history.location.pathname !== '/research' ? history.push('/research') : '';
                }}>
                research
              </span>
            )}
          />
          <Route
            render={({ history }) => (
              <span
                className="nav_element"
                onClick={() => {
                  history.location.pathname !== '/form' ? history.push('/form') : '';
                }}>
                form
              </span>
            )}
          />
          <Route
            render={({ history }) => (
              <span
                className="nav_element"
                onClick={() => {
                  history.location.pathname !== '/tips' ? history.push('/tips') : '';
                }}>
                tips
              </span>
            )}
          />
          <Route
            render={({ history }) => (
              <span
                className="nav_element"
                onClick={() => {
                  history.location.pathname !== '/faq' ? history.push('/faq') : '';
                }}>
                faq
              </span>
            )}
          />
          <Route
            render={({ history }) => (
              <span
                className="nav_element"
                onClick={() => {
                  history.location.pathname !== '/about' ? history.push('/about') : '';
                }}>
                about
              </span>
            )}
          />
          <Route
            render={({ history }) => (
              <span
                className="nav_element"
                style={{ marginLeft: 15 }}
                onClick={() => {
                  history.location.pathname !== '/overview' ? history.push('/overview') : '';
                }}>
                form overview
              </span>
            )}
          />
        </div>
      </div>
    );
  }
}
