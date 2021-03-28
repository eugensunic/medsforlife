import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Router } from 'react-router-dom';

@connect(store => {
  return {
    navbar: store.nav
  };
})
export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first_check: true };
  }
  returnAbout() {
    return (
      <div className="about_section">
        <h3 className="inline">About</h3>
        <p>
          {' '}
          The application below represents one of the best ways to see if there is any connection between PPIs and the condition that it may cause (CKD, nephritis,
          dementia etc.)
        </p>
        <p>
          After doing research for 3 years with the collection and parameter extraction of a big number of posts on the Internet related to PPIs the "PPI input collecter"
          app was created.
        </p>

        <p>
          Don’t worry, we are not collecting any sensitive info from your side (as you can see from the app). Your post will stand by a randomly generated id{' '}
          <span className="bold">without any of your personal information disclosed</span>: first name, last name, card id, IP address, location etc.
        </p>

        <p>
          It takes only 3-5 minutes of your time to write all the required data so please enter your data carefully and spread it out to other patients which are
          suffering from upper abdominal conditions.{' '}
        </p>
        <p>
          On{' '}
          <span
            className="change_cursor"
            onClick={() => {
              this.props.dispatch({
                type: 'newstats_element',
                payload: 'newstats'
              });
            }}>
            <Route render={({ history }) => <strong onClick={() => history.push('/overview')}>this page</strong>} />
          </span>{' '}
          you can follow the statistics given from user inputs.
        </p>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div>
          <input className="inline" type="checkbox" checked={this.state.first_check} onChange={() => this.setState({ first_check: !this.state.first_check })} />
          <span className="margin-left-3">{this.state.first_check ? 'hide' : 'show About'}</span>
        </div>
        {this.state.first_check ? this.returnAbout() : ''}
      </div>
    );
  }
}
