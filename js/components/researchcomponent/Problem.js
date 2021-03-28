import React from 'react';

export default class Problem extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    return (
      <div className="problem_wrapper">
        <div className="row">
          <span className="problem" style={{ top: -2 }}>
            Problem
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}
