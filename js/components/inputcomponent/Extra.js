import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';

@connect(store => {
  return {
    extra: store.extra
  };
})
export default class Extra extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rebound_checked: false };
  }
  additionalQuestion() {
    return (
      <div>
        <p className="sub_question">Did you experience acid rebound?</p>
        <div className={'inline move_extra_div_up' + this.props.arebound} style={{ marginLeft: 15 }}>
          <span
            className={this.props.extra.a_rebound != undefined ? (this.props.extra.a_rebound[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_a_rebound')}>
            Yes
          </span>
          <span
            className={
              this.props.extra.a_rebound != undefined
                ? this.props.extra.a_rebound[1] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('second_a_rebound')}>
            No
          </span>
        </div>
      </div>
    );
  }
  onRadio(val) {
    if (val === 'first_a_rebound') {
      this.props.dispatch({ type: 'a_rebound', payload: [true, false] });
    } else if (val === 'second_a_rebound') {
      this.props.dispatch({ type: 'a_rebound', payload: [false, true] });
    }
    if (val === 'first_pylori') {
      this.props.dispatch({ type: 'pylori', payload: [true, false, false] });
    } else if (val === 'second_pylori') {
      this.props.dispatch({ type: 'pylori', payload: [false, true, false] });
    } else if (val === 'third_pylori') {
      this.props.dispatch({ type: 'pylori', payload: [false, false, true] });
    }
    if (val === 'first_exercise') {
      this.props.dispatch({ type: 'exercise', payload: [true, false, false, false, false] });
    } else if (val === 'second_exercise') {
      this.props.dispatch({ type: 'exercise', payload: [false, true, false, false, false] });
    } else if (val === 'third_exercise') {
      this.props.dispatch({ type: 'exercise', payload: [false, false, true, false, false] });
    } else if (val === 'fourth_exercise') {
      this.props.dispatch({ type: 'exercise', payload: [false, false, false, true, false] });
    } else if (val === 'fifth_exercise') {
      this.props.dispatch({ type: 'exercise', payload: [false, false, false, false, true] });
    } else if (val === 'first_smoke') {
      this.props.dispatch({ type: 'smoke', payload: [true, false, false, false, false] });
    } else if (val === 'second_smoke') {
      this.props.dispatch({ type: 'smoke', payload: [false, true, false, false, false] });
    } else if (val === 'third_smoke') {
      this.props.dispatch({ type: 'smoke', payload: [false, false, true, false, false] });
    } else if (val === 'fourth_smoke') {
      this.props.dispatch({ type: 'smoke', payload: [false, false, false, true, false] });
    } else if (val === 'fifth_smoke') {
      this.props.dispatch({ type: 'smoke', payload: [false, false, false, false, true] });
    } else if (val === 'first_alcohol') {
      this.props.dispatch({ type: 'alcohol', payload: [true, false, false, false, false] });
    } else if (val === 'second_alcohol') {
      this.props.dispatch({ type: 'alcohol', payload: [false, true, false, false, false] });
    } else if (val === 'third_alcohol') {
      this.props.dispatch({ type: 'alcohol', payload: [false, false, true, false, false] });
    } else if (val === 'fourth_alcohol') {
      this.props.dispatch({ type: 'alcohol', payload: [false, false, false, true, false] });
    } else if (val === 'fifth_alcohol') {
      this.props.dispatch({ type: 'alcohol', payload: [false, false, false, false, true] });
    } else if (val === 'first_obesse') {
      this.props.dispatch({ type: 'obesse', payload: [true, false, false, false] });
    } else if (val === 'second_obesse') {
      this.props.dispatch({ type: 'obesse', payload: [false, true, false, false] });
    } else if (val === 'third_obesse') {
      this.props.dispatch({ type: 'obesse', payload: [false, false, true, false] });
    } else if (val === 'fourth_obesse') {
      this.props.dispatch({ type: 'obesse', payload: [false, false, false, true] });
    } else if (val === 'first_eat') {
      this.props.dispatch({ type: 'eat', payload: [true, false, false, false, false] });
    } else if (val === 'second_eat') {
      this.props.dispatch({ type: 'eat', payload: [false, true, false, false, false] });
    } else if (val === 'third_eat') {
      this.props.dispatch({ type: 'eat', payload: [false, false, true, false, false] });
    } else if (val === 'fourth_eat') {
      this.props.dispatch({ type: 'eat', payload: [false, false, false, true, false] });
    } else if (val === 'fifth_eat') {
      this.props.dispatch({ type: 'eat', payload: [false, false, false, false, true] });
    } else if (val === 'first_stress') {
      this.props.dispatch({ type: 'stress', payload: [true, false, false, false, false] });
    } else if (val === 'second_stress') {
      this.props.dispatch({ type: 'stress', payload: [false, true, false, false, false] });
    } else if (val === 'third_stress') {
      this.props.dispatch({ type: 'stress', payload: [false, false, true, false, false] });
    } else if (val === 'fourth_stress') {
      this.props.dispatch({ type: 'stress', payload: [false, false, false, true, false] });
    } else if (val === 'fifth_stress') {
      this.props.dispatch({ type: 'stress', payload: [false, false, false, false, true] });
    }
    if (val === 'first_familly') {
      this.props.dispatch({ type: 'familly', payload: [true, false, false] });
    } else if (val === 'second_familly') {
      this.props.dispatch({ type: 'familly', payload: [false, true, false] });
    } else if (val === 'third_familly') {
      this.props.dispatch({ type: 'familly', payload: [false, false, true] });
    } else if (val === 'first_anxiety') {
      this.props.dispatch({ type: 'anxiety', payload: [true, false, false, false] });
    } else if (val === 'second_anxiety') {
      this.props.dispatch({ type: 'anxiety', payload: [false, true, false, false] });
    } else if (val === 'third_anxiety') {
      this.props.dispatch({ type: 'anxiety', payload: [false, false, true, false] });
    } else if (val === 'fourth_anxiety') {
      this.props.dispatch({ type: 'anxiety', payload: [false, false, false, true] });
    } else if (val === 'first_gluten') {
      this.props.dispatch({ type: 'gluten', payload: [true, false, false] });
    } else if (val === 'second_gluten') {
      this.props.dispatch({ type: 'gluten', payload: [false, true, false] });
    } else if (val === 'third_gluten') {
      this.props.dispatch({ type: 'gluten', payload: [false, false, true] });
    } else if (val === 'first_lactose') {
      this.props.dispatch({ type: 'lactose', payload: [true, false, false] });
    } else if (val === 'second_lactose') {
      this.props.dispatch({ type: 'lactose', payload: [false, true, false] });
    } else if (val === 'third_lactose') {
      this.props.dispatch({ type: 'lactose', payload: [false, false, true] });
    } else if (val === 'first_acid') {
      this.props.dispatch({ type: 'acid', payload: [true, false, false, false] });
    } else if (val === 'second_acid') {
      this.props.dispatch({ type: 'acid', payload: [false, true, false, false] });
    } else if (val === 'third_acid') {
      this.props.dispatch({ type: 'acid', payload: [false, false, true, false] });
    } else if (val === 'fourth_acid') {
      this.props.dispatch({ type: 'acid', payload: [false, false, false, true] });
    } else if (val === 'first_overall') {
      this.props.dispatch({ type: 'overall', payload: [true, false, false, false, false] });
    } else if (val === 'second_overall') {
      this.props.dispatch({ type: 'overall', payload: [false, true, false, false, false] });
    } else if (val === 'third_overall') {
      this.props.dispatch({ type: 'overall', payload: [false, false, true, false, false] });
    } else if (val === 'fourth_overall') {
      this.props.dispatch({ type: 'overall', payload: [false, false, false, true, false] });
    } else if (val === 'fifth_overall') {
      this.props.dispatch({ type: 'overall', payload: [false, false, false, false, true] });
    } else if (val === 'first_good') {
      this.props.dispatch({ type: 'good', payload: [true, false, false, false] });
    } else if (val === 'second_good') {
      this.props.dispatch({ type: 'good', payload: [false, true, false, false] });
    } else if (val === 'third_good') {
      this.props.dispatch({ type: 'good', payload: [false, false, true, false] });
    } else if (val === 'fourth_good') {
      this.props.dispatch({ type: 'good', payload: [false, false, false, true] });
    }
  }
  render() {
    var options = [{ value: 'one', label: 'One' }, { value: 'two', label: 'Two' }];
    return (
      <div className="row" id="extra_info">
        <h3>Extra info</h3>
        <p className="extra_question">Do/did you have H.Pylori?</p>
        <div className={'inline move_extra_div_up' + this.props.pylori}>
          <span
            className={this.props.extra.pylori != undefined ? (this.props.extra.pylori[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_pylori')}>
            Yes
          </span>
          <span
            className={this.props.extra.pylori != undefined ? (this.props.extra.pylori[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_pylori')}>
            No
          </span>
          <span
            className={
              this.props.extra.pylori != undefined
                ? this.props.extra.pylori[2] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('third_pylori')}>
            I don&#39;t know
          </span>
        </div>
        <p className="extra_question">Do you exercise?</p>
        <div className={'inline move_extra_div_up' + this.props.exercise}>
          <span
            className={this.props.extra.exercise != undefined ? (this.props.extra.exercise[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_exercise')}>
            Daily
          </span>
          <span
            className={this.props.extra.exercise != undefined ? (this.props.extra.exercise[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_exercise')}>
            Few times per week
          </span>
          <span
            className={this.props.extra.exercise != undefined ? (this.props.extra.exercise[2] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('third_exercise')}>
            Few times per month
          </span>
          <span
            className={this.props.extra.exercise != undefined ? (this.props.extra.exercise[3] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('fourth_exercise')}>
            Few times per year
          </span>
          <span
            className={
              this.props.extra.exercise != undefined
                ? this.props.extra.exercise[4] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('fifth_exercise')}>
            Never
          </span>
        </div>
        <p className="extra_question">Do you smoke?</p>
        <div className={'inline move_extra_div_up' + this.props.smoke}>
          <span
            className={this.props.extra.smoke != undefined ? (this.props.extra.smoke[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_smoke')}>
            Daily
          </span>
          <span
            className={this.props.extra.smoke != undefined ? (this.props.extra.smoke[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_smoke')}>
            Few times per week
          </span>
          <span
            className={this.props.extra.smoke != undefined ? (this.props.extra.smoke[2] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('third_smoke')}>
            Few times per month
          </span>
          <span
            className={this.props.extra.smoke != undefined ? (this.props.extra.smoke[3] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('fourth_smoke')}>
            Few times per year
          </span>
          <span
            className={
              this.props.extra.smoke != undefined
                ? this.props.extra.smoke[4] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('fifth_smoke')}>
            Never
          </span>
        </div>
        <p className="extra_question">Do you drink alcohol?</p>
        <div className={'inline move_extra_div_up' + this.props.alcohol}>
          <span
            className={this.props.extra.alcohol != undefined ? (this.props.extra.alcohol[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_alcohol')}>
            Daily
          </span>
          <span
            className={this.props.extra.alcohol != undefined ? (this.props.extra.alcohol[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_alcohol')}>
            Few times per week
          </span>
          <span
            className={this.props.extra.alcohol != undefined ? (this.props.extra.alcohol[2] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('third_alcohol')}>
            Few times per month
          </span>
          <span
            className={this.props.extra.alcohol != undefined ? (this.props.extra.alcohol[3] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('fourth_alcohol')}>
            Few times per year
          </span>
          <span
            className={
              this.props.extra.alcohol != undefined
                ? this.props.extra.alcohol[4] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('fifth_alcohol')}>
            Never
          </span>
        </div>
        <p className="extra_question">Are you overweight/obesse?</p>
        <div className={'inline move_extra_div_up' + this.props.obesse}>
          <span
            className={this.props.extra.obesse != undefined ? (this.props.extra.obesse[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_obesse')}>
            Yes
          </span>
          <span
            className={this.props.extra.obesse != undefined ? (this.props.extra.obesse[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_obesse')}>
            No
          </span>
          <span
            className={this.props.extra.obesse != undefined ? (this.props.extra.obesse[2] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('third_obesse')}>
            A little
          </span>
          <span
            className={
              this.props.extra.obesse != undefined
                ? this.props.extra.obesse[3] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('fourth_obesse')}>
            I&#39;m not sure
          </span>
        </div>
        <p className="extra_question">Do you eat healthy?</p>
        <div className={'inline move_extra_div_up' + this.props.eat}>
          <span
            className={this.props.extra.eat != undefined ? (this.props.extra.eat[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_eat')}>
            Daily
          </span>
          <span
            className={this.props.extra.eat != undefined ? (this.props.extra.eat[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_eat')}>
            Few times per week
          </span>
          <span
            className={this.props.extra.eat != undefined ? (this.props.extra.eat[2] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('third_eat')}>
            Few times per month
          </span>
          <span
            className={this.props.extra.eat != undefined ? (this.props.extra.eat[3] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('fourth_eat')}>
            Few times a year
          </span>
          <span
            className={
              this.props.extra.eat != undefined
                ? this.props.extra.eat[4] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('fifth_eat')}>
            I rarely eat healthy
          </span>
        </div>
        <p className="extra_question">Are you under a lot of stress?</p>
        <div className={'inline move_extra_div_up' + this.props.stress}>
          <span
            className={this.props.extra.stress != undefined ? (this.props.extra.stress[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_stress')}>
            Yes
          </span>
          <span
            className={this.props.extra.stress != undefined ? (this.props.extra.stress[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_stress')}>
            No
          </span>
          <span
            className={this.props.extra.stress != undefined ? (this.props.extra.stress[2] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('third_stress')}>
            Sometimes
          </span>
          <span
            className={this.props.extra.stress != undefined ? (this.props.extra.stress[3] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('fourth_stress')}>
            I rarely get stressed
          </span>
          <span
            className={
              this.props.extra.stress != undefined
                ? this.props.extra.stress[4] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('fifth_stress')}>
            I&#39;m not sure
          </span>
        </div>
        <p className="extra_question">Has anyone in your familly ever had a gastrointestinal disorder/disease?</p>
        <div className={'inline move_extra_div_up' + this.props.familly}>
          <span
            className={this.props.extra.familly != undefined ? (this.props.extra.familly[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_familly')}>
            Yes
          </span>
          <span
            className={this.props.extra.familly != undefined ? (this.props.extra.familly[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_familly')}>
            No
          </span>
          <span
            className={
              this.props.extra.familly != undefined
                ? this.props.extra.familly[2] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('third_familly')}>
            I don&#39;t know
          </span>
        </div>
        <p className="extra_question">Do you have some kind of anxiety disorder?</p>
        <div className={'inline move_extra_div_up' + this.props.anxiety}>
          <span
            className={this.props.extra.anxiety != undefined ? (this.props.extra.anxiety[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_anxiety')}>
            Yes
          </span>
          <span
            className={this.props.extra.anxiety != undefined ? (this.props.extra.anxiety[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_anxiety')}>
            No
          </span>
          <span
            className={this.props.extra.anxiety != undefined ? (this.props.extra.anxiety[2] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('third_anxiety')}>
            Maybe
          </span>
          <span
            className={
              this.props.extra.anxiety != undefined
                ? this.props.extra.anxiety[3] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('fourth_anxiety')}>
            I don&#39;t know
          </span>
        </div>
        <p className="extra_question">Are you gluten sensitive?</p>
        <div className={'inline move_extra_div_up' + this.props.gluten}>
          <span
            className={this.props.extra.gluten != undefined ? (this.props.extra.gluten[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_gluten')}>
            Yes
          </span>
          <span
            className={this.props.extra.gluten != undefined ? (this.props.extra.gluten[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_gluten')}>
            No
          </span>
          <span
            className={
              this.props.extra.gluten != undefined
                ? this.props.extra.gluten[2] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('third_gluten')}>
            I don&#39;t know
          </span>
        </div>
        <p className="extra_question">Are you lactose intolerant?</p>
        <div className={'inline move_extra_div_up' + this.props.lactose}>
          <span
            className={this.props.extra.lactose != undefined ? (this.props.extra.lactose[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_lactose')}>
            Yes
          </span>
          <span
            className={this.props.extra.lactose != undefined ? (this.props.extra.lactose[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_lactose')}>
            No
          </span>
          <span
            className={
              this.props.extra.lactose != undefined
                ? this.props.extra.lactose[2] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('third_lactose')}>
            I don&#39;t know
          </span>
        </div>
        <p className="extra_question">Are you able to substitute your drug with another less potent acid reducer?</p>
        <div className={'inline move_extra_div_up' + this.props.acid}>
          <span
            className={this.props.extra.acid != undefined ? (this.props.extra.acid[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_acid')}>
            Yes
          </span>
          <span
            className={this.props.extra.acid != undefined ? (this.props.extra.acid[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_acid')}>
            No
          </span>
          <span
            className={this.props.extra.acid != undefined ? (this.props.extra.acid[2] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('third_acid')}>
            Sometimes
          </span>
          <span
            className={
              this.props.extra.acid != undefined
                ? this.props.extra.acid[3] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('fourth_acid')}>
            I don&#39;t know
          </span>
        </div>
        <p className="extra_question">
          Were you able to get off the drug (PPIs) completely? <span>(optional)</span>
        </p>
        <div className={'inline move_extra_div_up' + this.props.good}>
          <span
            className={this.props.extra.good != undefined ? (this.props.extra.good[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => {
              this.onRadio('first_good');
              this.setState({ rebound_checked: true });
            }}>
            Yes
          </span>
          <span
            className={this.props.extra.good != undefined ? (this.props.extra.good[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => {
              this.onRadio('second_good');
              this.setState({ rebound_checked: false });
            }}>
            No
          </span>
          <span
            className={this.props.extra.good != undefined ? (this.props.extra.good[2] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => {
              this.onRadio('third_good');
              this.setState({ rebound_checked: true });
            }}>
            Somehow
          </span>
          <span
            className={
              this.props.extra.good != undefined
                ? this.props.extra.good[3] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => {
              this.onRadio('fourth_good');
              this.setState({ rebound_checked: false });
            }}>
            I don&#39;t know
          </span>
        </div>
        {this.state.rebound_checked ? this.additionalQuestion() : ''}
        <p className="extra_question">How would you rate your overall experience with PPIs?</p>
        <div className={'inline move_extra_div_up' + this.props.overall}>
          <span
            className={this.props.extra.overall != undefined ? (this.props.extra.overall[0] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('first_overall')}>
            Very satisfied
          </span>
          <span
            className={this.props.extra.overall != undefined ? (this.props.extra.overall[1] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('second_overall')}>
            Satisfied
          </span>
          <span
            className={this.props.extra.overall != undefined ? (this.props.extra.overall[2] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('third_overall')}>
            Good
          </span>
          <span
            className={this.props.extra.overall != undefined ? (this.props.extra.overall[3] ? 'radio_clicked_input' : 'radio_normal_input') : 'radio_normal_input'}
            onClick={() => this.onRadio('fourth_overall')}>
            Poor
          </span>
          <span
            className={
              this.props.extra.overall != undefined
                ? this.props.extra.overall[4] ? 'radio_clicked_input' : 'radio_normal_input cancel_margin_last'
                : 'radio_normal_input cancel_margin_last'
            }
            onClick={() => this.onRadio('fifth_overall')}>
            Horrible drug
          </span>
        </div>
      </div>
    );
  }
}
