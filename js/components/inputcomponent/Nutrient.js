import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import * as user from './Functions.js';
@connect(store => {
  return {
    nutrient: store.nutrient
  };
})
export default class Nutrient extends React.Component {
  constructor(props) {
    super(props);
  }
  displayNutrient(options) {
    return (
      <div className="row" id="nutrient-deficiency">
        <Select
          name="side"
          className={'widing' + this.props.input_one}
          value={this.props.nutrient.nutrient}
          options={user.pushToObject(options.sort())}
          searchable={true}
          multi={true}
          onChange={e => this.props.dispatch({ type: 'nutrient', payload: e })} //ovu funckije moras van izrokat
        />
      </div>
    );
  }
  onRadio(val) {
    if (val === 'first') {
      this.props.dispatch({ type: 'radio_nutrient', payload: [true, false, false] });
    }
    if (val === 'second') {
      this.props.dispatch({ type: 'radio_nutrient', payload: [false, true, false] });
    }
    if (val === 'third') {
      this.props.dispatch({ type: 'radio_nutrient', payload: [false, false, true] });
    }
  }
  render() {
    var nutrient_array = ['Iron', 'Magnesium', 'Zinc', 'Calcium', 'Vitamin B12', 'Vitamin B', 'Vitamin C', 'Vitamin D', 'Vitamin A', 'Phospate', 'Potassium'];
    return (
      <div>
        <div className="row" id="nutrient_radio">
          <h3>Nutrient</h3>
          <p className="inline">Do you have any nutrient (mineral, vitamin) deficiency due to PPIs?</p>
          <div className={'inline' + this.props.radio}>
            <span
              className={
                this.props.nutrient.radio_nutrient != undefined
                  ? this.props.nutrient.radio_nutrient[0] ? 'radio_clicked_input' : 'radio_normal_input'
                  : 'radio_normal_input'
              }
              onClick={() => this.onRadio('first')}>
              YES
            </span>
            <span
              className={
                this.props.nutrient.radio_nutrient != undefined
                  ? this.props.nutrient.radio_nutrient[1] ? 'radio_clicked_input' : 'radio_normal_input'
                  : 'radio_normal_input'
              }
              onClick={() => this.onRadio('second')}>
              NO
            </span>
            <span
              className={
                this.props.nutrient.radio_nutrient != undefined
                  ? this.props.nutrient.radio_nutrient[2] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                  : 'radio_normal_input cancel_margin_last'
              }
              onClick={() => this.onRadio('third')}>
              I don&#39;t know
            </span>
          </div>
        </div>
        {this.props.nutrient.radio_nutrient != undefined ? (this.props.nutrient.radio_nutrient[0] === true ? this.displayNutrient.call(this, nutrient_array) : '') : ''}
      </div>
    );
  }
}
