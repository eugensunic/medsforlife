import React from 'react';

export default class Postmain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props.bg_color}>
        <div className="post_number">{this.props.number}</div>
        {this.props.content_cite}
      </div>
    );
  }
}
