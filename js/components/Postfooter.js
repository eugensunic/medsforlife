import React from 'react';

export default class Postfooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open_tag: true };
  }
  arrayToTag(arr) {
    return arr.map((item0, i) => {
      return (
        <p className="post_tagvalue_rest" key={i}>
          {item0}
        </p>
      );
    });
  }
  render() {
    return (
      <div className="post_footer_div">
        <div
          className="post_tagtoggle"
          onClick={() => {
            this.setState({ open_tag: !this.state.open_tag });
          }}>
          {this.state.open_tag ? 'close' : 'open'}
        </div>
        {this.state.open_tag ? (
          <div>
            <p className="post_tag">drug generic:</p>
            <p className="post_tagvalue_drug">{this.props.generic}</p>
            <br />

            <p className="post_tag">drug brand:</p>
            <p className="post_tagvalue_drug">{this.props.brand}</p>
            <br />

            <p className="post_tag">duration:</p>
            <p className="post_tagvalue_durdosdaily">{(!this.props.duration ? '' : this.props.duration) + (!this.props.time ? 'none' : this.props.time)}</p>

            <br />

            <p className="post_tag">dosage:</p>
            <p className="post_tagvalue_durdosdaily">{this.props.dosage == '0mg' ? 'unknown' : this.props.dosage}</p>
            <br />

            <p className="post_tag">daily use:</p>
            <p className="post_tagvalue_durdosdaily">{this.props.daily}</p>
            <br />

            <p className="post_tag">condition:</p>
            {this.arrayToTag(this.props.condition)}

            <p className="post_tag">hpylori:</p>
            <p className="post_tagvalue_hp">{this.props.hpylori}</p>

            <br />
            <p className="post_tag">ppicondition:</p>
            {this.arrayToTag(this.props.ppi_condition)}

            <br />

            <p className="post_tag">side effects:</p>
            {this.arrayToTag(this.props.side)}
            <br />

            <p className="post_tag">other drugs:</p>
            {this.arrayToTag(this.props.other)}
            <br />

            <p className="post_tag">used:</p>
            {this.arrayToTag(this.props.used)}
            <br />

            <p className="post_tag">nutrient def:</p>
            {this.arrayToTag(this.props.nutrient)}
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}
