import React from 'react';
import { connect } from 'react-redux';
import * as user from '../actions/asyncCAll.js';

@connect(store => {
  return {
    bar_change: store.bar_change,
    criteria_value: store.post
  };
})
export default class Headerbarpharma extends React.Component {
  constructor(props) {
    super(props);
  }

  callPharmaAll(url, ...args) {
    this.props.dispatch(user.asyncAll(url, 'pharma_call_all', args));
  }

  render() {
    return (
      <div className="headerbar">
        <img src="../../pics/filter.png" className="filter_icon" />
        <p className="post_elementheaderbar" onClick={''}>
          {this.props.is_pharma === 'pharmacist' ? 'pharmacist' : 'doctor'}
        </p>

        <span
          className="header_border_tag"
          onClick={() => {
            this.callPharmaAll('/medsforlife/appcall_pharma/user_or_pharmacist.php', 1);
            this.props.dispatch({ type: 'pharma_criteria', payload: 'Personal pharmacist opinion'});
          }}>
          explicit
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callPharmaAll('/medsforlife/appcall_pharma/user_or_pharmacist.php', 0);
            this.props.dispatch({ type: 'pharma_criteria', payload: 'Pharmacist opinion expressed by patient'});
          }}>
          user associated
        </span>

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar" onClick={''}>
          opinion on drug
        </p>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callPharmaAll('/medsforlife/appcall_pharma/get_opinion.php', 'good');
            this.props.dispatch({ type: 'pharma_criteria', payload: 'Positive opinion'});
          }}>
          good
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callPharmaAll('/medsforlife/appcall_pharma/get_opinion.php', 'good(shortterm)');
            this.props.dispatch({ type: 'pharma_criteria', payload: 'Positive opinion(short-term drug usage)'});
          }}>
          good (short-term)
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callPharmaAll('/medsforlife/appcall_pharma/get_opinion.php', 'good(longterm)');
            this.props.dispatch({ type: 'pharma_criteria', payload: 'Positive opinion(long-term drug usage)'});
          }}>
          good (long-term)
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callPharmaAll('/medsforlife/appcall_pharma/get_opinion.php', 'notgood');
            this.props.dispatch({ type: 'pharma_criteria', payload: 'Negative opinion'});
          }}>
          not good
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callPharmaAll('/medsforlife/appcall_pharma/get_opinion.php', 'notgood(longterm)');
            this.props.dispatch({ type: 'pharma_criteria', payload: 'Negative opinion(long-term drug usage)'});
          }}>
          not good (long-term)
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callPharmaAll('/medsforlife/appcall_pharma/get_opinion.php', 'unknown');
            this.props.dispatch({ type: 'pharma_criteria', payload: 'Unknown opinion'});
          }}>
          unknown
        </span>

        <br />
        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar" onClick={''}>
          url-source
        </p>
        <select
          name="url_drop"
          className={''}
          onChange={e => {
            let param = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
            this.callPharmaAll('/medsforlife/appcall_pharma/url_name.php', param);
            this.props.dispatch({ type: 'pharma_criteria', payload: param});

          }}
          defaultValue="">
          <option value="" style={{ display: 'none' }} defaultValue="selected" label="choose url" />
          <option value="patientinf">patient.info</option>
          <option value="medscape">medscape</option>
          <option value="peoplepharma">peoplespharmacy</option>
          <option value="dailymail">dailymail</option>
          <option value="reddit">reddit</option>
          <option value="barrettscampaign">barrettscampaign</option>
          <option value="crhiskresser">chriskresser.com</option>
          <option value="nytimes">nytimes</option>
          <option value="healingwell">healingwell</option>
          <option value="quora">quora</option>
        </select>

        <br />

        <hr style={{ marginTop: 0, marginBottom: 0 }} />
        <span className="number_below_main_header">{'#' + this.props.bar_change.page_num_pharma}</span>
        <div className="center" style={{ marginRight: 46, paddingBottom: 1 }}>
          <span className="inline criteria_heading">Criteria:</span>
          <span className="inline criteria_value">{this.props.criteria_value.pharma_criteria}</span>
        </div>
      </div>
    );
  }
}
