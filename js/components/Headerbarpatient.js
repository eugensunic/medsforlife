import React from 'react';
import { connect } from 'react-redux';
import * as user from '../actions/asyncCAll.js';

@connect(store => {
  return {
    bar_change: store.bar_change,
    criteria_value: store.post
  };
})
export default class Headerbarpatient extends React.Component {
  constructor(props) {
    super(props);

  }
  callFilterPost(url, ...args) {
    this.props.dispatch(user.asyncAll(url, 'post_post', args));
  }
  callFilterData(url, ...args) {
    this.props.dispatch(user.asyncAll(url, 'data_data', args));
  }
  callFilterRest(url, ...args) {
    this.props.dispatch(user.asyncAll(url, 'rest_rest', args));
  }

  render() {
    return (
      <div className="headerbar">
        <img src="../../pics/filter.png" className="filter_icon" />
        <p className="post_elementheaderbar">generic</p>
        <select
          name="generic_drop"
          className={''}
          onChange={e => {
            let param = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
            this.callFilterPost('/medsforlife/appcall/drug_generic_post.php', param);
            this.callFilterData('/medsforlife/appcall/drug_generic_data.php', param);
            this.callFilterRest('/medsforlife/appcall/drug_generic_rest.php', param);
            this.props.dispatch({ type: 'post_criteria', payload: param });

          }}
          defaultValue="">
          <option value="" style={{ display: 'none' }} defaultValue="selected" label="choose drug" />
          <option value="ome">omeprazole</option>
          <option value="esome">esomeprazole</option>
          <option value="pant">pantoprazole</option>
          <option value="lans">lansoprazole</option>
          <option value="rabe">rabeprazole</option>
        </select>

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">brand</p>

        <select
          name="brand_drop"
          className={''}
          onChange={e => {
            let param = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
            this.callFilterPost('/medsforlife/appcall/drug_brand_post.php', param);
            this.callFilterData('/medsforlife/appcall/drug_brand_data.php', param);
            this.callFilterRest('/medsforlife/appcall/drug_brand_rest.php', param);
            this.props.dispatch({ type: 'post_criteria', payload: param });
          }}
          defaultValue="">
          <option value="" style={{ display: 'none' }} defaultValue="selected" label="choose drug" />
          <option value="nex">Nexium</option>
          <option value="esome">Prilosec</option>
          <option value="pant">Protonix</option>
          <option value="preva">Prevacid</option>
          <option value="lans">Zegerid</option>
          <option value="rabe">Losec</option>
        </select>

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">dosage</p>

        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_dosage_post.php', 1, 20); // 20 included
            this.callFilterData('/medsforlife/appcall/drug_dosage_data.php', 1, 20);
            this.callFilterRest('/medsforlife/appcall/drug_dosage_rest.php', 1, 20);
            this.props.dispatch({ type: 'post_criteria', payload: 'low dosage' });
          }}>
          low
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_dosage_post.php', 30, 40); // 30 - 40 included
            this.callFilterData('/medsforlife/appcall/drug_dosage_data.php', 30, 40);
            this.callFilterRest('/medsforlife/appcall/drug_dosage_rest.php', 30, 40); // 45+
            this.props.dispatch({ type: 'post_criteria', payload: 'maitenance dosage' });
          }}>
          maitenance
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_dosage_post.php', 45, 300);
            this.callFilterData('/medsforlife/appcall/drug_dosage_data.php', 45, 300);
            this.callFilterRest('/medsforlife/appcall/drug_dosage_rest.php', 45, 300);
            this.props.dispatch({ type: 'post_criteria', payload: 'high dosage' });
          }}>
          high
        </span>

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">daily</p>

        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_daily_post.php', 'yes');
            this.callFilterData('/medsforlife/appcall/drug_daily_data.php', 'yes');
            this.callFilterRest('/medsforlife/appcall/drug_daily_rest.php', 'yes');
            this.props.dispatch({ type: 'post_criteria', payload: 'daily usage' });

          }}>
          yes
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_daily_post.php', 'no');
            this.callFilterData('/medsforlife/appcall/drug_daily_data.php', 'no');
            this.callFilterRest('/medsforlife/appcall/drug_daily_rest.php', 'no');
            this.props.dispatch({ type: 'post_criteria', payload: 'discontinous usage' });

          }}>
          no
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_daily_post.php', 'fewaweek');
            this.callFilterData('/medsforlife/appcall/drug_daily_data.php', 'fewaweek');
            this.callFilterRest('/medsforlife/appcall/drug_daily_rest.php', 'fewaweek');
            this.props.dispatch({ type: 'post_criteria', payload: 'few a week' });

          }}>
          few a week
        </span>

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">duration</p>

        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_duration_post.php', 0, 5);
            this.callFilterData('/medsforlife/appcall/drug_duration_data.php', 0, 5);
            this.callFilterRest('/medsforlife/appcall/drug_duration_rest.php', 0, 5);
            this.props.dispatch({ type: 'post_criteria', payload: 'duration 0 - 5 years' });

          }}>
          5
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_duration_post.php', 6, 10);
            this.callFilterData('/medsforlife/appcall/drug_duration_data.php', 6, 10);
            this.callFilterRest('/medsforlife/appcall/drug_duration_rest.php', 6, 10);
            this.props.dispatch({ type: 'post_criteria', payload: 'duration 6 - 10 years' });

          }}>
          10
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_duration_post.php', 11, 15);
            this.callFilterData('/medsforlife/appcall/drug_duration_data.php', 11, 15);
            this.callFilterRest('/medsforlife/appcall/drug_duration_rest.php', 11, 15);
            this.props.dispatch({ type: 'post_criteria', payload: 'duration 11 - 15 years' });

          }}>
          15
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_duration_post.php', 16, 40);
            this.callFilterData('/medsforlife/appcall/drug_duration_data.php', 16, 40);
            this.callFilterRest('/medsforlife/appcall/drug_duration_rest.php', 16, 40);
            this.props.dispatch({ type: 'post_criteria', payload: 'duration 15+ years' });

          }}>
          15+
        </span>
        <br />
        <p />

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">condition</p>

        <select
          name="condition_drop"
          className={''}
          onChange={e => {
            let param = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
            this.callFilterPost('/medsforlife/appcall/drug_condition_post.php', param);
            this.callFilterData('/medsforlife/appcall/drug_condition_data.php', param);
            this.callFilterRest('/medsforlife/appcall/drug_condition_rest.php', param);
            this.props.dispatch({ type: 'post_criteria', payload: param });

          }}
          defaultValue="">
          <option value="" style={{ display: 'none' }} defaultValue="selected" label="choose condition" />
          <option value="gerd">GERD</option>
          <option value="be">Barrett&#39;s</option>
          <option value="ulcer">Ulcer</option>
          <option value="esophagitis">Esophagitis</option>
          <option value="gastritis">Gastritis</option>
          <option value="duodenitis">Duodenitis</option>
          <option value="zollinger">Zollinger-Elisson</option>
        </select>

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">ppicondition</p>

        <select
          name="ppicondition_drop"
          className={''}
          onChange={e => {
            let param = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
            this.callFilterPost('/medsforlife/appcall/drug_ppicondition_post.php', param);
            this.callFilterData('/medsforlife/appcall/drug_ppicondition_data.php', param);
            this.callFilterRest('/medsforlife/appcall/drug_ppicondition_rest.php', param);
            this.props.dispatch({ type: 'post_criteria', payload: param });
          }}
          defaultValue="">
          <option value="" style={{ display: 'none' }} defaultValue="selected" label="choose ppicondition" />
          <option value="kidney">Kidney</option>
          <option value="ckd">CKD</option>
          <option value="osteoporosis">Osteoporosis</option>
          <option value="osteopenia">Osteopenia</option>
          <option value="anxiety">Anxiety</option>
          <option value="clostridium">Clostridium difficile</option>
          <option value="dementia">Dementia</option>
        </select>

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">nutrient deficiency</p>

        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_nutrient_post.php', 'Ca');
            this.callFilterData('/medsforlife/appcall/drug_nutrient_data.php', 'Ca');
            this.callFilterRest('/medsforlife/appcall/drug_nutrient_rest.php', 'Ca');
            this.props.dispatch({ type: 'post_criteria', payload: 'Calcium deficiency' });
          }}>
          Calcium
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_nutrient_post.php', 'Mag');
            this.callFilterData('/medsforlife/appcall/drug_nutrient_data.php', 'Mag');
            this.callFilterRest('/medsforlife/appcall/drug_nutrient_rest.php', 'Mag');
            this.props.dispatch({ type: 'post_criteria', payload: 'Magnesium deficiency' });

          }}>
          Magnesium
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_nutrient_post.php', 'Iron');
            this.callFilterData('/medsforlife/appcall/drug_nutrient_data.php', 'Iron');
            this.callFilterRest('/medsforlife/appcall/drug_nutrient_rest.php', 'Iron');
            this.props.dispatch({ type: 'post_criteria', payload: 'Iron deficiency'});

          }}>
          Iron
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_nutrient_post.php', 'B12');
            this.callFilterData('/medsforlife/appcall/drug_nutrient_data.php', 'B12');
            this.callFilterRest('/medsforlife/appcall/drug_nutrient_rest.php', 'B12');
            this.props.dispatch({ type: 'post_criteria', payload: 'Vitamin B12 defficiency' });

          }}>
          B12
        </span>
        <br />
        <p />

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">gender</p>

        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_gender_post.php', 'M');
            this.callFilterData('/medsforlife/appcall/drug_gender_data.php', 'M');
            this.callFilterRest('/medsforlife/appcall/drug_gender_rest.php', 'M');
            this.props.dispatch({ type: 'post_criteria', payload: 'Male' });

          }}>
          M
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_gender_post.php', 'F');
            this.callFilterData('/medsforlife/appcall/drug_gender_data.php', 'F');
            this.callFilterRest('/medsforlife/appcall/drug_gender_rest.php', 'F');
            this.props.dispatch({ type: 'post_criteria', payload: 'Female' });

          }}>
          F
        </span>

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">age</p>

        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_age_post.php', 1, 25);
            this.callFilterData('/medsforlife/appcall/drug_age_data.php', 1, 25);
            this.callFilterRest('/medsforlife/appcall/drug_age_rest.php', 1, 25);
            this.props.dispatch({ type: 'post_criteria', payload: 'Age 1 - 25' });
          }}>
          young
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_age_post.php', 26, 50);
            this.callFilterData('/medsforlife/appcall/drug_age_data.php', 26, 50);
            this.callFilterRest('/medsforlife/appcall/drug_age_rest.php', 26, 50);
            this.props.dispatch({ type: 'post_criteria', payload: 'Age 26 - 50' });

          }}>
          adult
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_age_post.php', 51, 100);
            this.callFilterData('/medsforlife/appcall/drug_age_data.php', 51, 100);
            this.callFilterRest('/medsforlife/appcall/drug_age_rest.php', 51, 100);
            this.props.dispatch({ type: 'post_criteria', payload: 'Age 51 - 100' });

          }}>
          elderly
        </span>
        <br />
        <p />

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">url-source</p>

        <select
          name="url_drop"
          className={''}
          onChange={e => {
            let param = e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text.trim();
            this.callFilterPost('/medsforlife/appcall/drug_sourceurl_post.php', param);
            this.callFilterData('/medsforlife/appcall/drug_sourceurl_data.php', param);
            this.callFilterRest('/medsforlife/appcall/drug_sourceurl_rest.php', param);
            this.props.dispatch({ type: 'post_criteria', payload: param});
          }}
          defaultValue="">
          <option value="" style={{ display: 'none' }} defaultValue="selected" label="choose url" />
          <option value="patientinf">patient.info</option>
          <option value="peoplepharma">peoplespharmacy</option>
          <option value="dailymail">dailymail</option>
          <option value="reddit">reddit</option>
          <option value="barrettscampaign">barrettscampaign</option>
          <option value="crhiskresser">chriskresser.com</option>
          <option value="nytimes">nytimes</option>
          <option value="healingwell">healingwell</option>
        </select>

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">year-posted</p>

        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_date_post.php', 2005, 2010);
            this.callFilterData('/medsforlife/appcall/drug_date_data.php', 2005, 2010);
            this.callFilterRest('/medsforlife/appcall/drug_date_rest.php', 2005, 2010);
            this.props.dispatch({ type: 'post_criteria', payload: '2005 - 2010' });

          }}>
          2005 - 2010
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_date_post.php', 2011, 2015);
            this.callFilterData('/medsforlife/appcall/drug_date_data.php', 2011, 2015);
            this.callFilterRest('/medsforlife/appcall/drug_date_rest.php', 2011, 2015);
            this.props.dispatch({ type: 'post_criteria', payload: '2011 - 2015' });

          }}>
          2011 - 2015
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_date_post.php', 2016, 2020);
            this.callFilterData('/medsforlife/appcall/drug_date_data.php', 2016, 2020);
            this.callFilterRest('/medsforlife/appcall/drug_date_rest.php', 2016, 2020);
            this.props.dispatch({ type: 'post_criteria', payload:'2016 - 2020'  });

          }}>
          2015&#8594;
        </span>

        {/*---------------------------------------------------------------------------------------------------------*/}
        <p className="post_elementheaderbar">opinion-post</p>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_opinion_post.php', 1);
            this.callFilterData('/medsforlife/appcall/drug_opinion_data.php', 1);
            this.callFilterRest('/medsforlife/appcall/drug_opinion_rest.php', 1);
            this.props.dispatch({ type: 'post_criteria', payload: 'Positive posts' });

          }}>
          positive
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_opinion_post.php', 2);
            this.callFilterData('/medsforlife/appcall/drug_opinion_data.php', 2);
            this.callFilterRest('/medsforlife/appcall/drug_opinion_rest.php', 2);
            this.props.dispatch({ type: 'post_criteria', payload: 'Negative posts' });

          }}>
          negative
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_opinion_post.php', 3);
            this.callFilterData('/medsforlife/appcall/drug_opinion_data.php', 3);
            this.callFilterRest('/medsforlife/appcall/drug_opinion_rest.php', 3);
            this.props.dispatch({ type: 'post_criteria', payload: 'Interesting posts'});

          }}>
          interesting
        </span>
        <span
          className="header_border_tag"
          onClick={() => {
            this.callFilterPost('/medsforlife/appcall/drug_opinion_post.php', 4);
            this.callFilterData('/medsforlife/appcall/drug_opinion_data.php', 4);
            this.callFilterRest('/medsforlife/appcall/drug_opinion_rest.php', 4);
            this.props.dispatch({ type: 'post_criteria', payload: 'Extreme posts'});

          }}>
          extreme
        </span>
        <br />
        <hr style={{ marginTop: 0, marginBottom: 0 }} />
        <span className="number_below_main_header">{'#' + this.props.bar_change.page_num_patient}</span>
        <div className="center" style={{ marginRight: 46 }}>
          <span className="inline criteria_heading">Criteria:</span>
          <span className="inline criteria_value">{this.props.criteria_value.post_criteria}</span>
        </div>
      </div>
    );
  }
}
