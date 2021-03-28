import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';

import About from './About.js';
import Basic from './Basic.js';
import Condition from './Condition.js';
import Drug from './Drug.js';
import Sides from './Sides.js';
import Other from './Other.js';
import Nutrient from './Nutrient.js';
import Natural from './Naturalremedies.js';
import Extra from './Extra.js';
import Button from './Buttondefault.js';
import Success from './Buttonsuccess.js';
import Navbar from '../Navbar.js';
import Navfooter from '../Navfooter.js';

import * as conversion from './SubmitDatabase.js';
import * as user from './Functions.js';

import axios from 'axios';

@connect(store => {
  return {
    data_input: store.data_input,
    basic: store.basic,
    condition: store.condition,
    drug: store.drug,
    sides: store.sides,
    nutrient: store.nutrient,
    natural: store.natural,
    extra: store.extra,
    other: store.other,
    getId: store.getId
  };
})
export default class Inputform extends React.Component {
  // REFACOTR UNDEFINED TO A METHOD
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = {
      add_drug_one: false,
      add_drug_two: false,
      add_drug_three: false,
      add_drug_four: false,
      success: false,
      clicked: false,
      new_success: false,
      clicked2: false,
      final_success: false,
      warning_clicked: false,
      proceed_main_clicked: false,
      mgcondition: { marginTop: 0 },
      ajax_call: true,
      data_in_database: false,
      text_in_database: false,
      required_data1: false,
      required_data2: false
    };
  }

  updateDimensions() {
    if (window.innerWidth < 992) {
      this.setState({ mgcondition: { marginTop: 22 } });
    } else if (window.innerWidth >= 992) {
      this.setState({ mgcondition: { marginTop: 0 } });
    }
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.updateDimensions();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }
  componentDidUpdate() {}

  successConfirm() {
    var gender_radio, race_radio, height_sel, weight_sel;

    gender_radio = this.props.basic.gender;
    race_radio = this.props.basic.race;
    height_sel = this.props.basic.height_select;
    weight_sel = this.props.basic.weight_select;

    //finalize
    if (
      this.props.basic.age != undefined &&
      this.props.basic.age.length != 0 &&
      user.isValidInteger(this.props.basic.age, 0, 110) != 'error_red' &&
      (this.props.basic.weight != undefined && this.props.basic.weight.length != 0 && user.isValidInteger(this.props.basic.weight, 0, 1000) != 'error_red') &&
      (this.props.basic.height != undefined && this.props.basic.height.length != 0 && user.isValidInteger(this.props.basic.height, 0, 300) != 'error_red') &&
      gender_radio != undefined &&
      race_radio != undefined &&
      height_sel != undefined &&
      weight_sel != undefined &&
      (this.props.condition.gastro != undefined && this.props.condition.gastro.length != 0) &&
      this.props.drug.generic1 != null &&
      this.props.drug.dosage1 !== undefined &&
      (this.props.drug.duration1 !== undefined && this.props.drug.duration1 != '' && user.isValidInteger(this.props.drug.duration1, 0, 400) != 'error_red') &&
      this.props.drug.globaltime1 !== undefined &&
      this.props.drug.daily1 !== undefined
    ) {
      if (this.state.add_drug_one) {
        if (
          this.props.drug.generic2 != null &&
          this.props.drug.dosage2 !== undefined &&
          (this.props.drug.duration2 !== undefined && this.props.drug.duration2 != '' && user.isValidInteger(this.props.drug.duration2, 0, 400) != 'error_red') &&
          this.props.drug.globaltime2 !== undefined &&
          this.props.drug.daily2 !== undefined
        ) {
          if (this.state.add_drug_two) {
            if (
              this.props.drug.generic3 != null &&
              this.props.drug.dosage3 !== undefined &&
              (this.props.drug.duration3 !== undefined && this.props.drug.duration3 != '' && user.isValidInteger(this.props.drug.duration3, 0, 400) != 'error_red') &&
              this.props.drug.globaltime3 !== undefined &&
              this.props.drug.daily3 !== undefined
            ) {
              if (this.state.add_drug_three) {
                if (
                  this.props.drug.generic4 != null &&
                  this.props.drug.dosage4 !== undefined &&
                  (this.props.drug.duration4 !== undefined && this.props.drug.duration4 != '' && user.isValidInteger(this.props.drug.duration4, 0, 400) != 'error_red') &&
                  this.props.drug.globaltime4 !== undefined &&
                  this.props.drug.daily4 !== undefined
                ) {
                  if (this.state.add_drug_three || this.state.add_drug_four) {
                    this.setState({ required_data1: false, new_success: true, success: false, warning_clicked: false, clicked: true });
                  } else {
                    this.setState({ required_data1: false, success: true, clicked: true });
                  }
                } else {
                  this.setState({ required_data1: true, clicked: true });
                }
              } else {
                if (this.state.add_drug_three || this.state.add_drug_four) {
                  this.setState({ required_data1: false, new_success: true, success: false, warning_clicked: false, clicked: true });
                } else {
                  this.setState({ required_data1: false, success: true, clicked: true });
                }
              }
            } else {
              this.setState({ required_data1: true, clicked: true });
            }
          } else {
            if (this.state.add_drug_three || this.state.add_drug_four) {
              this.setState({ required_data1: false, new_success: true, success: false, warning_clicked: false, clicked: true });
            } else {
              this.setState({ required_data1: false, success: true, clicked: true });
            }

            //success first row
          }
        } else {
          this.setState({ required_data1: true, clicked: true });
        }
      } else {
        if (this.state.add_drug_three || this.state.add_drug_four) {
          this.setState({ required_data1: false, new_success: true, success: false, warning_clicked: false, clicked: true });
        } else {
          this.setState({ required_data1: false, success: true, clicked: true });
        }

        //success first row
      }
    } else {
      this.setState({ required_data1: true, clicked: true });

      //fail first row
    }
  }

  whichOneReturn() {
    var counter = 0;
    if (this.props.drug.generic1 != undefined) {
      counter++;
    }
    if (this.props.drug.generic2 != undefined) {
      counter++;
    }
    if (this.props.drug.generic3 != undefined) {
      counter++;
    }
    if (this.props.drug.generic4 != undefined) {
      counter++;
    }
    if (counter === 1) {
      if (this.props.sides.effect1 != undefined && this.props.sides.effect1 != '') {
        return true;
      } else {
        return false;
      }
    } else if (counter === 2) {
      if (this.props.sides.effect1 != undefined && this.props.sides.effect1 != '' && (this.props.sides.effect2 != undefined && this.props.sides.effect2 != '')) {
        return true;
      } else {
        return false;
      }
    } else if (counter === 3) {
      if (
        this.props.sides.effect1 != undefined &&
        this.props.sides.effect1 != '' &&
        (this.props.sides.effect2 != undefined && this.props.sides.effect2 != '') &&
        (this.props.sides.effect3 != undefined && this.props.sides.effect3 != '')
      ) {
        return true;
      } else {
        return false;
      }
    } else if (counter === 4) {
      if (
        this.props.sides.effect1 != undefined &&
        this.props.sides.effect1 != '' &&
        (this.props.sides.effect2 != undefined && this.props.sides.effect2 != '') &&
        (this.props.sides.effect3 != undefined && this.props.sides.effect3 != '') &&
        (this.props.sides.effect4 != undefined && this.props.sides.effect4 != '')
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
  extraReturnTrue() {
    if (
      this.props.extra.exercise != undefined &&
      this.props.extra.smoke != undefined &&
      this.props.extra.alcohol != undefined &&
      this.props.extra.obesse != undefined &&
      this.props.extra.eat != undefined &&
      this.props.extra.stress != undefined &&
      this.props.extra.anxiety != undefined &&
      this.props.extra.familly != undefined &&
      this.props.extra.gluten != undefined &&
      this.props.extra.lactose != undefined &&
      this.props.extra.acid != undefined &&
      this.props.extra.overall != undefined &&
      this.props.extra.pylori != undefined
    ) {
      return true;
    } else {
      return false;
    }
  }

  sendDataToDatabase() {
    // you have to send only appropriate data to database so do proper inline validation
    if (typeof this.props.getId.getLastId === 'undefined') {
      this.props
        .dispatch(user.getRequest('/medsforlife/ppi_input/get_last_id.php', 'get-max-id'))
        .then(() => {
          this.setState({ required_data1: false, final_success: false, ajax_call: false });
          let FK_id = this.props.getId.getLastId;
          user
            .postRequest(
              '/medsforlife/ppi_input/basic.php',
              FK_id,
              this.props.basic.age,
              this.props.basic.weight,
              this.props.basic.weight_select,
              this.props.basic.height,
              this.props.basic.height_select,
              conversion.genderValue(this.props.basic.gender),
              conversion.raceValue(this.props.basic.race)
            )
            .then(() => {
              user
                .postRequest(
                  '/medsforlife/ppi_input/all_other.php',
                  user.toNativeArray(this.props.condition.gastro),
                  user.toNativeArray(this.props.condition.other),
                  user.toNativeArray(this.props.condition.ppi),
                  FK_id,

                  user.createArray(this.props.drug.generic1, this.props.drug.generic2, this.props.drug.generic3, this.props.drug.generic4),
                  user.createArray(this.props.drug.brand1, this.props.drug.brand2, this.props.drug.brand3, this.props.drug.brand4),
                  user.createArray(this.props.drug.dosage1, this.props.drug.dosage2, this.props.drug.dosage3, this.props.drug.dosage4),
                  user.createArray(this.props.drug.duration1, this.props.drug.duration2, this.props.drug.duration3, this.props.drug.duration4),
                  user.createArray(
                    conversion.globalTime(this.props.drug.globaltime1),
                    conversion.globalTime(this.props.drug.globaltime2),
                    conversion.globalTime(this.props.drug.globaltime3),
                    conversion.globalTime(this.props.drug.globaltime4)
                  ),
                  user.createArray(
                    conversion.dailyUse(this.props.drug.daily1),
                    conversion.dailyUse(this.props.drug.daily2),
                    conversion.dailyUse(this.props.drug.daily3),
                    conversion.dailyUse(this.props.drug.daily4)
                  ),

                  user.removeArrayValues(conversion.radioSideEffects(this.props.sides.radio_side), user.toNativeArray(this.props.sides.side_effect_general)),
                  conversion.radioSideEffects(this.props.sides.radio_side),

                  user.removeArrayValues(conversion.radioOtherDrugs(this.props.other.radio_other), user.toNativeArray(this.props.other.otherdrug)),
                  conversion.radioOtherDrugs(this.props.other.radio_other),

                  user.removeArrayValues(conversion.radioNutrient(this.props.nutrient.radio_nutrient), user.toNativeArray(this.props.nutrient.nutrient)),
                  conversion.radioNutrient(this.props.nutrient.radio_nutrient),

                  user.toNativeArray(this.props.natural.naturalhelped),
                  user.toNativeArray(this.props.natural.naturalnothelped),

                  conversion.extraPylori(this.props.extra.pylori),
                  conversion.extraExercise(this.props.extra.exercise),
                  conversion.extraSmoke(this.props.extra.smoke),
                  conversion.extraAlcohol(this.props.extra.alcohol),
                  conversion.extraObese(this.props.extra.obesse),
                  conversion.extraEat(this.props.extra.eat),
                  conversion.extraStress(this.props.extra.stress),
                  conversion.extraFamily(this.props.extra.familly),
                  conversion.extraAnxiety(this.props.extra.anxiety),
                  conversion.extraGluten(this.props.extra.gluten),
                  conversion.extraLactose(this.props.extra.lactose),
                  conversion.extraAcid(this.props.extra.acid),
                  conversion.extraGood(this.props.extra.good),
                  conversion.extraAcidRebound(this.props.extra.a_rebound),
                  conversion.extraOverall(this.props.extra.overall)
                )
                .then(() => {
                  user
                    .postRequest(
                      '/medsforlife/ppi_input/side_effect_ppi_drug.php',
                      user.createArray(this.props.drug.generic1, this.props.drug.generic2, this.props.drug.generic3, this.props.drug.generic4).length,
                      user.removeArrayValues(conversion.radioSideEffects(this.props.sides.radio_side), user.toNativeArray(this.props.sides.effect1)),
                      user.removeArrayValues(conversion.radioSideEffects(this.props.sides.radio_side), user.toNativeArray(this.props.sides.effect2)),
                      user.removeArrayValues(conversion.radioSideEffects(this.props.sides.radio_side), user.toNativeArray(this.props.sides.effect3)),
                      user.removeArrayValues(conversion.radioSideEffects(this.props.sides.radio_side), user.toNativeArray(this.props.sides.effect4))
                    )
                    .then(() => {
                      this.setState({ data_in_database: true });
                      setTimeout(() => {
                        location.reload();
                      }, 1200);
                    })
                    .catch(err => {
                      alert('data submit did not succeed');
                      this.setState({ data_in_database: false, clicked2: false, required_data2: false });
                      // cancel loading popup
                    });
                })
                .catch(err => {
                  alert('data submit did not succeed');
                  this.setState({ data_in_database: false, clicked2: false, required_data2: false });
                  // cancel loading popup
                });
            })
            .catch(err => {
              alert('data submit did not succeed');
              this.setState({ data_in_database: false, clicked2: false, required_data2: false });
              // cancel loading popup
            });
        })
        .catch(err => {
          alert('data submit did not succeed');
          this.setState({ data_in_database: false, clicked2: false, required_data2: false });
          // cancel loading popup
        });
    }
  }
  finalConfirm() {
    this.setState({ clicked2: true });
    if (this.props.sides.radio_side != undefined) {
      if (this.props.sides.radio_side[0]) {
        if ((this.props.sides.side_effect_general != undefined && this.props.sides.side_effect_general != '') || this.whichOneReturn.call(this)) {
          if (this.props.other.radio_other != undefined) {
            if (this.props.other.radio_other[0]) {
              if (this.props.other.otherdrug != undefined && this.props.other.otherdrug != '') {
                if (this.props.nutrient.radio_nutrient != undefined) {
                  if (this.props.nutrient.radio_nutrient[0]) {
                    if (this.props.nutrient.nutrient != undefined && this.props.nutrient.nutrient != '') {
                      if (this.extraReturnTrue.call(this)) {
                        this.setState({ required_data1: false, required_data2: false, final_success: true });
                      } else {
                        this.setState({ required_data1: false, required_data2: true });
                        // failed extra
                      }
                    } else {
                      this.setState({ required_data1: false, required_data2: true });
                      //failed inner nutrient
                    }
                  } else {
                    //radio nutrient is unknown or false, continue to Extra
                    if (this.extraReturnTrue.call(this)) {
                      this.setState({ required_data1: false, required_data2: false, final_success: true });
                    } else {
                      this.setState({ required_data1: false, required_data2: true });
                      //failed extra
                    }
                  }
                } else {
                  this.setState({ required_data1: false, required_data2: true });
                  //failed nutrient radio_nutrient
                }
              } else {
                this.setState({ required_data1: false, required_data2: true });
                //failed inner other
              }
            } else {
              //radio other is unknown or false, continue to nutrient_radio DONE!!!
              if (this.props.nutrient.radio_nutrient != undefined) {
                if (this.props.nutrient.radio_nutrient[0]) {
                  if (this.props.nutrient.nutrient != undefined && this.props.nutrient.nutrient != '') {
                    if (this.extraReturnTrue.call(this)) {
                      this.setState({ required_data1: false, required_data2: false, final_success: true });
                    } else {
                      this.setState({ required_data1: false, required_data2: true });
                      // failed extra
                    }
                  } else {
                    this.setState({ required_data1: false, required_data2: true });
                    //failed inner nutrient
                  }
                } else {
                  //radio nutrient is unknown or false, continue to Extra
                  if (this.extraReturnTrue.call(this)) {
                    this.setState({ required_data1: false, required_data2: false, final_success: true });
                  } else {
                    this.setState({ required_data1: false, required_data2: true });
                    //failed extra
                  }
                }
              } else {
                this.setState({ required_data1: false, required_data2: true });
                //failed nutrient radio_nutrient end
              }
            }
          } else {
            this.setState({ required_data1: false, required_data2: true });
            //failed other radio_other
          }
        } else {
          this.setState({ required_data1: false, required_data2: true });
          //failed inner sides
        }
      } else {
        //radio sides is unknown or false, continue to other drugs
        if (this.props.other.radio_other != undefined) {
          if (this.props.other.radio_other[0]) {
            if (this.props.other.otherdrug != undefined && this.props.other.otherdrug != '') {
              if (this.props.nutrient.radio_nutrient != undefined) {
                if (this.props.nutrient.radio_nutrient[0]) {
                  if (this.props.nutrient.nutrient != undefined && this.props.nutrient.nutrient != '') {
                    if (this.extraReturnTrue.call(this)) {
                      this.setState({ required_data1: false, required_data2: false, final_success: true });
                    } else {
                      this.setState({ required_data1: false, required_data2: true });
                      // failed extra
                    }
                  } else {
                    this.setState({ required_data1: false, required_data2: true });
                    //failed inner nutrient
                  }
                } else {
                  //radio nutrient is unknown or false, continue to Extra
                  if (this.extraReturnTrue.call(this)) {
                    this.setState({ required_data1: false, required_data2: false, final_success: true });
                  } else {
                    this.setState({ required_data1: false, required_data2: true });
                    //failed extra
                  }
                }
              } else {
                this.setState({ required_data1: false, required_data2: true });
                //failed nutrient radio_nutrient
              }
            } else {
              this.setState({ required_data1: false, required_data2: true });
              //failed inner other
            }
          } else {
            //radio other is unknown or false, continue to nutrient_radio DONE!!!
            if (this.props.nutrient.radio_nutrient != undefined) {
              if (this.props.nutrient.radio_nutrient[0]) {
                if (this.props.nutrient.nutrient != undefined && this.props.nutrient.nutrient != '') {
                  if (this.extraReturnTrue.call(this)) {
                    this.setState({ required_data1: false, required_data2: false, final_success: true });
                  } else {
                    this.setState({ required_data1: false, required_data2: true });
                    // failed extra
                  }
                } else {
                  this.setState({ required_data1: false, required_data2: true });
                  //failed inner nutrient
                }
              } else {
                //radio nutrient is unknown or false, continue to Extra DONE!!!
                if (this.extraReturnTrue.call(this)) {
                  this.setState({ required_data1: false, required_data2: false, final_success: true });
                } else {
                  this.setState({ required_data1: false, required_data2: true });
                }
              }
            } else {
              this.setState({ required_data1: false, required_data2: true });
              //failed nutrient radio_nutrient end
            }
          }
        } else {
          this.setState({ required_data1: false, required_data2: true });
          //failed other radio_other
        }
      }
    } else {
      this.setState({ required_data1: false, required_data2: true });
      //fail sides radio_side
    }
  }
  popUpBox() {
    if (this.state.success) {
      return (
        <div className="modal_main">
          <div className="modal_sub_pop">
            <span className="close_pop" onClick={() => this.setState({ success: false })}>
              &times;
            </span>
            <p className="center">
              Do you want to add another PPI drug that you are using?<br />If not, then just click Proceed to continue
            </p>
            <div className="center">
              <button
                type="button"
                className="btn btn-success btn_modal_success"
                onClick={() =>
                  this.setState({ required_data1: false, required_data1: false, new_success: true, success: false, warning_clicked: false, proceed_main_clicked: true })
                }>
                Proceed
              </button>
              <button type="button" className="btn btn-danger" onClick={() => this.setState({ success: false })}>
                Add another drug
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
  submitPopUp() {
    // YOU CANNOT CANCEL A PROMISE
    // setTimeout(() => {
    //   this.setState({ required_data2: true, clicked2: false, required_data2: false });
    // }, 5000);
    return (
      <div className="modal_main">
        <div className="modal_sub_pop">
          <p className="center submit_database_modal">{this.state.data_in_database ? 'Data submitted!' : 'In progress...'}</p>
          <div className="center_div loader" />
        </div>
      </div>
    );
  }
  reverseToPrevious() {
    return (
      <div className="modal_main">
        <div className="modal_sub_pop">
          <span className="close_pop" onClick={() => this.setState({ warning_clicked: false })}>
            &times;
          </span>
          <p className="center">Do you want to edit something in the previous section?</p>
          <div className="center">
            <button
              type="button"
              className="btn btn-success btn_modal_success"
              onClick={() => this.setState({ required_data1: false, new_success: false, warning_clicked: true, proceed_main_clicked: false })}>
              YES
            </button>
            <button type="button" className="btn btn-danger" onClick={() => this.setState({ warning_clicked: false })}>
              NO
            </button>
          </div>
        </div>
      </div>
    );
  }
  successAdd() {
    return (
      <div className="bordering" id="target_row">
        {this.state.warning_clicked ? this.reverseToPrevious.call(this) : ''}
        <Button id="reverse" className="btn btn-warning" val="Edit previous section" onClick={() => this.setState({ warning_clicked: true })} />
        <Sides
          brand1={this.props.drug.brand1 != undefined ? this.props.drug.brand1.value : null}
          brand2={this.props.drug.brand2 != undefined ? this.props.drug.brand2.value : null}
          brand3={this.props.drug.brand3 != undefined ? this.props.drug.brand3.value : null}
          brand4={this.props.drug.brand4 != undefined ? this.props.drug.brand4.value : null}
          generic1={this.props.drug.generic1 != undefined ? this.props.drug.generic1.value : null}
          generic2={this.props.drug.generic2 != undefined ? this.props.drug.generic2.value : null}
          generic3={this.props.drug.generic3 != undefined ? this.props.drug.generic3.value : null}
          generic4={this.props.drug.generic4 != undefined ? this.props.drug.generic4.value : null}
          radio={(this.props.sides.radio_side == undefined || this.props.sides.radio_side.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          input_one={
            (this.props.sides.side_effect_general == undefined || this.props.sides.side_effect_general.length == 0) && this.state.clicked2 ? ' redness_input' : ''
          }
          input_error1={(this.props.sides.effect1 == undefined || this.props.sides.effect1.length == 0) && this.state.clicked2 ? ' redness_input' : ''}
          input_error2={(this.props.sides.effect2 == undefined || this.props.sides.effect2.length == 0) && this.state.clicked2 ? ' redness_input' : ''}
          input_error3={(this.props.sides.effect3 == undefined || this.props.sides.effect3.length == 0) && this.state.clicked2 ? ' redness_input' : ''}
          input_error4={(this.props.sides.effect4 == undefined || this.props.sides.effect4.length == 0) && this.state.clicked2 ? ' redness_input' : ''}
        />
        <hr />
        <Other
          input_one={(this.props.other.otherdrug == undefined || this.props.other.otherdrug.length == 0) && this.state.clicked2 ? ' redness_input' : ''}
          radio={(this.props.other.radio_other == undefined || this.props.other.radio_other.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
        />
        <hr />
        <Nutrient
          input_one={(this.props.nutrient.nutrient == undefined || this.props.nutrient.nutrient.length == 0) && this.state.clicked2 ? ' redness_input' : ''}
          radio={(this.props.nutrient.radio_nutrient == undefined || this.props.nutrient.radio_nutrient.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
        />
        <hr />
        <Natural
          input_one={(this.props.natural.naturalhelped == undefined || this.props.natural.naturalhelped.length == 0) && this.state.clicked2 ? '' : ''}
          input_two={(this.props.natural.naturalnothelped == undefined || this.props.natural.naturalnothelped.length == 0) && this.state.clicked2 ? '' : ''}
        />
        <hr />
        <Extra
          exercise={(this.props.extra.exercise == undefined || this.props.extra.exercise.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          smoke={(this.props.extra.smoke == undefined || this.props.extra.smoke.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          alcohol={(this.props.extra.alcohol == undefined || this.props.extra.alcohol.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          obesse={(this.props.extra.obesse == undefined || this.props.extra.obesse.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          eat={(this.props.extra.eat == undefined || this.props.extra.eat.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          stress={(this.props.extra.stress == undefined || this.props.extra.stress.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          familly={(this.props.extra.familly == undefined || this.props.extra.familly.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          anxiety={(this.props.extra.anxiety == undefined || this.props.extra.anxiety.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          gluten={(this.props.extra.gluten == undefined || this.props.extra.gluten.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          lactose={(this.props.extra.lactose == undefined || this.props.extra.lactose.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          acid={(this.props.extra.acid == undefined || this.props.extra.acid.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          overall={(this.props.extra.overall == undefined || this.props.extra.overall.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
          good={(this.props.extra.good == undefined || this.props.extra.good.length == 0) && this.state.clicked2 ? '' : ''}
          arebound={(this.props.extra.good == undefined || this.props.extra.good.length == 0) && this.state.clicked2 ? '' : ''}
          pylori={(this.props.extra.pylori == undefined || this.props.extra.pylori.length == 0) && this.state.clicked2 ? ' redness_radio' : ''}
        />
        {this.state.required_data2 ? (
          <div className="center error-message-confirm">
            <span>Fill all the required data above then click Submit</span>
          </div>
        ) : (
          ''
        )}
        {!this.state.required_data2 && this.state.clicked2 ? this.submitPopUp() : <span />}
        <Success class="btn-success mg_top maxpercent" val="Submit" style="width:100%" onClick={this.finalConfirm.bind(this)} />
      </div>
    );
  }
  addComponent() {
    if (this.state.add_drug_three) {
      this.setState({ add_drug_four: true });
    } else if (this.state.add_drug_two) {
      this.setState({ add_drug_three: true });
    } else if (this.state.add_drug_one) {
      this.setState({ add_drug_two: true });
    } else {
      this.setState({ add_drug_one: true });
    }
  }
  removeComponent() {
    if (this.state.add_drug_four) {
      this.props.drug.generic4 = undefined;
      this.props.drug.brand4 = undefined;
      this.props.drug.duration4 = undefined;
      this.props.drug.dosage4 = undefined;
      this.props.drug.daily4 = undefined;
      this.props.drug.globaltime4 = undefined;
      this.setState({ add_drug_four: false, add_drug_three: false });
    } else if (this.state.add_drug_three) {
      this.props.drug.generic4 = undefined;
      this.props.drug.brand4 = undefined;
      this.props.drug.duration4 = undefined;
      this.props.drug.dosage4 = undefined;
      this.props.drug.daily4 = undefined;
      this.props.drug.globaltime4 = undefined;
      this.setState({ add_drug_three: false });
    } else if (this.state.add_drug_two) {
      this.props.drug.generic3 = undefined;
      this.props.drug.brand3 = undefined;
      this.props.drug.duration3 = undefined;
      this.props.drug.dosage3 = undefined;
      this.props.drug.daily3 = undefined;
      this.props.drug.globaltime3 = undefined;
      this.setState({ add_drug_two: false });
    } else if (this.state.add_drug_one) {
      this.props.drug.generic2 = undefined;
      this.props.drug.brand2 = undefined;
      this.props.drug.duration2 = undefined;
      this.props.drug.dosage2 = undefined;
      this.props.drug.daily2 = undefined;
      this.props.drug.globaltime2 = undefined;
      this.setState({ add_drug_one: false });
    }
  }

  render() {
    return (
      <div className="container">
        <Navbar />

        <About />
        <div className={this.state.new_success ? 'disable_upper_container' : ''}>
          <Basic
            error_weight={(this.props.basic.weight_select == undefined || this.props.basic.weight_select.length == 0) && this.state.clicked ? ' redness_input' : ''}
            error_height={(this.props.basic.height_select == undefined || this.props.basic.height_select.length == 0) && this.state.clicked ? ' redness_input' : ''}
            age={user.isValidInteger(this.props.basic.age, 0, 110)}
            height={user.isValidInteger(this.props.basic.height, 0, 300)}
            weight={user.isValidInteger(this.props.basic.weight, 0, 1000)}
            race={(this.props.basic.race == undefined || this.props.basic.race.length == 0) && this.state.clicked ? ' redness_radio' : ''}
            gender={(this.props.basic.gender == undefined || this.props.basic.gender.length == 0) && this.state.clicked ? ' redness_radio' : ''}
            error_height_input={
              (this.props.basic.height == undefined || this.props.basic.height.length == 0) && this.state.clicked ? ' redness_radio redness_input_border' : ''
            }
            error_weight_input={
              (this.props.basic.weight == undefined || this.props.basic.weight.length == 0) && this.state.clicked ? ' redness_radio redness_input_border' : ''
            }
            error_age_input={(this.props.basic.age == undefined || this.props.basic.age == 0) && this.state.clicked ? ' redness_radio redness_input_border' : ''}
          />
          <hr />
          <Condition
            class_modification={this.state.mgcondition}
            error_gastro={(this.props.condition.gastro == undefined || this.props.condition.gastro.length == 0) && this.state.clicked ? ' redness_input' : ''}
            error_other={(this.props.condition.other == undefined || this.props.condition.other.length == 0) && this.state.clicked ? '' : ''}
            error_ppi={(this.props.condition.ppi == undefined || this.props.condition.ppi.length == 0) && this.state.clicked ? '' : ''}
          />
          <hr />
          <div className="row">
            <h3>
              Drugs <span className="ppi_only">(PPI only)</span>
            </h3>
          </div>
          <Drug
            id="first"
            clicked={this.state.success}
            validation={user.isValidInteger(this.props.drug.duration1, 0, 400)}
            generic1={(this.props.drug.generic1 == undefined || this.props.drug.generic1.length == 0) && this.state.clicked ? ' redness_input' : ''}
            brand1={(this.props.drug.brand1 == undefined || this.props.drug.brand1.length == 0) && this.state.clicked ? '' : ''}
            brand12={(this.props.drug.brand1 == undefined || this.props.drug.brand1.length == 0) && this.state.clicked ? '' : ''}
            dosage1={(this.props.drug.dosage1 == undefined || this.props.drug.dosage1.length == 0) && this.state.clicked ? ' redness_input' : ''}
            globaltime1={(this.props.drug.globaltime1 == undefined || this.props.drug.globaltime1.length == 0) && this.state.clicked ? ' redness_radio' : ''}
            daily1={(this.props.drug.daily1 == undefined || this.props.drug.daily1.length == 0) && this.state.clicked ? ' redness_radio' : ''}
            duration1={(this.props.drug.duration1 == undefined || this.props.drug.duration1 == 0) && this.state.clicked ? ' redness_radio redness_input_border' : ''}
          />

          {this.state.add_drug_one ? (
            <Drug
              id="second"
              clicked={this.state.success}
              validation={user.isValidInteger(this.props.drug.duration2, 0, 400)}
              generic2={(this.props.drug.generic2 == undefined || this.props.drug.generic2.length == 0) && this.state.clicked ? ' redness_input' : ''}
              brand2={(this.props.drug.brand2 == undefined || this.props.drug.brand2.length == 0) && this.state.clicked ? '' : ''}
              brand22={(this.props.drug.brand2 == undefined || this.props.drug.brand2.length == 0) && this.state.clicked ? '' : ''}
              dosage2={(this.props.drug.dosage2 == undefined || this.props.drug.dosage2.length == 0) && this.state.clicked ? ' redness_input' : ''}
              globaltime2={(this.props.drug.globaltime2 == undefined || this.props.drug.globaltime2.length == 0) && this.state.clicked ? ' redness_radio' : ''}
              daily2={(this.props.drug.daily2 == undefined || this.props.drug.daily2.length == 0) && this.state.clicked ? ' redness_radio' : ''}
              duration2={(this.props.drug.duration2 == undefined || this.props.drug.duration2 == 0) && this.state.clicked ? ' redness_radio redness_input_border' : ''}
            />
          ) : (
            <span />
          )}
          {this.state.add_drug_two ? (
            <Drug
              id="third"
              clicked={this.state.success}
              validation={user.isValidInteger(this.props.drug.duration3, 0, 400)}
              generic3={(this.props.drug.generic3 == undefined || this.props.drug.generic3.length == 0) && this.state.clicked ? ' redness_input' : ''}
              brand3={(this.props.drug.brand3 == undefined || this.props.drug.brand3.length == 0) && this.state.clicked ? '' : ''}
              brand32={(this.props.drug.brand3 == undefined || this.props.drug.brand3.length == 0) && this.state.clicked ? '' : ''}
              dosage3={(this.props.drug.dosage3 == undefined || this.props.drug.dosage3.length == 0) && this.state.clicked ? ' redness_input' : ''}
              globaltime3={(this.props.drug.globaltime3 == undefined || this.props.drug.globaltime3.length == 0) && this.state.clicked ? ' redness_radio' : ''}
              daily3={(this.props.drug.daily3 == undefined || this.props.drug.daily3.length == 0) && this.state.clicked ? ' redness_radio' : ''}
              duration3={(this.props.drug.duration3 == undefined || this.props.drug.duration3 == 0) && this.state.clicked ? ' redness_radio redness_input_border' : ''}
            />
          ) : (
            <span />
          )}
          {this.state.add_drug_three ? (
            <Drug
              id="fourth"
              clicked={this.state.success}
              validation={user.isValidInteger(this.props.drug.duration4, 0, 400)}
              generic4={(this.props.drug.generic4 == undefined || this.props.drug.generic4.length == 0) && this.state.clicked ? ' redness_input' : ''}
              brand4={(this.props.drug.brand4 == undefined || this.props.drug.brand4.length == 0) && this.state.clicked ? '' : ''}
              brand42={(this.props.drug.brand4 == undefined || this.props.drug.brand4.length == 0) && this.state.clicked ? '' : ''}
              dosage4={(this.props.drug.dosage4 == undefined || this.props.drug.dosage4.length == 0) && this.state.clicked ? ' redness_input' : ''}
              globaltime4={(this.props.drug.globaltime4 == undefined || this.props.drug.globaltime4.length == 0) && this.state.clicked ? ' redness_radio' : ''}
              daily4={(this.props.drug.daily4 == undefined || this.props.drug.daily4.length == 0) && this.state.clicked ? ' redness_radio' : ''}
              duration4={(this.props.drug.duration4 == undefined || this.props.drug.duration4 == 0) && this.state.clicked ? ' redness_radio redness_input_border' : ''}
            />
          ) : (
            <span />
          )}
          <p>{this.state.add_drug_four ? 'Maximum reached' : ''}</p>
          <div className="row">
            <Button class="btn-default " val="+" onClick={() => this.addComponent()} />
            {this.state.add_drug_one ? (
              <Button
                class="btn-default extra_margin_minus_add"
                val="-"
                onClick={() => {
                  this.removeComponent();
                  this.setState({ required_data1: false });
                }}
              />
            ) : (
              <span />
            )}
            {this.state.required_data1 ? (
              <div className="center error-message-confirm">
                <span>Fill all the required data above then click Proceed</span>
              </div>
            ) : (
              ''
            )}

            <Success
              class="btn-primary mg_top maxpercent confirm_button"
              val="Proceed"
              style="width:100%"
              onClick={this.successConfirm.bind(this)}
              disabled={this.state.proceed_main_clicked}
            />
          </div>
        </div>
        {this.state.success ? this.popUpBox() : <span />}
        {this.state.new_success ? this.successAdd() : <span />}
        {/* // new_success is for the down section */}
        {this.state.final_success ? this.sendDataToDatabase() : <span />}

        <Navfooter />
      </div>
    );
  }
}
