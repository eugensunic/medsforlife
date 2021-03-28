import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

@connect(store => {
  return {
    basic: store.basic
  };
})
export default class Basic extends React.Component {
  onRadio(val) {
    if (val === 'first_gender') {
      this.props.dispatch({ type: 'radio_gender', payload: [true, false, false] });
    } else if (val === 'second_gender') {
      this.props.dispatch({ type: 'radio_gender', payload: [false, true, false] });
    } else if (val === 'third_gender') {
      this.props.dispatch({ type: 'radio_gender', payload: [false, false, true] });
    } else if (val === 'first_race') {
      this.props.dispatch({ type: 'radio_race', payload: [true, false, false, false, false] });
    } else if (val === 'second_race') {
      this.props.dispatch({ type: 'radio_race', payload: [false, true, false, false, false] });
    } else if (val === 'third_race') {
      this.props.dispatch({ type: 'radio_race', payload: [false, false, true, false, false] });
    } else if (val === 'fourth_race') {
      this.props.dispatch({ type: 'radio_race', payload: [false, false, false, true, false] });
    } else if (val === 'fifth_race') {
      this.props.dispatch({ type: 'radio_race', payload: [false, false, false, false, true] });
    }
  }
  render() {
    return (
      <div className="row" id="basic_info">
        <h3>Basic info</h3>

        <p className="inline">
          Age<span className="paranthesis">(years)</span>
        </p>
        <input
          className={this.props.age + this.props.error_age_input + ' number'}
          type="text"
          defaultValue={this.props.basic.age || ''}
          onChange={(e, val) => {
            this.props.dispatch({ type: 'age', payload: e.target.value });
          }}
          maxLength="4"
        />
        <p className="inline">Height</p>
        <input
          className={this.props.height + this.props.error_height_input + ' number'}
          type="text"
          defaultValue={this.props.basic.height || ''}
          onChange={(e, val) => {
            this.props.dispatch({ type: 'height', payload: e.target.value });
          }}
          maxLength="4"
        />
        <select
          name="height"
          className={this.props.error_height}
          onChange={e => {
            this.props.dispatch({ type: 'height_si', payload: e.target.value });
          }}
          defaultValue={this.props.basic.height_select || ''}>
          <option value="" style={{ display: 'none' }} defaultValue="selected" label="unit" />
          <option value="cm">cm</option>
          <option value="in">inch</option>
          <option value="ft">foot</option>
          <option value="mt">meters</option>
        </select>

        <p className="inline">Weight</p>
        <input
          className={this.props.weight + this.props.error_weight_input + ' number'}
          type="text"
          defaultValue={this.props.basic.weight || ''}
          onChange={(e, val) => {
            this.props.dispatch({ type: 'weight', payload: e.target.value });
          }}
          maxLength="4"
        />
        <select
          name="weight"
          className={this.props.error_weight}
          onChange={e => {
            this.props.dispatch({ type: 'weight_si', payload: e.target.value });
          }}
          defaultValue={this.props.basic.weight_select || ''}>
          <option value="" style={{ display: 'none' }} defaultValue="selected" label="unit" />
          <option value="kg">kg</option>
          <option value="pd">pounds</option>
          <option value="st">stones</option>
        </select>
        <p className="inline">Gender</p>
        <div className={'inline' + this.props.gender}>
          <span
            className={this.props.basic.gender != undefined ? (this.props.basic.gender[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_gender')}>
            M
          </span>
          <span
            className={this.props.basic.gender != undefined ? (this.props.basic.gender[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_gender')}>
            F
          </span>
          <span
            className={
              this.props.basic.gender != undefined
                ? this.props.basic.gender[2] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('third_gender')}>
            Other
          </span>
        </div>
        <p className="inline">Race</p>
        <div className={'inline' + this.props.race}>
          <span
            className={this.props.basic.race != undefined ? (this.props.basic.race[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_race')}>
            White
          </span>
          <span
            className={this.props.basic.race != undefined ? (this.props.basic.race[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_race')}>
            Black
          </span>
          <span
            className={this.props.basic.race != undefined ? (this.props.basic.race[2] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('third_race')}>
            Asian
          </span>
          <span
            className={this.props.basic.race != undefined ? (this.props.basic.race[3] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('fourth_race')}>
            Hispanic/Latino
          </span>
          <span
            className={
              this.props.basic.race != undefined
                ? this.props.basic.race[4] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('fifth_race')}>
            Other
          </span>
        </div>
        <div className="inline">
          <a target="_blank" href="http://www.unitconverters.net">
            Need converter?
          </a>
        </div>
      </div>
    );
  }
}
