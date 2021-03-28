import React from 'react';
import Navbar from '../Navbar.js';
import Navfooter from '../Navfooter.js';
export default class Newstats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="center middle_newstats">
          <h3>
            Statistics will be soon available <span className="little-font">(after 200 users input are made on the input section page)</span>
          </h3>
        </div>
        <div className="footer_newstats container">© 2017 Info page</div>
      </div>
    );
  }
}
