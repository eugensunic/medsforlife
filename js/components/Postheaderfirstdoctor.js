import React from 'react';

export default class Postheaderfirstdoctor extends React.Component {
  constructor(props) {
    super(props);
  }
  isDocAlone() {
    if (this.props.doc_alone === 1) {
      return 'yes';
    } else {
      return 'no';
    }
  }
  render() {
    return (
      <div className="post_header" style={{ marginBottom: 6 }}>
        <p className="post_element">User:</p>
        <p className="post_headervalue"> {this.props.user}</p>

        <a href={this.props.url} target="_blank" className="post_element url_value">
          URL
        </a>
        <br />

        <p className="post_element">Opinion:</p>
        <p className="post_headervalue">{this.props.opinion}</p>

        {this.props.is_pharma === 'pharma' ? <p className="post_element">Pharm.alone:</p> : <p className="post_element">Doc.alone:</p>}
        <p className="post_headervalue">{this.isDocAlone()}</p>
      </div>
    );
  }
}
