import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import * as user from './Functions.js';
@connect(store => {
  return {
    sides: store.sides
  };
})
export default class Sides extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      general_check: false,
      open_input: false,
      disease_general: undefined,
      first_check: false,
      second_check: false,
      third_check: false,
      fourth_check: false,
      input_first: undefined,
      input_second: undefined,
      input_third: undefined,
      input_fourth: undefined
    };
  }
  componentDidMount() {
    document.querySelector('#side_effects').scrollIntoView();
  }
  findAppropriateCheckbox(val) {
    if (val == 'side_effect1') {
      return this.state.first_check;
    }
    if (val == 'side_effect2') {
      return this.state.second_check;
    }
    if (val == 'side_effect3') {
      return this.state.third_check;
    }
    if (val == 'side_effect4') {
      return this.state.fourth_check;
    }
  }
  findAppropriateSideEffect(val) {
    if (val == 'side_effect1') {
      return this.state.input_first;
    }
    if (val == 'side_effect2') {
      return this.state.input_second;
    }
    if (val == 'side_effect3') {
      return this.state.input_third;
    }
    if (val == 'side_effect4') {
      return this.state.input_fourth;
    }
  }
  findAppropriateChangeState(val) {
    if (val == 'side_effect1') {
      this.setState({ first_check: !this.state.first_check });
    }
    if (val == 'side_effect2') {
      this.setState({ second_check: !this.state.second_check });
    }
    if (val == 'side_effect3') {
      this.setState({ third_check: !this.state.third_check });
    }
    if (val == 'side_effect4') {
      this.setState({ fourth_check: !this.state.fourth_check });
    }
  }
  onChangeCheck(val) {
    if (val === 'general') this.setState({ general_check: !this.state.general_check });
    if (val === 'disease_input') this.setState({ open_input: !this.state.open_input, disease_general: undefined });
  }
  generalInputBox(option, value_input) {
    return (
      <div>
        <p>Select side effects associated to your PPIs</p>
        <Select
          name="side_general"
          className={'widing' + this.props.input_one}
          value={this.props.sides.side_effect_general}
          options={user.pushToObject(option.sort())}
          searchable={true}
          multi={true}
          onChange={e => this.props.dispatch({ type: 'side_general', payload: e })} //ovu funckije moras van izrokat
        />
        <p className="inline">Side effect not found?</p>
        <input className="inline" type="checkbox" checked={this.state.open_input} onChange={this.onChangeCheck.bind(this, 'disease_input')} />
        {this.state.open_input === false ? (
          <span />
        ) : (
          <div>
            <p />{' '}
            <input
              className={user.isValidString(this.state.disease_general) + ' input_expand'}
              type="text"
              value={value_input || ''}
              onChange={e => this.setState({ disease_general: e.target.value })}
              placeholder="write your side effect"
              maxLength="60"
            />
            <button
              className="confirm_button_alternative"
              onClick={() => {
                user.updateSelect(this.props.sides.side_effect_general, 'side_general', this.state.disease_general);
                this.setState({ disease_general: '' });
              }}>
              Confirm
            </button>
          </div>
        )}
      </div>
    );
  }
  dinamicInputBox(generic, brand, option, side_name, prop_value, checkit, state_0, class_color) {
    if (generic != null) {
      return (
        <div className="row">
          <div className="col-sm-4">
            <p className="inline">{generic}</p>
            <p className="inline">-</p>
            <p className="inline">{brand != null ? user.capitalizeFirst(brand) : 'unknown brand'}</p>
          </div>
          <div className="col-sm-4">
            <Select
              name="side"
              className={'widing' + class_color}
              value={prop_value}
              options={user.pushToObject(option.sort())}
              searchable={true}
              multi={true}
              onChange={e => this.props.dispatch({ type: side_name, payload: e })} //ovu funckije moras van izrokat
            />
            <p className="inline">Side effect not found</p>
            <input
              className="inline"
              type="checkbox"
              checked={this.findAppropriateCheckbox.call(this, side_name)}
              onChange={this.findAppropriateChangeState.bind(this, side_name)}
            />
            {checkit === false ? (
              <span />
            ) : (
              <div>
                <p />{' '}
                <input
                  className={user.isValidString(this.findAppropriateSideEffect.call(this, side_name)) + ' input_expand'}
                  type="text"
                  value={this.findAppropriateSideEffect.call(this, side_name) || ''}
                  maxLength="60"
                  onChange={e => {
                    if (side_name == 'side_effect1') {
                      this.setState({ input_first: e.target.value });
                    }
                    if (side_name == 'side_effect2') {
                      this.setState({ input_second: e.target.value });
                    }
                    if (side_name == 'side_effect3') {
                      this.setState({ input_third: e.target.value });
                    }
                    if (side_name == 'side_effect4') {
                      this.setState({ input_fourth: e.target.value });
                    }
                  }}
                  placeholder="write your side effect"
                />
                <button
                  className="confirm_button_alternative"
                  onClick={() => {
                    user.updateSelect(prop_value, side_name, state_0);
                    this.setState({ input_first: '' });
                  }}>
                  Confirm
                </button>
              </div>
            )}
          </div>
          <div className="col-sm-4" />
        </div>
      );
    } else {
      return '';
    }
  }
  onRadio(val) {
    if (val === 'first') {
      this.props.dispatch({ type: 'radio_sides', payload: [true, false, false] });
    }
    if (val === 'second') {
      this.props.dispatch({ type: 'radio_sides', payload: [false, true, false] });
    }
    if (val === 'third') {
      this.props.dispatch({ type: 'radio_sides', payload: [false, false, true] });
    }
  }
  displaySides(options) {
    return (
      <div>
        {this.state.general_check === false
          ? this.dinamicInputBox(
              this.props.generic1,
              this.props.brand1,
              options,
              'side_effect1',
              this.props.sides.effect1,
              this.state.first_check,
              this.state.input_first,
              this.props.input_error1
            )
          : ''}
        {this.state.general_check === false
          ? this.dinamicInputBox(
              this.props.generic2,
              this.props.brand2,
              options,
              'side_effect2',
              this.props.sides.effect2,
              this.state.second_check,
              this.state.input_second,
              this.props.input_error2
            )
          : ''}
        {this.state.general_check === false
          ? this.dinamicInputBox(
              this.props.generic3,
              this.props.brand3,
              options,
              'side_effect3',
              this.props.sides.effect3,
              this.state.third_check,
              this.state.input_third,
              this.props.input_error3
            )
          : ''}
        {this.state.general_check === false
          ? this.dinamicInputBox(
              this.props.generic4,
              this.props.brand4,
              options,
              'side_effect4',
              this.props.sides.effect4,
              this.state.fourth_check,
              this.state.input_fourth,
              this.props.input_error4
            )
          : ''}
        <p className="inline">Write your side effects in just one input box?</p>
        <input className="inline" type="checkbox" checked={this.state.general_check} onChange={this.onChangeCheck.bind(this, 'general')} />
        {this.state.general_check ? this.generalInputBox(options, this.state.disease_general) : ''}
      </div>
    );
  }
  render() {
    var array_sides = [
      'Diarrhea',
      'Constipation',
      'Abdominal pain',
      'Flatulence (gas)',
      'Fever',
      'Vomiting',
      'Nausea',
      'Rash',
      'Bloating',
      'Nephritis',
      'Drowsiness',
      'Dizziness',
      'Anxiety',
      'Alergy',
      'Muscle ache',
      'Back pain',
      'Headache',
      'Dementia',
      'Chest pain',
      'Burning pain',
      'Tinnitus',
      'Hypochloridia',
      'Muscle cramp',
      'Brain fog',
      'Chest tightness',
      'Blurred vision',
      'Fatigue',
      'Burning feet',
      'Concetration problem',
      'Hunger',
      'Thirst',
      'Muscle twitch',
      'Confusion',
      'Light sensitivity',
      'Tachycardia',
      'Hypertension',
      'Anemia',
      'Sinusitis',
      'Insomnia',
      'Bone pain',
      'Weakness',
      'Pneumonia',
      'General pain',
      'Weight gain',
      'Gallbladder infection',
      'Shortness of breath',
      'Muscle tremor',
      'Itching',
      'Metal taste',
      'Upper body pain',
      'Neck pain',
      'Blisters on body',
      'Mouth problems',
      'Runny nose',
      'Tongue ulcers',
      'Stomach pain',
      'Panic attack',
      'Lightheaded',
      'Nasal congestion',
      'Hair fall',
      'Heart problems',
      'Double  vision',
      'Lump in throat',
      'Mood change',
      'Depression',
      'Belching',
      'Hard stomach',
      'Gas',
      'Numbness',
      'Irregular breathing',
      'Sweating',
      'Nightmares',
      'Loose bowels',
      'Flu like symptoms',
      'Appetite loss',
      'Tingling',
      'Dry eyes',
      'Dry mouth',
      'Swelling',
      'Joint pain',
      'Swollen feet',
      'Feeling unwell',
      'Breast pain',
      'Hearing loss',
      'Hiccups',
      'Stomach spasms',
      'Urination problems',
      'Hair thinning',
      'Sore throat',
      'Palpitation',
      'Feeling sick',
      'Digestion problems',
      'Swallowing problems',
      'Halucination',
      'Liver problem',
      'Blood in urine',
      'Teeth problem',
      'leg pain',
      'Finger pain',
      'Jaw pain',
      'Stomach polyps',
      'Infection',
      'Hip pain',
      'Muscle weakness',
      'Weight loss',
      'Memory problem',
      'Voice problems',
      'Vision problem',
      'Skin problem',
      'Blood sugar',
      'Thyroid problem',
      'Lung problem',
      'Gut problems',
      'Irregular heart rythm',
      'Grey hair',
      'low energy',
      'Nail problem',
      'Cramp',
      'Neuropathy',
      'Stomach cramp',
      'Spine problem',
      'Elbow pain',
      'Shoulder pain',
      'Knee pain',
      'Stiffness',
      'Ankle pain',
      'Cough',
      'Taste problem',
      'Tender stomach'
    ];
    return (
      <div>
        <div className="row" id="side_effects" style={{ marginBottom: 7 }}>
          <h3>Side effects</h3>

          <p className="inline">Did you experience any side effects while on PPIs?</p>
          <div className={'inline' + this.props.radio}>
            <span
              className={
                this.props.sides.radio_side != undefined ? (this.props.sides.radio_side[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'
              }
              onClick={() => this.onRadio('first')}>
              YES
            </span>
            <span
              className={
                this.props.sides.radio_side != undefined ? (this.props.sides.radio_side[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'
              }
              onClick={() => this.onRadio('second')}>
              NO
            </span>
            <span
              className={
                this.props.sides.radio_side != undefined
                  ? this.props.sides.radio_side[2] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                  : 'radio_normal_input cancel_margin_last'
              }
              onClick={() => this.onRadio('third')}>
              I don&#39;t know
            </span>
          </div>
        </div>
        {this.props.sides.radio_side != undefined ? (this.props.sides.radio_side[0] === true ? this.displaySides.call(this, array_sides) : '') : ''}
      </div>
    );
  }
}
