import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

import * as user from './Functions.js';
@connect(store => {
  return {
    drug: store.drug
  };
})
export default class Drug extends React.Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      first_check: false,
      duration: [false, false, false, false],
      daily: [false, false, false],
      value1: {},
      value2: {},
      value3: {},
      value4: {},
      value1_1: {},
      value2_2: {},
      value3_3: {},
      value4_4: {},
      brand: 'one',
      generic: 'one',
      input_first: undefined,
      width: 198,
      red_border: ''
    };
  }
  updateDimensions() {
    if (window.innerWidth < 768) {
      this.setState({ width: 198, red_border: ' redness_below768' });
    } else if (window.innerWidth < 992) {
      this.setState({ width: 150, red_border: ' redness_below992' });
    } else if (window.innerWidth >= 992) {
      this.setState({ width: 198, red_border: '' });
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  findAppropriateClassDuration(val) {
    if (val === 'first') {
      return this.props.duration1;
    }
    if (val === 'second') {
      return this.props.duration2;
    }
    if (val === 'third') {
      return this.props.duration3;
    }
    if (val === 'fourth') {
      return this.props.duration4;
    }
  }
  findAppropriateClassBrand(val) {
    if (val === 'first') {
      return this.props.brand1;
    }
    if (val === 'second') {
      return this.props.brand2;
    }
    if (val === 'third') {
      return this.props.brand3;
    }
    if (val === 'fourth') {
      return this.props.brand4;
    }
  }
  findAppropriateClassBrand2(val) {
    if (val === 'first') {
      return this.props.brand12;
    }
    if (val === 'second') {
      return this.props.brand22;
    }
    if (val === 'third') {
      return this.props.brand32;
    }
    if (val === 'fourth') {
      return this.props.brand42;
    }
  }
  findAppropriateClassGeneric(val) {
    if (val === 'first') {
      return this.props.generic1;
    }
    if (val === 'second') {
      return this.props.generic2;
    }
    if (val === 'third') {
      return this.props.generic3;
    }
    if (val === 'fourth') {
      return this.props.generic4;
    }
  }
  findAppropriateClassDosage(val) {
    if (val === 'first') {
      return this.props.dosage1;
    }
    if (val === 'second') {
      return this.props.dosage2;
    }
    if (val === 'third') {
      return this.props.dosage3;
    }
    if (val === 'fourth') {
      return this.props.dosage4;
    }
  }
  findAppropriateClassGlobaltime(val) {
    if (val === 'first') {
      return this.props.globaltime1;
    }
    if (val === 'second') {
      return this.props.globaltime2;
    }
    if (val === 'third') {
      return this.props.globaltime3;
    }
    if (val === 'fourth') {
      return this.props.globaltime4;
    }
  }
  findAppropriateClassDaily(val) {
    if (val === 'first') {
      return this.props.daily1;
    }
    if (val === 'second') {
      return this.props.daily2;
    }
    if (val === 'third') {
      return this.props.daily3;
    }
    if (val === 'fourth') {
      return this.props.daily4;
    }
  }
  findAppropriateBrand(val) {
    if (val === 'first') {
      return this.props.drug.brand1;
    }
    if (val === 'second') {
      return this.props.drug.brand2;
    }
    if (val === 'third') {
      return this.props.drug.brand3;
    }
    if (val === 'fourth') {
      return this.props.drug.brand4;
    }
  }
  findAppropriateGeneric(val) {
    if (val === 'first') {
      return this.props.drug.generic1;
    }
    if (val === 'second') {
      return this.props.drug.generic2;
    }
    if (val === 'third') {
      return this.props.drug.generic3;
    }
    if (val === 'fourth') {
      return this.props.drug.generic4;
    }
  }
  findAppropriateDosageValue(val) {
    if (val === 'first') {
      return this.props.drug.dosage1;
    }
    if (val === 'second') {
      return this.props.drug.dosage2;
    }
    if (val === 'third') {
      return this.props.drug.dosage3;
    }
    if (val === 'fourth') {
      return this.props.drug.dosage4;
    }
  }
  findAppropriateDurationValue(val) {
    if (val === 'first') {
      return this.props.drug.duration1;
    }
    if (val === 'second') {
      return this.props.drug.duration2;
    }
    if (val === 'third') {
      return this.props.drug.duration3;
    }
    if (val === 'fourth') {
      return this.props.drug.duration4;
    }
  }
  findAppropriateGlobaltimeValue(val) {
    if (val === 'first') {
      return this.props.drug.globaltime1;
    }
    if (val === 'second') {
      return this.props.drug.globaltime2;
    }
    if (val === 'third') {
      return this.props.drug.globaltime3;
    }
    if (val === 'fourth') {
      return this.props.drug.globaltime4;
    }
  }
  findAppropriateDailyUsageValue(val) {
    if (val === 'first') {
      return this.props.drug.daily1;
    }
    if (val === 'second') {
      return this.props.drug.daily2;
    }
    if (val === 'third') {
      return this.props.drug.daily3;
    }
    if (val === 'fourth') {
      return this.props.drug.daily4;
    }
  }
  findRightIndex(val) {
    if (val === 'first') {
      return 0;
    }
    if (val === 'second') {
      return 1;
    }
    if (val === 'third') {
      return 2;
    }
    if (val === 'fourth') {
      return 3;
    }
  }

  setArrayRadio(arr, id, type0) {
    if (id === 'first') {
      this.props.dispatch({ type: type0, payload1: this.props.id, payload2: arr });
    }
    if (id === 'second') {
      this.props.dispatch({ type: type0, payload1: this.props.id, payload2: arr });
    }
    if (id === 'third') {
      this.props.dispatch({ type: type0, payload1: this.props.id, payload2: arr });
    }
    if (id === 'fourth') {
      this.props.dispatch({ type: type0, payload1: this.props.id, payload2: arr });
    }
  }
  onRadio(val) {
    if (val === 'global_day') {
      this.setArrayRadio.call(this, [true, false, false, false], this.props.id, 'globaltime');
      this.setState({ duration: [true, false, false, false] });
    } else if (val === 'global_week') {
      this.setArrayRadio.call(this, [false, true, false, false], this.props.id, 'globaltime');
      this.setState({ duration: [false, true, false, false] });
    } else if (val === 'global_month') {
      this.setArrayRadio.call(this, [false, false, true, false], this.props.id, 'globaltime');
      this.setState({ duration: [false, false, true, false] });
    } else if (val === 'global_year') {
      this.setArrayRadio.call(this, [false, false, false, true], this.props.id, 'globaltime');
      this.setState({ duration: [false, false, false, true] });
    } else if (val === 'daily_first') {
      this.setArrayRadio.call(this, [true, false, false], this.props.id, 'daily');
      this.setState({ daily: [true, false, false] });
    } else if (val === 'daily_second') {
      this.setArrayRadio.call(this, [false, true, false], this.props.id, 'daily');
      this.setState({ daily: [false, true, false] });
    } else if (val === 'daily_third') {
      this.setArrayRadio.call(this, [false, false, true], this.props.id, 'daily');
      this.setState({ daily: [false, false, true] });
    }
  }

  render() {
    var generic_array = [
      'Esomeprazole',
      'Pantoprazole',
      'Lansoprazole',
      'Dexlansoprazole',
      'Rabeprazole',
      'Ilaprazole',
      'Tenatoprazole',
      'Timoprazole',
      'Picoprazole',
      'Omeprazole'
    ];

    var brand_array = [
      'Nexium',
      'Aciphex',
      'Controloc',
      'Protonix',
      'Zegerid',
      'Kapidex',
      'Prevacid',
      'Nolpaza',
      'Dexilant',
      'Zoton',
      'Protium',
      'Losec',
      'Ares',
      'Prilosec',
      'Tecta',
      'Somac',
      'Pantoloc',
      'Pariet',
      'Solox'
    ];

    return (
      <div>
        <div className="row" id="drugs_info">
          <div id="ppi">
            <div className="col-sm-3 bootstrap_col_modification">
              <p className="inline">Drug generic</p>
              <Select
                name="generic"
                className={'widing' + this.findAppropriateClassGeneric(this.props.id) + this.state.red_border}
                style={{ width: this.state.width }}
                value={this.findAppropriateGeneric.call(this, this.props.id)}
                options={user.pushToObject(generic_array.sort())}
                searchable={true}
                multi={false}
                onChange={e => {
                  if (this.props.id == 'first' || this.props.id == 'second' || this.props.id == 'third' || this.props.id == 'fourth') {
                    this.props.dispatch({ type: 'drug_generic', payload1: this.props.id, payload2: e });
                  }
                }}
              />
            </div>
            <div className="col-sm-3 bootstrap_col_modification">
              <p className="inline">Drug brand</p>
              {this.state.first_check === false ? (
                <Select
                  name="brand"
                  className={'widing' + this.findAppropriateClassBrand(this.props.id) + this.state.red_border}
                  style={{ width: this.state.width }}
                  value={this.findAppropriateBrand.call(this, this.props.id)}
                  options={user.pushToObject(brand_array.sort())}
                  searchable={true}
                  multi={false}
                  onChange={e => {
                    if (this.props.id == 'first' || this.props.id == 'second' || this.props.id == 'third' || this.props.id == 'fourth') {
                      this.props.dispatch({ type: 'drug_brand', payload1: this.props.id, payload2: e });
                    }
                  }}
                />
              ) : (
                <div className="margin-top-negative-10">
                  <p />{' '}
                  <input
                    type="text"
                    style={{ width: this.state.width }}
                    className={user.isValidString(this.state.input_first) + this.findAppropriateClassBrand2(this.props.id) + ' input_expand'}
                    maxLength="30"
                    onChange={e => {
                      this.setState({ input_first: e.target.value });
                      if (this.props.id == 'first' || this.props.id == 'second' || this.props.id == 'third' || this.props.id == 'fourth') {
                        this.props.dispatch({ type: 'drug_brand', payload1: this.props.id, payload2: { value: e.target.value, label: e.target.value } });
                      }
                    }}
                    placeholder="write your drug"
                  />
                </div>
              )}
              <p className="inline">Drug not found</p>
              <input className="inline" type="checkbox" checked={this.state.first_check} onChange={() => this.setState({ first_check: !this.state.first_check })} />
            </div>
            <div className="col-sm-3 bootstrap_col_modification">
              <p className="inline">Dosage (total daily mg)</p>
              <select
                name="dosage"
                className={this.findAppropriateClassDosage(this.props.id)}
                defaultValue={this.findAppropriateDosageValue(this.props.id) || ''}
                onChange={e => {
                  if (this.props.id == 'first' || this.props.id == 'second' || this.props.id == 'third' || this.props.id == 'fourth') {
                    this.props.dispatch({ type: 'dosage', payload1: this.props.id, payload2: e.target.value });
                  }
                }}>
                <option value="" style={{ display: 'none' }} defaultValue="selected" label="choose dosage" />
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="45">45</option>
                <option value="60">60</option>
                <option value="75">75</option>
                <option value="80">80</option>
                <option value="100">100</option>
                <option value="120">120</option>
                <option value="160">160</option>
                <option value="+160">+160</option>
              </select>
              <p className="">Duration of treatment (from therapy start till today)</p>
              <input
                className={this.props.validation + this.findAppropriateClassDuration(this.props.id)}
                style={{ marginBottom: 7, width: 40 }}
                type="text"
                defaultValue={this.findAppropriateDurationValue(this.props.id) || ''}
                onChange={e => {
                  if (this.props.id == 'first' || this.props.id == 'second' || this.props.id == 'third' || this.props.id == 'fourth') {
                    this.props.dispatch({ type: 'duration', payload1: this.props.id, payload2: e.target.value });
                  }
                }}
                maxLength="4"
              />
              <div className={'inline' + this.findAppropriateClassGlobaltime(this.props.id)}>
                <span
                  className={
                    this.findAppropriateGlobaltimeValue(this.props.id)
                      ? this.findAppropriateGlobaltimeValue(this.props.id)[0] ? 'radio_clicked_input' : 'radio_normal_input'
                      : 'radio_normal_input'
                  }
                  onClick={() => this.onRadio('global_day')}>
                  Day
                </span>
                <span
                  className={
                    this.findAppropriateGlobaltimeValue(this.props.id)
                      ? this.findAppropriateGlobaltimeValue(this.props.id)[1] ? 'radio_clicked_input' : 'radio_normal_input'
                      : 'radio_normal_input'
                  }
                  onClick={() => this.onRadio('global_week')}>
                  Week
                </span>
                <span
                  className={
                    this.findAppropriateGlobaltimeValue(this.props.id)
                      ? this.findAppropriateGlobaltimeValue(this.props.id)[2] ? 'radio_clicked_input' : 'radio_normal_input'
                      : 'radio_normal_input'
                  }
                  onClick={() => this.onRadio('global_month')}>
                  Month
                </span>
                <span
                  className={
                    this.findAppropriateGlobaltimeValue(this.props.id)
                      ? this.findAppropriateGlobaltimeValue(this.props.id)[3] ? 'radio_clicked_input' : 'radio_normal_input'
                      : 'radio_normal_input'
                  }
                  onClick={() => this.onRadio('global_year')}>
                  Year
                </span>
              </div>
            </div>
            <div className="col-sm-3 bootstrap_col_modification">
              <p className="inline">Daily usage (using continuously for the entered duration)</p>
              <div className={'inline' + this.findAppropriateClassDaily(this.props.id)}>
                <span
                  className={
                    this.findAppropriateDailyUsageValue(this.props.id)
                      ? this.findAppropriateDailyUsageValue(this.props.id)[0] ? 'radio_clicked_input' : 'radio_normal_input'
                      : 'radio_normal_input'
                  }
                  onClick={() => this.onRadio('daily_first')}>
                  YES
                </span>
                <span
                  className={
                    this.findAppropriateDailyUsageValue(this.props.id)
                      ? this.findAppropriateDailyUsageValue(this.props.id)[1] ? 'radio_clicked_input' : 'radio_normal_input'
                      : 'radio_normal_input'
                  }
                  onClick={() => this.onRadio('daily_second')}>
                  NO
                </span>
                <span
                  className={
                    this.findAppropriateDailyUsageValue(this.props.id)
                      ? this.findAppropriateDailyUsageValue(this.props.id)[2] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                      : 'radio_normal_input'
                  }
                  onClick={() => this.onRadio('daily_third')}>
                  Unknown
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
