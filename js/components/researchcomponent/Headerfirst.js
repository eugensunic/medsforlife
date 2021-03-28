import React from 'react';

export default class Headerfirst extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    return (
      <div>
        <span className="number_in_left">{'#' + this.props.id}</span>
        <div className="research_date_element">
          <span>Date published:</span>
          <span className="research_date_element_val">{this.props.date}</span>
        </div>

        <a href={this.props.url} className="research_url_header" target="_blank" />
        <img src={this.props.show_pdf ? '../../pics/pdf_icon.png' : ''} className="pdf_in_right" />
      </div>
    );
  }
}
