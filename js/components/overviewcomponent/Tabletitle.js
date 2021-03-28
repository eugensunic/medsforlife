import React from 'react';

export default class TableTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={'overview-title ' + this.props.overwrite}
        style={{ backgroundColor: this.props.backColor, cursor: this.props.tabValue === 'a' ? 'pointer' : '' }}
        onClick={this.props.onClick}>
        {this.props.title}
      </div>
    );
  }
}
