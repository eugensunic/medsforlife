import React from 'react';

import General from './General.js';
import Comments from './Comments.js';
import Otherdrugs from './Otherdrugs.js';
import Allnatural from './Allnatural.js';
import Rest from './Rest.js';

import Navbar from '../Navbar.js';
import Navfooter from '../Navfooter.js';
import Social from '../Social.js';

export default class Ppistarter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <Navbar />
        <General />
        <Comments />
        <Otherdrugs />
        <Allnatural />
        <Social shown={false} />
        <Navfooter />
      </div>
    );
  }
}
