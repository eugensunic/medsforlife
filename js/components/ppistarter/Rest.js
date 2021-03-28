import React from 'react';

export default class Rest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="rest_section_starter">
        <h4 className="overwrite_h4">
          Additional comments <span className="little-font" />
        </h4>
        <ul>
          <li>
            How to calculate Barrett&#39;s esophagus probabilty of getting cancer in <strong>x</strong> years?
          </li>
        </ul>
      </div>
    );
  }
}
