import React from 'react';
import { connect } from 'react-redux';

import Postheaderfirstdoctor from './Postheaderfirstdoctor';
import Postmain from './Postmain';

import Barpharma from './Barpharma';
import Headerbarpharma from './Headerbarpharma.js';
import * as user from '../actions/asyncCAll.js';
@connect(store => {
  return {
    bar_change: store.bar_change,
    pharma_call: store.pharma_all
  };
})
export default class Pharmapost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { first_check: false, has_loaded: false };
    history.replaceState(null, null, null);
  }
  componentWillMount() {
    if (this.props.pharma_call.first == undefined) {
      this.props.dispatch(user.asyncAll('/medsforlife/appcall_pharma/get_all_columns_pharmacist.php', 'pharma_call_all'));
    }
    this.props.dispatch(user.changeNavigationColor('post-nav', [false, false, true]));
  }
  componentDidMount() {
    this.setState({ has_loaded: true });
  }
  componentDidUpdate() {}
  aboutWritting() {
    return (
      <div className="headerbar" style={{ marginBottom: 6 }}>
        <p>
          This page shows comment posts where users talk about their pharmacist’s giving opinion on the drug, whether the drug is good or not good if taken
          short-term/long-term. Users express what their pharmacist told them for their therapy. The user associated pharmacist tag refers to this.
        </p>
        <p>
          The explicit pharmacist tag refers to pharmacist alone, by themselves expressing their opinion on the drug such as concerns about their long-term usage, dosage
          etc.
        </p>
      </div>
    );
  }
  render() {
    var array_universal = [];
    if (this.props.pharma_call.first) {
      array_universal = user.getIntervalArray(this.props.pharma_call.name, this.props.bar_change.begin_pharma, this.props.bar_change.end_pharma); //uvijek 1 manje
      return (
        <div className="">
          <button style={{ marginTop: 5, backgroundColor: '#f9f9f9' }} onClick={() => location.reload()}>
            Default
          </button>
          <div className="checkbox_holder_about" id="target_div">
            <input className="inline" type="checkbox" checked={this.state.first_check} onChange={() => this.setState({ first_check: !this.state.first_check })} />
            <span className="margin-left-3">{this.state.first_check ? 'hide About' : 'show About'}</span>
          </div>
          {this.state.first_check ? this.aboutWritting() : <Headerbarpharma is_pharma={'pharmacist'} />}
          {[1, 2, 3, 4].map((item0, i) => {
            return (
              <div className="unit_div row" key={item0}>
                {array_universal.slice((item0 - 1) * 4, item0 * 4).map((item1, i) => {
                  //16-4-8,8-12,12-16
                  return (
                    <div className="unit_div col-sm-3" key={item1.id}>
                      <Postheaderfirstdoctor is_pharma={'pharma'} user={item1.assoc_username} url={item1.url} opinion={item1.flag} doc_alone={item1.phalone} />
                      <br />
                      <Postmain bg_color={'post_main_pharma'} content_cite={item1.pharm_tought} number={item1.id} />
                    </div>
                  );
                })}
              </div>
            );
          })}
          <Barpharma />
        </div>
      );
    } else {
      return <div className="center_div loader" />;
    }
  }
}
