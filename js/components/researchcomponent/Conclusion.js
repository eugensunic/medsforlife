import React from 'react';

export default class Conclusion extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    return (
      <div className="conclusion_wrapper">
        <div className="row">
          <span className="conclusion_res" style={{ top: -2 }}>
            Conclusion
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}
