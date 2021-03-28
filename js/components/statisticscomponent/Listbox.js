import React from 'react';

export default class Listbox extends React.Component {
  // REFACTOR THE BIG LISTS (use loop)
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = { mgcondition: { marginRight: 30 } };
  }
  updateDimensions() {
    if (window.innerWidth < 992) {
      this.setState({ mgcondition: { marginRight: 5 } });
    } else if (window.innerWidth >= 992) {
      this.setState({ mgcondition: { marginRight: 30 } });
    } else if (window.innerWidth < 768) {
      this.setState({ mgcondition: { marginRight: 30 } });
    }
  }
  componentDidMount() {
    this.updateDimensions.call(this);
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  showTwenty() {
    return (
      <div>
        <span className={'list-group-item' + (this.props.order[11] ? '' : ' zero-item')}>
          <span className="">{this.props.order[11]}</span>
          <span className={this.props.order[11] ? 'numeration_last number_eleven' : ''} />
          <span className="middle_value">{this.props.data[11]}</span>
          <span className="badge right_value" style={this.state.mgcondition}>
            {this.props.show_middle === false ? this.props.count[11] : ''}
          </span>
        </span>

        <span className={'list-group-item' + (this.props.order[12] ? '' : ' zero-item')}>
          <span className="">{this.props.order[12]}</span>
          <span className={this.props.order[12] ? 'numeration_last' : ''} />
          <span className="middle_value">{this.props.data[12]}</span>
          <span className="badge right_value" style={this.state.mgcondition}>
            {this.props.show_middle === false ? this.props.count[12] : ''}
          </span>
        </span>
        <span className={'list-group-item' + (this.props.order[13] ? '' : ' zero-item')}>
          <span className="">{this.props.order[13]}</span>
          <span className={this.props.order[13] ? 'numeration_last' : ''} />
          <span className="middle_value">{this.props.data[13]}</span>
          <span className="badge right_value" style={this.state.mgcondition}>
            {this.props.show_middle === false ? this.props.count[13] : ''}
          </span>
        </span>
        <span className={'list-group-item' + (this.props.order[14] ? '' : ' zero-item')}>
          <span className="">{this.props.order[14]}</span>
          <span className={this.props.order[14] ? 'numeration_last' : ''} />
          <span className="middle_value">{this.props.data[14]}</span>
          <span className="badge right_value" style={this.state.mgcondition}>
            {this.props.show_middle === false ? this.props.count[14] : ''}
          </span>
        </span>
        <span className={'list-group-item' + (this.props.order[15] ? '' : ' zero-item')}>
          <span className="">{this.props.order[15]}</span>
          <span className={this.props.order[15] ? 'numeration_last' : ''} />
          <span className="middle_value">{this.props.data[15]}</span>
          <span className="badge right_value" style={this.state.mgcondition}>
            {this.props.show_middle === false ? this.props.count[15] : ''}
          </span>
        </span>

        <span className={'list-group-item' + (this.props.order[16] ? '' : ' zero-item')}>
          <span className="">{this.props.order[16]}</span>
          <span className={this.props.order[16] ? 'numeration_last' : ''} />
          <span className="middle_value">{this.props.data[16]}</span>
          <span className="badge right_value" style={this.state.mgcondition}>
            {this.props.show_middle === false ? this.props.count[16] : ''}
          </span>
        </span>

        <span className={'list-group-item' + (this.props.order[17] ? '' : ' zero-item')}>
          <span className="">{this.props.order[17]}</span>
          <span className={this.props.order[17] ? 'numeration_last' : ''} />
          <span className="middle_value">{this.props.data[17]}</span>
          <span className="badge right_value" style={this.state.mgcondition}>
            {this.props.show_middle === false ? this.props.count[17] : ''}
          </span>
        </span>
        <span className={'list-group-item' + (this.props.order[18] ? '' : ' zero-item')}>
          <span className="">{this.props.order[18]}</span>
          <span className={this.props.order[18] ? 'numeration_last' : ''} />
          <span className="middle_value">{this.props.data[18]}</span>
          <span className="badge right_value" style={this.state.mgcondition}>
            {this.props.show_middle === false ? this.props.count[18] : ''}
          </span>
        </span>
        <span className={'list-group-item' + (this.props.order[19] ? '' : ' zero-item')}>
          <span className="">{this.props.order[19]}</span>
          <span className={this.props.order[19] ? 'numeration_last' : ''} />
          <span className="middle_value">{this.props.data[19]}</span>
          <span className="badge right_value" style={this.state.mgcondition}>
            {this.props.show_middle === false ? this.props.count[19] : ''}
          </span>
        </span>
        <span className={'list-group-item' + (this.props.order[20] ? '' : ' zero-item')}>
          <span className="">{this.props.order[20]}</span>
          <span className={this.props.order[20] ? 'numeration_last' : ''} />
          <span className="middle_value">{this.props.data[20]}</span>
          <span className="badge right_value" style={this.state.mgcondition}>
            {this.props.show_middle === false ? this.props.count[20] : ''}
          </span>
        </span>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h4 style={{ marginBottom: 20 }}>{this.props.name}</h4>
        <div className="list-group">
          <span className={'list-group-item' + (this.props.order[0] ? '' : ' zero-item')}>
            <span className="number_in">{this.props.order[0]}</span>
            <span className={this.props.order[0] ? 'numeration' : ''} />
            <span className="middle_value">{this.props.data[0]}</span>
            <span className="badge right_value" style={this.state.mgcondition}>
              {this.props.show_middle === false ? this.props.count[0] : ''}
            </span>
          </span>
          <span className={'list-group-item' + (this.props.order[1] ? '' : ' zero-item')}>
            <span className="number_in">{this.props.order[1]}</span>
            <span className={this.props.order[1] ? 'numeration' : ''} />
            <span className="middle_value">{this.props.data[1]}</span>
            <span className="badge right_value" style={this.state.mgcondition}>
              {this.props.show_middle === false ? this.props.count[1] : ''}
            </span>
          </span>
          <span className={'list-group-item' + (this.props.order[2] ? '' : ' zero-item')}>
            <span className="number_in">{this.props.order[2]}</span>
            <span className={this.props.order[2] ? 'numeration' : ''} />
            <span className="middle_value">{this.props.data[2]}</span>
            <span className="badge right_value" style={this.state.mgcondition}>
              {this.props.show_middle === false ? this.props.count[2] : ''}
            </span>
          </span>
          <span className={'list-group-item' + (this.props.order[3] ? '' : ' zero-item')}>
            <span className="number_in">{this.props.order[3]}</span>
            <span className={this.props.order[3] ? 'numeration' : ''} />
            <span className="middle_value">{this.props.data[3]}</span>
            <span className="badge right_value" style={this.state.mgcondition}>
              {this.props.show_middle === false ? this.props.count[3] : ''}
            </span>
          </span>
          <span className={'list-group-item' + (this.props.order[4] ? '' : ' zero-item')}>
            <span className="number_in">{this.props.order[4]}</span>
            <span className={this.props.order[4] ? 'numeration' : ''} />
            <span className="middle_value">{this.props.data[4]}</span>
            <span className="badge right_value" style={this.state.mgcondition}>
              {this.props.show_middle === false ? this.props.count[4] : ''}
            </span>
          </span>
          <span className={'list-group-item' + (this.props.order[5] ? '' : ' zero-item')}>
            <span className="number_in">{this.props.order[5]}</span>
            <span className={this.props.order[5] ? 'numeration' : ''} />
            <span className="middle_value">{this.props.data[5]}</span>
            <span className="badge right_value" style={this.state.mgcondition}>
              {this.props.show_middle === false ? this.props.count[5] : ''}
            </span>
          </span>
          <span className={'list-group-item' + (this.props.order[6] ? '' : ' zero-item')}>
            <span className="number_in">{this.props.order[6]}</span>
            <span className={this.props.order[6] ? 'numeration' : ''} />
            <span className="middle_value">{this.props.data[6]}</span>
            <span className="badge right_value" style={this.state.mgcondition}>
              {this.props.show_middle === false ? this.props.count[6] : ''}
            </span>
          </span>
          <span className={'list-group-item' + (this.props.order[7] ? '' : ' zero-item')}>
            <span className="number_in">{this.props.order[7]}</span>
            <span className={this.props.order[7] ? 'numeration' : ''} />
            <span className="middle_value">{this.props.data[7]}</span>
            <span className="badge right_value" style={this.state.mgcondition}>
              {this.props.show_middle === false ? this.props.count[7] : ''}
            </span>
          </span>
          <span className={'list-group-item' + (this.props.order[8] ? '' : ' zero-item')}>
            <span className="number_in">{this.props.order[8]}</span>
            <span className={this.props.order[8] ? 'numeration' : ''} />
            <span className="middle_value">{this.props.data[8]}</span>
            <span className="badge right_value" style={this.state.mgcondition}>
              {this.props.show_middle === false ? this.props.count[8] : ''}
            </span>
          </span>
          <span className={'list-group-item' + (this.props.order[9] ? '' : ' zero-item')}>
            <span className="number_in">{this.props.order[9]}</span>
            <span className={this.props.order[9] ? 'numeration' : ''} />
            <span className="middle_value">{this.props.data[9]}</span>
            <span className="badge right_value" style={this.state.mgcondition}>
              {this.props.show_middle === false ? this.props.count[9] : ''}
            </span>
          </span>
          <span className={'list-group-item' + (this.props.order[10] ? '' : ' zero-item')}>
            <span className="">{this.props.order[10]}</span>
            <span className="numeration_last" />
            <span className="middle_value">{this.props.data[10]}</span>
            <span className="badge right_value" style={this.state.mgcondition}>
              {this.props.show_middle === false ? this.props.count[10] : ''}
            </span>
          </span>
          {/* -------------------------------------------------------------------------------- */}
          {this.props.showmore ? this.showTwenty.call(this) : ''}
        </div>
      </div>
    );
  }
}
