import React from 'react';
import { connect } from 'react-redux';

import Postheaderfirst from './Postheaderfirst';
import Postheadersecond from './Postheadersecond';
import Postmain from './Postmain';
import Postfooter from './Postfooter';
import Barpatient from './Barpatient';
import Headerbarpatient from './Headerbarpatient';

import Navbar from './Navbar.js';
import Navfooter from './Navfooter.js';

import * as user from '../actions/asyncCAll.js';
@connect(store => {
  return {
    header: store.header,
    tag1: store.tag1,
    tag2: store.tag2,
    bar_change: store.bar_change,
    filtercall: store.filtercall
  };
})
export default class Patientpost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radio1: true,
      radio2: false,
      first_check: false,
      has_loaded: false
    };
    history.replaceState(null, null, null);
  }

  componentWillMount() {
    if (this.props.header.first == undefined && this.props.tag1.second == undefined && this.props.tag2.third == undefined) {
      this.props.dispatch(user.asyncAll('/medsforlife/appcall/get_tag1.php', 'tag1', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/appcall/get_tag2.php', 'tag2', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/appcall/getheaderpost.php', 'header', ''));
    }
    this.props.dispatch(user.changeNavigationColor('post-nav', [true, false, false]));
  }
  componentDidMount() {
    this.setState({ has_loaded: true });
  }

  componentDidUpdate() {
    if (this.props.bar_change.clicked_patient) {
      this.props.bar_change.clicked_patient = false;
    }
  }

  aboutWritting() {
    return (
      <div
        className="headerbar"
        style={{
          marginBottom: 6
        }}>
        <p>
          {' '}
          This page shows comment posts which have been posted across the World Wide Web on various forums such as patient.info, peoplespharmacy… All of the comments are
          real, linked to their source, the poster username and date when the comment was posted are provided as well.{' '}
        </p>{' '}
        <p>
          {' '}
          Comments have been edited / corrected but only to shorten them out and to provide the most important information out of them. There hasn’t been any editing in
          terms of comment context modification.{' '}
        </p>{' '}
        <p>
          {' '}
          The section bellow the comments represents the data extracted out of every comment. Rarely, you’ll find some tag which isn’t to be found in the comment but it
          actually does belong to it but hasn’t been added from the entire source comment.{' '}
        </p>
      </div>
    );
  }

  addColumnId(obj) {
    var obj_arr = obj;
    for (let i = 0; i < obj.length; i++) {
      obj_arr[i]['newid'] = i + 1;
    }
    return obj_arr;
  }
  // main mapping algorithm
  adjustRowId(obj) {
    var cnt = 0;
    var obj_arr = obj;
    var i = 0;
    var flag = false;
    var templen = obj.length - 1;
    var total_break = false;
    while (i < obj.length - 1) {
      cnt++;
      obj_arr[i]['id2'] = cnt;
      flag = false;

      while (obj[i].id == obj[i + 1].id) {
        ++i;
        obj_arr[i]['id2'] = cnt;
        flag = true;

        if (i != templen) {
          if (obj[i].id != obj[i + 1].id) {
            i++;
            break;
          }
        } else {
          total_break = true;
          break;
        }
      }
      if (total_break) {
        break;
      }
      if (!flag) {
        ++i;
      }
      if (i == obj.length - 1) {
        cnt++;
        obj_arr[i]['id2'] = cnt;
      }
    }

    return obj_arr;
  }

  removeDuplicate(arr) {
    var obj = {};
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
      obj[arr[i]] = true;
    }
    for (var key in obj) {
      newarr.push(key);
    }
    return newarr;
  }

  getMultipleValue(arr, id, name, id_name) {
    var newarr = [];
    var temp;
    for (var i = id - 1; i < arr.length; i++) {
      //if (temp!=arr[i][id_name] && temp!=undefined){break;}
      if (arr[i][id_name] == id) {
        //
        temp = arr[i][id_name];
        newarr.push(arr[i][name] + ' ');
      }
    }
    return newarr;
  }

  displayTime(i) {
    switch (parseInt(i)) {
      case 1:
        return ' unknown';
      case 2:
        return ' day';
      case 3:
        return ' week';
      case 4:
        return ' month';
      case 5:
        return ' year';
    }
  }

  findIndexOf(arr, id, name) {
    var index = 0;
    for (var i = id - 1; i < arr.length; i++) {
      if (id == arr[i][name]) {
        index = i;
        break;
      }
    }
    return index;
  }

  render() {
    var arrayheader = []; //post table
    var arraytag2 = []; //data table
    var arraytag1 = []; //last table
    var array_universal = [];
    var array_data = [];
    var array_rest = [];
    // this is the call for dinamic data (dropdown and span elements)
    if (this.props.filtercall.filter1 && this.props.filtercall.filter2 && this.props.filtercall.filter3) {
      array_universal = user.getIntervalArray(this.addColumnId(this.props.filtercall.post_array), this.props.bar_change.begin_patient, this.props.bar_change.end_patient); //uvijek 1 manje
      array_data = this.adjustRowId(this.props.filtercall.data_array);
      array_rest = this.adjustRowId(this.props.filtercall.rest_array);
      return (
        <div className="">
          <button
            style={{ marginTop: 5, backgroundColor: '#f9f9f9' }}
            onClick={() => {
              location.reload();
            }}>
            Default
          </button>
          <div className="checkbox_holder_about" id="target_div">
            <input
              className="inline"
              type="checkbox"
              checked={this.state.first_check}
              onChange={() =>
                this.setState({
                  first_check: !this.state.first_check
                })
              }
            />{' '}
            <span className="margin-left--1">{this.state.first_check ? 'hide About' : 'show about'} </span>{' '}
          </div>
          {this.state.first_check ? this.aboutWritting() : <Headerbarpatient> </Headerbarpatient>}
          {[1, 2, 3, 4].map((item0, i) => {
            return (
              <div className="unit_div row" key={item0}>
                {array_universal.slice((item0 - 1) * 4, item0 * 4).map((item1, i) => {
                  //16-4-8,8-12,12-16
                  return (
                    <div className="unit_div col-sm-3" key={item1.newid}>
                      <Postheaderfirst user={item1.username} date={item1.date} url={item1.url}>
                        {' '}
                      </Postheaderfirst>{' '}
                      <Postheadersecond
                        age={array_data[this.findIndexOf(array_data, item1.newid, 'id2')].age}
                        gender={array_data[this.findIndexOf(array_data, item1.newid, 'id2')].sex}>
                        {' '}
                      </Postheadersecond>{' '}
                      <Postmain bg_color={'post_main'} content_cite={item1.content_cite} number={item1.newid}>
                        {' '}
                      </Postmain>{' '}
                      <Postfooter
                        generic={array_data[this.findIndexOf(array_data, item1.newid, 'id2')].generic}
                        brand={array_data[this.findIndexOf(array_data, item1.newid, 'id2')].brand}
                        duration={array_data[this.findIndexOf(array_data, item1.newid, 'id2')].duration}
                        time={this.displayTime(array_data[this.findIndexOf(array_data, item1.newid, 'id2')].globaltime_duration)}
                        dosage={array_data[this.findIndexOf(array_data, item1.newid, 'id2')].dosage + 'mg'}
                        daily={array_data[this.findIndexOf(array_data, item1.newid, 'id2')].dailyuse}
                        condition={this.removeDuplicate(this.getMultipleValue(array_rest, item1.newid, 'condition', 'id2'))}
                        hpylori={array_data[this.findIndexOf(array_data, item1.newid, 'id2')].hpylori}
                        side={this.removeDuplicate(this.getMultipleValue(array_rest, item1.newid, 'side', 'id2'))}
                        ppi_condition={this.removeDuplicate(this.getMultipleValue(array_rest, item1.newid, 'ppi_condition', 'id2'))}
                        other={this.removeDuplicate(this.getMultipleValue(array_data, item1.newid, 'other_drug_name', 'id2'))}
                        used={this.removeDuplicate(this.getMultipleValue(array_data, item1.newid, 'used', 'id2'))}
                        nutrient={this.removeDuplicate(this.getMultipleValue(array_rest, item1.newid, 'nutrient', 'id2'))}
                      />{' '}
                    </div>
                  );
                })}{' '}
              </div>
            );
          })}{' '}
          <Barpatient> </Barpatient>{' '}
        </div>
      );
    } else if (this.props.header.first && this.props.tag1.second && this.props.tag2.third) {
      // this is the initial call, static data (dropdown and span elements)
      // you should make a copy of these and empty after each call to render the data all at one time
      //MORAS ROKNUT begin_patient jer si stavio tak u reduceru
      arrayheader = user.getIntervalArray(this.props.header.name, this.props.bar_change.begin_patient, this.props.bar_change.end_patient); //uvijek 1 manje
      arraytag1 = this.props.tag1.name;
      arraytag2 = this.props.tag2.name;

      return (
        <div className="">
          <button
            style={{ marginTop: 5, backgroundColor: '#f9f9f9' }}
            onClick={() => {
              location.reload();
            }}>
            Default
          </button>
          <div className="checkbox_holder_about" id="target_div">
            <input
              className="inline"
              type="checkbox"
              checked={this.state.first_check}
              onChange={() =>
                this.setState({
                  first_check: !this.state.first_check
                })
              }
            />{' '}
            <span className="margin-left--1">{this.state.first_check ? 'hide About' : 'show About'} </span>{' '}
          </div>
          {this.state.first_check ? this.aboutWritting() : <Headerbarpatient> </Headerbarpatient>}
          {[1, 2, 3, 4].map((item0, i) => {
            return (
              <div className="unit_div row" key={item0}>
                {arrayheader.slice((item0 - 1) * 4, item0 * 4).map((item1, i) => {
                  return (
                    <div className="unit_div col-sm-3" key={item1.id}>
                      <Postheaderfirst user={item1.username} date={item1.date} url={item1.url}>
                        {' '}
                      </Postheaderfirst>{' '}
                      <Postheadersecond
                        age={arraytag2[this.findIndexOf(arraytag2, item1.id, 'id')].age}
                        gender={arraytag2[this.findIndexOf(arraytag2, item1.id, 'id')].sex}>
                        {' '}
                      </Postheadersecond>{' '}
                      <Postmain bg_color={'post_main'} content_cite={item1.content_cite} number={item1.id}>
                        {' '}
                      </Postmain>{' '}
                      <Postfooter
                        generic={arraytag2[this.findIndexOf(arraytag2, item1.id, 'id')].generic}
                        brand={arraytag2[this.findIndexOf(arraytag2, item1.id, 'id')].brand}
                        duration={arraytag2[this.findIndexOf(arraytag2, item1.id, 'id')].duration}
                        time={this.displayTime(arraytag2[this.findIndexOf(arraytag2, item1.id, 'id')].globaltime_duration)}
                        dosage={arraytag2[this.findIndexOf(arraytag2, item1.id, 'id')].dosage + 'mg'}
                        daily={arraytag2[this.findIndexOf(arraytag2, item1.id, 'id')].daily}
                        condition={this.removeDuplicate(this.getMultipleValue(arraytag1, item1.id, 'condition', 'id'))}
                        hpylori={arraytag2[this.findIndexOf(arraytag2, item1.id, 'id')].hpylori}
                        side={this.removeDuplicate(this.getMultipleValue(arraytag1, item1.id, 'side', 'id'))}
                        ppi_condition={this.removeDuplicate(this.getMultipleValue(arraytag1, item1.id, 'ppi_condition', 'id'))}
                        other={this.removeDuplicate(this.getMultipleValue(arraytag2, item1.id, 'other_drug_name', 'id'))}
                        used={this.removeDuplicate(this.getMultipleValue(arraytag2, item1.id, 'used', 'id'))}
                        nutrient={this.removeDuplicate(this.getMultipleValue(arraytag1, item1.id, 'nutrient', 'id'))}
                      />{' '}
                    </div>
                  );
                })}{' '}
              </div>
            );
          })}{' '}
          <Barpatient> </Barpatient>{' '}
        </div>
      );
    }
    return <div className="center_div loader"> </div>;
  }
}
