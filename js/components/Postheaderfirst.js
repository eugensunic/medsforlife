import React from 'react';

export default class Postheaderfirst extends React.Component {
  render() {
    return (
      <div className="post_header">
        <p className="post_element">User:</p>
        <p className="post_headervalue"> {this.props.user}</p>

        <p className="post_element">Date:</p>
        <p className="post_headervalue">{this.props.date}</p>

        <a href={this.props.url} target="_blank" className="post_element url_value">
          URL
        </a>
      </div>
    );
  }
}
