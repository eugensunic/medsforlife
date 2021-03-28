import React from 'react';

export default class Postheadersecond extends React.Component {
  render() {
    return (
      <div className="post_headersecond">
        <p className="post_element">Age:</p>
        <p className="post_headervalue">{this.props.age == '0' ? 'unknown' : this.props.age}</p>

        <p className="post_element">Gender:</p>
        <p className="post_headervalue">{this.props.gender}</p>
      </div>
    );
  }
}
