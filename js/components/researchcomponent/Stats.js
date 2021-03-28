import React from 'react';

export default class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first: false };
  }

  componentWillMount() {}

  render() {
    return (
      <div className="stats_wrapper">
        <span className="tag_stats">Stats</span>
        <div className="row" dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}
