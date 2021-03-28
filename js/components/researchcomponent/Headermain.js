import React from 'react';

export default class Headermain extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <p className="study_name">Study name:</p>{' '}
        <a href={this.props.url} className="study_name_val">
          {this.props.heading}
        </a>
        <div className="research_info_box">
          <img className="research_main_image" src={this.props.image} style={{ width: 62, float: 'left', marginRight: 10 }} />
          <div className="font-15" dangerouslySetInnerHTML={{ __html: this.props.info_content }} />
        </div>
      </div>
    );
  }
}
