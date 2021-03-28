import React from 'react';

export default class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: this.props.shown };
  }
  render() {
    return <div className="row" />;
  }
}
