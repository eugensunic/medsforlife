import React from 'react';
import { connect } from 'react-redux';

import Listbox from './Listbox.js';
import Graph from './Graphsection.js';
import Otherstats from './Otherstats.js';
import Doctor from './Doctor.js';

import * as user from '../../actions/asyncCAll.js';
@connect(store => {
  return {
    conditionstat: store.conditionstat,
    conditionppistat: store.conditionppistat,
    sidestat: store.sidestat,
    genericstat: store.genericstat,
    brandstat: store.brandstat,
    otherstat: store.otherstat,
    usedstat: store.usedstat,
    nutrientstat: store.nutrientstat,
    naturalstat: store.naturalstat,
    everything: store.everything
  };
})
export default class Statistic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio3: true,
      radio4: false,
      radio5: true,
      radio6: false,
      radio7: true,
      radio8: false,
      checkbox1: true,
      change: false,
      button1: true,
      button2: false,
      button3: false,
      button4: false,
      button5: false,
      button6: false,
      button7: false,
      button8: false,
      button9: false,
      sending_array_val: [],
      sending_array_count: [],
      twenty: false,
      ten: false,
      middle_value: false,
      show_other: false,
      width: 0,
      clicked_other: false
    };
  }

  componentWillMount() {
    if (
      this.props.conditionstat.first_stat == undefined &&
      this.props.conditionppistat.second_stat == undefined &&
      this.props.sidestat.third_stat == undefined &&
      this.props.genericstat.fourth_stat == undefined &&
      this.props.brandstat.fifth_stat == undefined &&
      this.props.otherstat.sixth_stat == undefined &&
      this.props.usedstat.seventh_stat == undefined &&
      this.props.nutrientstat.eight_stat == undefined &&
      this.props.naturalstat.nineth_stat == undefined
    ) {
      this.props.dispatch(user.asyncAll('/medsforlife/statscall/condition_gastro.php', 'condition_stat', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/statscall/condition_ppi.php', 'conditionppi_stat', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/statscall/sides.php', 'side_stat', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/statscall/generic.php', 'generic_stat', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/statscall/brand.php', 'brand_stat', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/statscall/other.php', 'other_stat', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/statscall/used.php', 'used_stat', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/statscall/nutrient.php', 'nutrient_stat', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/statscall/natural.php', 'natural_stat', ''));
    }

    this.props.dispatch(user.changeNavigationColor('stat-nav', [true, false, false]));
  }
  componentDidMount() {}
  componentDidUpdate() {}
  showPositive() {
    if (
      this.props.everything.first_other === undefined &&
      this.props.everything.second_other === undefined &&
      this.props.everything.third_other === undefined &&
      this.props.everything.fourth_other === undefined &&
      this.props.everything.fifth_other === undefined &&
      this.props.everything.sixth_other === undefined &&
      this.props.everything.seventh_other === undefined &&
      this.props.everything.eight_other === undefined &&
      this.props.everything.nineth_other === undefined &&
      this.props.everything.tenth_other === undefined &&
      this.props.everything.eleventh_other === undefined &&
      this.props.everything.twelveth_other === undefined &&
      this.props.everything.thirteenth_other === undefined &&
      this.props.everything.fourteenth_other === undefined &&
      this.props.everything.third1_other === undefined &&
      this.props.everything.third2_other === undefined &&
      this.props.everything.third3_other === undefined &&
      this.props.everything.fifth1_other === undefined &&
      this.props.everything.fifth2_other === undefined
    ) {
      return true;
    } else {
      return false;
    }
  }

  getStatsOtherData() {
    //samo ako nisu undefined
    if (this.showPositive()) {
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/dosage_to_sides.php', 'dosage_to_sides', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/drug_years.php', 'drug_years', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/drugs_to_anxiety.php', 'drugs_to_anxiety', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/drugs_to_explicitnone.php', 'drugs_to_explicitnone', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/drugs_to_magnesium.php', 'drugs_to_magnesium', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/drugs_to_stomach_polyps.php', 'drugs_to_stomach_polyps', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/duration_to_sides.php', 'duration_to_sides', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/natural_remedies_helped.php', 'natural_remedies_helped', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/patients_on_daily.php', 'patients_on_daily', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/patients_on_dosage.php', 'patients_on_dosage', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/post_with_sides3.php', 'post_with_sides3', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/post_with_sides_greater3.php', 'post_with_sides_greater3', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/post_with_sides_lower3.php', 'post_with_sides_lower3', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/side_effects_generic.php', 'side_effects_generic', ''));

      this.props.dispatch(user.asyncAll('/medsforlife/othercall/drugs_to_kidney.php', 'drugs_to_kidney', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/drugs_to_dementia.php', 'drugs_to_dementia', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/drugs_to_osteo.php', 'drugs_to_osteo', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/drugs_to_calcium.php', 'drugs_to_calcium', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/drugs_to_b12.php', 'drugs_to_b12', ''));

      this.props.dispatch(user.asyncAll('/medsforlife/othercall/gerd_barrett_hiatal.php', 'gerd_barrett_hiatal', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/gerd_barrett_hiatal_and.php', 'gerd_barrett_hiatal_and', ''));
    } else {
      //hajdaj kasnije
    }
  }
  getSumOfValues(value_array) {
    var sum = 0;
    for (var i = 0; i < value_array.length; i++) {
      sum += parseInt(value_array[i]);
    }
    return sum;
  }
  valuesToPercentageArray(value_array) {
    var newarr = [];
    var total = this.getSumOfValues(value_array);

    for (var i = 0; i < value_array.length; i++) {
      var percent = (parseInt(value_array[i]) / parseFloat(total) * 100).toFixed(1);

      newarr.push(percent);
    }

    return newarr;
  }
  addColumnId(arr) {
    var newarr = [];
    var counter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 'unknown' || arr[i] == 'Unknown') {
        newarr[i] = '';
      } else {
        newarr[i] = counter + 1;
        ++counter;
      }
    }
    return newarr;
  }

  objToArray(obj, name) {
    var newarr = [];
    for (var i = 0; i < obj.length; i++) {
      newarr.push(obj[i][name]);
      if (newarr[i] != 'unknown') {
        newarr[i] = newarr[i].charAt(0).toUpperCase() + newarr[i].slice(1);
      }
    }
    return newarr;
  }
  showOtherMethod() {
    if (
      this.props.everything.first_other &&
      this.props.everything.second_other &&
      this.props.everything.third_other &&
      this.props.everything.fourth_other &&
      this.props.everything.fifth_other &&
      this.props.everything.sixth_other &&
      this.props.everything.seventh_other &&
      this.props.everything.eight_other &&
      this.props.everything.nineth_other &&
      this.props.everything.tenth_other &&
      this.props.everything.eleventh_other &&
      this.props.everything.twelveth_other &&
      this.props.everything.thirteenth_other &&
      this.props.everything.fourteenth_other &&
      this.props.everything.third1_other &&
      this.props.everything.third2_other &&
      this.props.everything.third3_other &&
      this.props.everything.fifth1_other &&
      this.props.everything.fifth2_other &&
      this.props.everything.fifteenth_other &&
      this.props.everything.sixteenth_other
    ) {
      return (
        <Otherstats
          clicked_other_stats={this.state.clicked_other}
          dosage_to_sides={this.props.everything.name1}
          drug_years={this.props.everything.name2}
          drugs_to_anxiety={this.props.everything.name3}
          drugs_to_kidney={this.props.everything.name31}
          drugs_to_osteo={this.props.everything.name32}
          drugs_to_dementia={this.props.everything.name33}
          drugs_to_explicitnone={this.props.everything.name4}
          drugs_to_magnesium={this.props.everything.name5}
          drugs_to_b12={this.props.everything.name51}
          drugs_to_calcium={this.props.everything.name52}
          drugs_to_stomach_polyps={this.props.everything.name6}
          duration_to_sides={this.props.everything.name7}
          natural_remedies_helped={this.props.everything.name8}
          patients_on_daily={this.props.everything.name9}
          patients_on_dosage={this.props.everything.name10}
          post_with_sides3={this.props.everything.name11}
          post_with_sides_greater3={this.props.everything.name12}
          post_with_sides_lower3={this.props.everything.name13}
          side_effects_generic={this.props.everything.name14}
          gerd_barrett_hiatal={this.props.everything.name15}
          gerd_barrett_hiatal_and={this.props.everything.name16}
        />
      );
    } else {
      return <div />;
    }
  }
  render() {
    var brand_arr = [];
    var brand_count_arr;
    var generic_arr = [];
    var generic_count_arr = [];
    var condition_arr = [];
    var condition_count_arr = [];
    var conditionppi_arr = [];
    var conditionppi_count_arr = [];
    var other_arr = [];
    var other_count_arr = [];
    var sides_arr = [];
    var sides_count_arr = [];
    var natural_arr = [];
    var natural_count_arr = [];
    var nutrient_arr = [];
    var nutrient_count_arr = [];
    var used_arr = [];
    var used_count_arr = [];

    if (
      this.props.brandstat.first_stat &&
      this.props.conditionppistat.second_stat &&
      this.props.conditionstat.third_stat &&
      this.props.genericstat.fourth_stat &&
      this.props.naturalstat.fifth_stat &&
      this.props.nutrientstat.sixth_stat &&
      this.props.otherstat.seventh_stat &&
      this.props.sidestat.eight_stat &&
      this.props.usedstat.nineth_stat
    ) {
      condition_arr = this.objToArray(this.props.conditionstat.name, 'name');
      conditionppi_arr = this.objToArray(this.props.conditionppistat.name, 'name');
      sides_arr = this.objToArray(this.props.sidestat.name, 'name');
      generic_arr = this.objToArray(this.props.genericstat.name, 'name');
      brand_arr = this.objToArray(this.props.brandstat.name, 'name');
      other_arr = this.objToArray(this.props.otherstat.name, 'name');
      used_arr = this.objToArray(this.props.usedstat.name, 'name');
      nutrient_arr = this.objToArray(this.props.nutrientstat.name, 'name');
      natural_arr = this.objToArray(this.props.naturalstat.name, 'name');

      condition_count_arr = this.objToArray(this.props.conditionstat.name, 'amount');
      conditionppi_count_arr = this.objToArray(this.props.conditionppistat.name, 'amount');
      sides_count_arr = this.objToArray(this.props.sidestat.name, 'amount');
      generic_count_arr = this.objToArray(this.props.genericstat.name, 'amount');
      brand_count_arr = this.objToArray(this.props.brandstat.name, 'amount');
      other_count_arr = this.objToArray(this.props.otherstat.name, 'amount');
      used_count_arr = this.objToArray(this.props.usedstat.name, 'amount');
      nutrient_count_arr = this.objToArray(this.props.nutrientstat.name, 'amount');
      natural_count_arr = this.objToArray(this.props.naturalstat.name, 'amount');

      return (
        <div className="">
          <div className="container"> </div>
          <div style={{ marginBottom: 10 }}>
            <button type="button" className="btn btn-default" onClick={() => this.setState({ ten: true, twenty: false })}>
              Show 10
            </button>
            <button type="button" className="btn btn-default" onClick={() => this.setState({ twenty: true, ten: false })}>
              Show 20
            </button>
            <span className="inline">Hide value line</span>{' '}
            <input type="checkbox" checked={this.state.middle_value} onChange={() => this.setState({ middle_value: !this.state.middle_value })} />
          </div>
          <div className="margin-left-5">
            <span
              className={this.state.radio7 ? 'radio_clicked' : 'radio_normal'}
              style={{ marginRight: 3 }}
              onClick={() => this.setState({ radio7: true, radio8: false })}>
              Value
            </span>
            <span className={this.state.radio8 ? 'radio_clicked' : 'radio_normal'} onClick={() => this.setState({ radio7: false, radio8: true })}>
              Percentage
            </span>
          </div>
          <div id="row1" className="row">
            <div className="col-sm-4">
              <Listbox
                name="Condition initial"
                order={this.addColumnId(condition_arr)}
                data={condition_arr}
                count={this.state.radio7 ? condition_count_arr : this.valuesToPercentageArray(condition_count_arr)}
                showmore={this.state.twenty}
                show_middle={this.state.middle_value}
              />
            </div>
            <div className="col-sm-4">
              <Listbox
                name="Condition PPI"
                order={this.addColumnId(conditionppi_arr)}
                data={conditionppi_arr}
                count={this.state.radio7 ? conditionppi_count_arr : this.valuesToPercentageArray(conditionppi_count_arr)}
                showmore={this.state.twenty}
                show_middle={this.state.middle_value}
              />
            </div>
            <div className="col-sm-4">
              <Listbox
                name="Side effects"
                order={this.addColumnId(sides_arr)}
                data={sides_arr}
                count={this.state.radio7 ? sides_count_arr : this.valuesToPercentageArray(sides_count_arr)}
                showmore={this.state.twenty}
                show_middle={this.state.middle_value}
              />
            </div>
          </div>
          <div id="row2" className="row">
            <div className="col-sm-4">
              <Listbox
                name="Generic drug"
                order={this.addColumnId(generic_arr)}
                data={generic_arr}
                count={this.state.radio7 ? generic_count_arr : this.valuesToPercentageArray(generic_count_arr)}
                showmore={this.state.twenty}
                show_middle={this.state.middle_value}
              />
            </div>
            <div className="col-sm-4">
              <Listbox
                name="Brand drug"
                order={this.addColumnId(brand_arr)}
                data={brand_arr}
                count={this.state.radio7 ? brand_count_arr : this.valuesToPercentageArray(brand_count_arr)}
                showmore={this.state.twenty}
                show_middle={this.state.middle_value}
              />
            </div>
            <div className="col-sm-4">
              <Listbox
                name="Other drugs used"
                order={this.addColumnId(other_arr)}
                data={other_arr}
                count={this.state.radio7 ? other_count_arr : this.valuesToPercentageArray(other_count_arr)}
                showmore={this.state.twenty}
                show_middle={this.state.middle_value}
              />
            </div>
          </div>
          <div id="row3" className="row">
            <div className="col-sm-4">
              <Listbox
                name="Used drugs (PPI)"
                order={this.addColumnId(used_arr)}
                data={used_arr}
                count={this.state.radio7 ? used_count_arr : this.valuesToPercentageArray(used_count_arr)}
                showmore={this.state.twenty}
                show_middle={this.state.middle_value}
              />
            </div>
            <div className="col-sm-4">
              <Listbox
                name="Nutrients deficiency"
                order={this.addColumnId(nutrient_arr)}
                data={nutrient_arr}
                count={this.state.radio7 ? nutrient_count_arr : this.valuesToPercentageArray(nutrient_count_arr)}
                showmore={this.state.twenty}
                show_middle={this.state.middle_value}>
                {' '}
              </Listbox>
            </div>
            <div className="col-sm-4">
              <Listbox
                name="Natural remedies"
                order={this.addColumnId(natural_arr)}
                data={natural_arr}
                count={this.state.radio7 ? natural_count_arr : this.valuesToPercentageArray(natural_count_arr)}
                showmore={this.state.twenty}
                show_middle={this.state.middle_value}
              />
            </div>
          </div>
          <div className="row bottom-offset center">
            <span
              className={'label label-default inlineblock border_label_span' + (this.state.button1 ? ' highlight_it' : ' margin-bottom-8')}
              onClick={() =>
                this.setState({
                  button1: true,
                  button2: false,
                  button3: false,
                  button4: false,
                  button5: false,
                  button6: false,
                  button7: false,
                  button8: false,
                  button9: false,
                  sending_array_val: condition_arr,
                  sending_array_count: condition_count_arr
                })
              }>
              condition gastro
            </span>
            <span
              className={'label label-default inlineblock border_label_span' + (this.state.button2 ? ' highlight_it' : ' margin-bottom-8')}
              onClick={() =>
                this.setState({
                  button1: false,
                  button2: true,
                  button3: false,
                  button4: false,
                  button5: false,
                  button6: false,
                  button7: false,
                  button8: false,
                  button9: false,
                  sending_array_val: conditionppi_arr,
                  sending_array_count: conditionppi_count_arr
                })
              }>
              condition ppi
            </span>
            <span
              className={'label label-default inlineblock border_label_span' + (this.state.button3 ? ' highlight_it' : ' margin-bottom-8')}
              onClick={() =>
                this.setState({
                  button1: false,
                  button2: false,
                  button3: true,
                  button4: false,
                  button5: false,
                  button6: false,
                  button7: false,
                  button8: false,
                  button9: false,
                  sending_array_val: sides_arr,
                  sending_array_count: sides_count_arr
                })
              }>
              side effects
            </span>
            <span
              className={'label label-default inlineblock border_label_span' + (this.state.button4 ? ' highlight_it' : ' margin-bottom-8')}
              onClick={() =>
                this.setState({
                  button1: false,
                  button2: false,
                  button3: false,
                  button4: true,
                  button5: false,
                  button6: false,
                  button7: false,
                  button8: false,
                  button9: false,
                  sending_array_val: generic_arr,
                  sending_array_count: generic_count_arr
                })
              }>
              generic
            </span>
            <span
              className={'label label-default inlineblock border_label_span' + (this.state.button5 ? ' highlight_it' : ' margin-bottom-8')}
              onClick={() =>
                this.setState({
                  button1: false,
                  button2: false,
                  button3: false,
                  button4: false,
                  button5: true,
                  button6: false,
                  button7: false,
                  button8: false,
                  button9: false,
                  sending_array_val: brand_arr,
                  sending_array_count: brand_count_arr
                })
              }>
              brand
            </span>
            <span
              className={'label label-default inlineblock border_label_span' + (this.state.button6 ? ' highlight_it' : ' margin-bottom-8')}
              onClick={() =>
                this.setState({
                  button1: false,
                  button2: false,
                  button3: false,
                  button4: false,
                  button5: false,
                  button6: true,
                  button7: false,
                  button8: false,
                  button9: false,
                  sending_array_val: other_arr,
                  sending_array_count: other_count_arr
                })
              }>
              other drug
            </span>
            <span
              className={'label label-default inlineblock border_label_span' + (this.state.button7 ? ' highlight_it' : ' margin-bottom-8')}
              onClick={() =>
                this.setState({
                  button1: false,
                  button2: false,
                  button3: false,
                  button4: false,
                  button5: false,
                  button6: false,
                  button7: true,
                  button8: false,
                  button9: false,
                  sending_array_val: used_arr,
                  sending_array_count: used_count_arr
                })
              }>
              used drugs
            </span>
            <span
              className={'label label-default inlineblock border_label_span' + (this.state.button8 ? ' highlight_it' : ' margin-bottom-8')}
              onClick={() =>
                this.setState({
                  button1: false,
                  button2: false,
                  button3: false,
                  button4: false,
                  button5: false,
                  button6: false,
                  button7: false,
                  button8: true,
                  button9: false,
                  sending_array_val: nutrient_arr,
                  sending_array_count: nutrient_count_arr
                })
              }>
              nutrient deficiency
            </span>
            <span
              className={'label label-default inlineblock border_label_span' + (this.state.button9 ? ' highlight_it' : ' margin-bottom-8')}
              onClick={() =>
                this.setState({
                  button1: false,
                  button2: false,
                  button3: false,
                  button4: false,
                  button5: false,
                  button6: false,
                  button7: false,
                  button8: false,
                  button9: true,
                  sending_array_val: natural_arr,
                  sending_array_count: natural_count_arr
                })
              }>
              natural remedies
            </span>
          </div>
          <Graph
            width={this.state.width}
            x_arr={
              this.state.sending_array_val.length != 0
                ? this.state.twenty ? this.state.sending_array_val.slice(0, 21) : this.state.sending_array_val.slice(0, 11)
                : this.state.twenty ? condition_arr.slice(0, 21) : condition_arr.slice(0, 11)
            }
            value_arr={
              this.state.sending_array_count.length != 0
                ? this.state.twenty ? this.state.sending_array_count.slice(0, 21) : this.state.sending_array_count.slice(0, 11)
                : this.state.twenty ? condition_count_arr.slice(0, 21) : condition_count_arr.slice(0, 11)
            }
            which_one={this.state.radio3}
            percent_value={this.state.radio5}
          />
          <div className="margin-left-5">
            <span
              className={this.state.radio3 ? 'radio_clicked' : 'radio_normal'}
              style={{ marginRight: 3 }}
              onClick={() => this.setState({ radio3: true, radio4: false })}>
              Bar chart
            </span>
            <span className={this.state.radio4 ? 'radio_clicked' : 'radio_normal'} onClick={() => this.setState({ radio3: false, radio4: true })}>
              Pie chart
            </span>
          </div>
          <div className="margin-left-5 margin-top-3">
            <span
              className={this.state.radio5 ? 'radio_clicked' : 'radio_normal'}
              style={{ marginRight: 3 }}
              onClick={() => this.setState({ radio5: true, radio6: false })}>
              Value
            </span>
            <span className={this.state.radio6 ? 'radio_clicked' : 'radio_normal'} onClick={() => this.setState({ radio5: false, radio6: true })}>
              Percentage
            </span>
          </div>
          <button
            id="buttontarget"
            type="button"
            className="btn btn-default"
            style={{ marginTop: 25 }}
            onClick={() => {
              this.getStatsOtherData();
              this.setState({ clicked_other: true });
            }}>
            Other stats
          </button>

          {this.showOtherMethod()}
        </div>
      );
    } else {
      return <div className="center_div loader" />;
    }
  }
}
