import React from 'react';

export default class Explanation extends React.Component {
  render() {
    return <div className="overview_conclusion">{this.props.text}</div>;
  }
}
