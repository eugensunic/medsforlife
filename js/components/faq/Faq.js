import React from 'react';
import { connect } from 'react-redux';
import { Htmlstring } from './Htmlstring.js';

import Navbar from '../Navbar.js';
import Navfooter from '../Navfooter.js';
import Social from '../Social.js';

export default class Faq extends React.Component {
  constructor(props) {
    super(props);
  }

  callExternalScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    document.body.appendChild(script);
  }

  componentWillMount() {
    this.callExternalScript('/adding.js');
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div contentEditable="false" dangerouslySetInnerHTML={{ __html: Htmlstring }} />
        <Social shown={false} />
        <Navfooter />
      </div>
    );
  }
}
