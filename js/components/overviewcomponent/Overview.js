import React from 'react';
import { connect } from 'react-redux';
import * as user from '../../actions/asyncCAll.js';
import * as func from './Function.js';
import axios from 'axios';

import TableTitle from './Tabletitle.js';
import InternalNavigation from './Internalnavigation.js';
import Navfooter from '../Navfooter.js';
import Navbar from '../Navbar.js';
import Explanation from './Explanation.js';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumnr } from 'material-ui/Table';
import { Tabs, Tab } from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const styles = {
  headline: {
    fontSize: 26,
    paddingTop: 16,
    fontWeight: 400,
    textAlign: 'center',
    color: '#5a51510',
    marginBottom: 20
  }
};

@connect(store => {
  return {
    overviewstat: store.overviewstats,
    overview_extra_stat: store.overviewstats_extra
  };
})
export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'b',
      clicked_basic: false,
      clicked_disease: false,
      clicked_drugs: false,
      clicked_sides1: false,
      clicked_sides2: false,
      clicked_other_drugs: false,
      clicked_nutrient: false,
      clicked_natural: false,
      clicked_extra: false
    };
  }

  handleChange(value) {
    this.setState({
      value: value
    });
  }

  componentDidMount() {
    let urlData_1 = {
      url: '/medsforlife/ppi_input/ppi_input_fe/fecall.php',
      dispatchType: 'fetch_overview_stats'
    };
    let urlData_2 = {
      url: '/medsforlife/ppi_input/ppi_input_fe/interesting.php',
      dispatchType: 'fetch_overview_extra_stats'
    };
    let urlData_3 = {
      url: '/medsforlife/ppi_input/ppi_input_fe/extra_info.php',
      dispatchType: 'fetch_overview_extra_stats_added_info'
    };
    if (!this.props.overviewstat.overview && !this.props.overview_extra_stat.overviewextra && !this.props.overview_extra_stat.overviewextra_last_info) {
      this.props.dispatch(user.asyncAll(urlData_1.url, urlData_1.dispatchType));
      this.props.dispatch(user.asyncAll(urlData_2.url, urlData_2.dispatchType));
      this.props.dispatch(user.asyncAll(urlData_3.url, urlData_3.dispatchType));
    }
  }

  closeAllDivs() {
    return this.setState({
      clicked_basic: false,
      clicked_disease: false,
      clicked_drugs: false,
      clicked_sides1: false,
      clicked_sides2: false,
      clicked_other_drugs: false,
      clicked_nutrient: false,
      clicked_natural: false,
      clicked_extra: false
    });
  }
  loopStateOjbect() {
    for (var key in this.state) {
      // first property excluded from class state object
      if (key !== 'value') {
        if (this.state[key]) {
          return true;
        }
      }
    }
  }

  render() {
    const explanation = {
      basic_info: {
        age_person: `Starting from the highest number of people to bottom having a certain age`,
        race_person: `Starting from the highest number of people to bottom who belong to a certain race`,
        gender_person: `Starting from the highest number of people to bottom considering their gender`
      },
      condition_disease: {
        gastro_person: `Starting from the highest number of people to bottom having a gastro related condition only (upper-gullet diseases)`,
        other_person: `Starting from the highest number of people to bottom who have any condition/disease apart from gastro related issues`,
        ppi_person: `Starting from the highest number of people to bottom who suspect they may have got a certain disease by using PPIs`
      },
      ppi_drugs: {
        generic_person: `Starting from the highest number of people to bottom who have specified the generic name of the proton pump inhibitor drug which they are using for their condition`,
        brand_person: `Starting from the highest number of people to bottom who have specified the brand name of the proton pump inhibitor drug`,
        generic_duration_person: `Showing the amount of people from top to bottom having spent a certain duration in years time on a generic PPI drug`,
        daily_person: `Starting from the highest number of people to bottom who specified if they are/were daily (continuously) on the drug`,
        dosage_person: `Starting from the highest number of people to bottom considering the drug dosage (10-160mg)`
      },
      side_effects: {
        side_person: `Ordered by the side effect which most people have in common to the least one `,
        treatment_duration_person: `Ordered by treatment duration time in years that has the most side effects to it. Trying to see if side effects increase with number of years being on the drug or does the body adapt therefore exhibiting less side effects`,
        generic_person: `Generic PPI drug related to most/least side-effects. Trying to see if there is the 'best-> low side effects amount', 'worst-> high side effects amount' drug when it comes to side effects`,
        brand_person: `Brand PPI drug related to most/least side-effects. Trying to see if there is the 'best-> low side effects amount', 'worst-high side effects amount' drug when it comes to side effects`
      },
      other_nutrient: {
        name_person_other: `Starting from the highest to the lowest number of people who take/took other drugs along with PPIs (PPIs should be excluded in this section)`,
        name_person_nutrient: `Starting from the highest to the lowest amount of people who think they experience/experienced deficiencies due to PPI usage`
      },
      natural_supplements: {
        helped: `Starting from the highest to the lowest number of people who specified which natural supplement has helped them with their gastro problem. Trying to suggest best natural supplements, diets to help with acid reflux disease`,
        not_helped: `Starting from the highest to the lowest number of people who specified which natural supplement hasn't helped or poorly helped with their condition`
      },
      extra_info: {
        last: `The 'Other person information' tables represent data grouped by a specific parameter like: smoking, alcohol use, exercise, H.pylori bacteria etc. All of the parameters have frequency value associated to them (yes, no, rarely, sometimes, never etc.). In other words, we are trying to find a connection with gastro conditions and certain habits like smoking, exercise etc. Tables are pretty much self-explanatory. Last table indicates the overall satisfaction concerning the PPI drug, wether or not users are pleased with it in terms of symptoms alleviation and side effects balance. Person number related to the parameters goes from top to bottom `,
        genetics: `Shows if anyone in the family has gastro related issues such as gastritis, acid-reflux or any other kind of disorder involving the gullet`,
        substitute: `Shows if a person was able to find a substitute drug for PPIs like H2 blockers (ranitidine, tagamet, zantac), natural supplement, some other therapy etc.`,
        anxiety: `Shows if a person suffers from any kind of longterm anxiety`,
        quit: `Shows if a person was able to fully quit PPIs`
      }
    };
    if (this.props.overviewstat.overview && this.props.overview_extra_stat.overviewextra && this.props.overview_extra_stat.overviewextra_last_info) {
      return (
        <div className="container-fluid">
          <div className="container margin-bottom-10">
            <Navbar />
          </div>
          <MuiThemeProvider>
            <Tabs value={this.state.value} onChange={this.handleChange.bind(this)}>
              <Tab label="Input Proof" value="a">
                <div>
                  <div className="records_text">Amount of total records: </div>{' '}
                  <span className="records_value">{this.props.overviewstat.overview.basic_info.length}</span>
                  <h2 style={styles.headline}>Proof od data entry</h2>
                  {this.state.value === 'a' && this.loopStateOjbect.call(this) ? (
                    <div className="close_all_divs" onClick={() => this.closeAllDivs()}>
                      Close all
                    </div>
                  ) : (
                    ''
                  )}
                  <div id="basic-info">
                    <TableTitle tabValue="a" backColor="#eaeaea" title="Person basic info" onClick={() => this.setState({ clicked_basic: !this.state.clicked_basic })} />

                    {this.state.clicked_basic ? (
                      <Table>
                        {func.setTableHeader(this.props.overviewstat.overview.basic_info[0])}
                        {func.setTableBody(this.props.overviewstat.overview.basic_info)}
                      </Table>
                    ) : (
                      ''
                    )}
                  </div>
                  <div id="disease" className="container">
                    <TableTitle
                      tabValue="a"
                      backColor="#f0e4e4"
                      title="Condition/Disease"
                      onClick={() => this.setState({ clicked_disease: !this.state.clicked_disease })}
                    />
                    {this.state.clicked_disease ? (
                      <Table>
                        {func.setTableHeader(this.props.overviewstat.overview.condition_overview[0])}
                        {func.setTableBody(func.checkWhenNumberChange(this.props.overviewstat.overview.condition_overview))}
                      </Table>
                    ) : (
                      ''
                    )}
                  </div>
                  <div id="drugs" className="container">
                    <TableTitle tabValue="a" backColor="#d3e6f2" title="PPI drugs" onClick={() => this.setState({ clicked_drugs: !this.state.clicked_drugs })} />
                    {this.state.clicked_drugs ? (
                      <Table>
                        {func.setTableHeader(this.props.overviewstat.overview.ppi_overview[0])}
                        {func.setTableBody(this.props.overviewstat.overview.ppi_overview)}
                      </Table>
                    ) : (
                      ''
                    )}
                  </div>
                  <div id="drugs-sides" className="container">
                    <TableTitle
                      tabValue="a"
                      backColor="#f8e3c4"
                      title="PPIs side effects"
                      onClick={() => this.setState({ clicked_sides1: !this.state.clicked_sides1 })}
                    />
                    {this.state.clicked_sides1 ? (
                      <Table>
                        {func.setTableHeaderDrugSides(this.props.overviewstat.overview.side_drug[0])}
                        {func.setTableBodyDrugSides(func.checkWhenNumberChangeDrugSides(this.props.overviewstat.overview.side_drug))}
                      </Table>
                    ) : (
                      ''
                    )}
                  </div>
                  <div id="sides-general" className="container">
                    <TableTitle
                      tabValue="a"
                      backColor="#f8e3c4"
                      title="General side effects"
                      onClick={() => this.setState({ clicked_sides2: !this.state.clicked_sides2 })}
                    />
                    {this.state.clicked_sides2 ? (
                      <Table>
                        {func.setTableHeader(this.props.overviewstat.overview.side_general[0])}
                        {func.setTableBody(func.checkWhenNumberChangeSideGeneral(this.props.overviewstat.overview.side_general))}
                      </Table>
                    ) : (
                      ''
                    )}
                  </div>
                  <div id="other-drugs" className="container">
                    <TableTitle
                      tabValue="a"
                      backColor="#f2f3f4"
                      title="Other drugs taken (not PPIs)"
                      onClick={() => this.setState({ clicked_other_drugs: !this.state.clicked_other_drugs })}
                    />
                    {this.state.clicked_other_drugs ? (
                      <Table>
                        {func.setTableHeader(this.props.overviewstat.overview.other_drug[0])}
                        {func.setTableBody(func.checkWhenNumberChangeOtherDrugs(this.props.overviewstat.overview.other_drug))}
                      </Table>
                    ) : (
                      ''
                    )}
                  </div>
                  <div id="nutrient-data" className="container">
                    <TableTitle
                      tabValue="a"
                      backColor="#c4ecc4"
                      title="Nutrient deficiency"
                      onClick={() => this.setState({ clicked_nutrient: !this.state.clicked_nutrient })}
                    />
                    {this.state.clicked_nutrient ? (
                      <Table>
                        {func.setTableHeader(this.props.overviewstat.overview.nutrient[0])}
                        {func.setTableBody(func.checkWhenNumberChangeNutrient(this.props.overviewstat.overview.nutrient))}
                      </Table>
                    ) : (
                      ''
                    )}
                  </div>
                  <div id="natural-data" className="container">
                    <TableTitle
                      tabValue="a"
                      backColor="#b5e0b5"
                      title="Natural supplements"
                      onClick={() => this.setState({ clicked_natural: !this.state.clicked_natural })}
                    />
                    {this.state.clicked_natural ? (
                      <Table>
                        {func.setTableHeader(this.props.overviewstat.overview.natural[0])}
                        {func.setTableBody(func.checkWhenNumberChangeNatural(this.props.overviewstat.overview.natural))}
                      </Table>
                    ) : (
                      ''
                    )}
                  </div>
                  <div id="other-data">
                    <TableTitle
                      tabValue="a"
                      backColor="#eaeaea"
                      title="Other person information"
                      onClick={() => this.setState({ clicked_extra: !this.state.clicked_extra })}
                    />
                    {this.state.clicked_extra ? (
                      <Table>
                        {func.setTableHeader(this.props.overviewstat.overview.other_data[0])}
                        {func.setTableBody(this.props.overviewstat.overview.other_data)}
                      </Table>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </Tab>
              <Tab label="Extra stats" value="b">
                <div>
                  <div className="records_text">Amount of total records: </div>{' '}
                  <span className="records_value">{this.props.overviewstat.overview.basic_info.length}</span>
                  <h2 style={styles.headline}>Additional statistics data</h2>
                  <div id="basic-extract" className="row">
                    <InternalNavigation />
                    <TableTitle tabValue="b" backColor="#eaeaea" title="Person basic info" overwrite="overwrite_title" />
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.age_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.age_person)}
                      </Table>
                      <Explanation text={explanation.basic_info.age_person} />
                    </div>
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.race_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.race_person)}
                      </Table>
                      <Explanation text={explanation.basic_info.race_person} />
                    </div>
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.gender_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.gender_person)}
                      </Table>
                      <Explanation text={explanation.basic_info.gender_person} />
                    </div>
                  </div>
                  <div id="condition-extract" className="row">
                    <TableTitle tabValue="b" backColor="#f0e4e4" title="Condition/Disease" overwrite="overwrite_title" />
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.gastro_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.gastro_person)}
                      </Table>
                      <Explanation text={explanation.condition_disease.gastro_person} />
                    </div>
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.other_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.other_person)}
                      </Table>
                      <Explanation text={explanation.condition_disease.other_person} />
                    </div>
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.ppi_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.ppi_person)}
                      </Table>
                      <Explanation text={explanation.condition_disease.ppi_person} />
                    </div>
                  </div>
                  <div id="drugs-extract-part1" className="row">
                    <TableTitle tabValue="b" backColor="#d3e6f2" title="PPI drugs" overwrite="overwrite_title" />
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.generic_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.generic_person)}
                      </Table>
                      <Explanation text={explanation.ppi_drugs.generic_person} />
                    </div>
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.brand_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.brand_person)}
                      </Table>
                      <Explanation text={explanation.ppi_drugs.brand_person} />
                    </div>
                    <div className="col-sm-4">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.treatment_duration_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.treatment_duration_person)}
                      </Table>
                      <Explanation text={explanation.ppi_drugs.generic_duration_person} />
                    </div>
                  </div>
                  <div id="drugs-extract-part2" className="row margin-top-30">
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.daily_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.daily_person)}
                      </Table>
                      <Explanation text={explanation.ppi_drugs.daily_person} />
                    </div>
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.dosage_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.dosage_person)}
                      </Table>
                      <Explanation text={explanation.ppi_drugs.dosage_person} />
                    </div>
                  </div>
                  <div id="sides-extract-part1" className="row">
                    <TableTitle tabValue="b" backColor="#f8e3c4" title="PPIs side effects" overwrite="overwrite_title" />
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.sides_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.sides_person)}
                      </Table>
                      <Explanation text={explanation.side_effects.side_person} />
                    </div>
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.treatment_duration_side_amount[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.treatment_duration_side_amount)}
                      </Table>
                      <Explanation text={explanation.side_effects.treatment_duration_person} />
                    </div>
                  </div>
                  <div id="sides-extract-part2" className="row margin-top-30">
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.generic_side_amount[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.generic_side_amount)}
                      </Table>
                      <Explanation text={explanation.side_effects.generic_person} />
                    </div>
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.brand_side_amount[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.brand_side_amount)}
                      </Table>
                      <Explanation text={explanation.side_effects.brand_person} />
                    </div>
                  </div>
                  <div id="other-nutrient-extract" className="row">
                    <TableTitle tabValue="b" backColor="#fafafa" title="Other drugs taken (not PPIs) & Nutrient deficiency" overwrite="overwrite_title" />
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.other_drug[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.other_drug)}
                      </Table>
                      <Explanation text={explanation.other_nutrient.name_person_other} />
                    </div>
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.nutrient_deficiency[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.nutrient_deficiency)}
                      </Table>
                      <Explanation text={explanation.other_nutrient.name_person_nutrient} />
                    </div>
                  </div>
                  <div id="natural-extract" className="row">
                    <TableTitle tabValue="b" backColor="#b5e0b5" title="Natural supplements" overwrite="overwrite_title" />
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.natural_helped[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.natural_helped)}
                      </Table>
                      <Explanation text={explanation.natural_supplements.helped} />
                    </div>
                    <div className="col-sm-6">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra.natural_nothelped[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra.natural_nothelped)}
                      </Table>
                      <Explanation text={explanation.natural_supplements.not_helped} />
                    </div>
                  </div>
                  <div id="extra-extract-part1" className="row">
                    <TableTitle tabValue="b" backColor="#eaeaea" title="Other person information" overwrite="overwrite_title" />
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.hpylori_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.hpylori_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.exercise_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.exercise_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.smoke_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.smoke_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.alcohol_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.alcohol_person)}
                      </Table>
                    </div>
                  </div>
                  <div id="extra-extract-part2" className="row margin-top-30">
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.obese_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.obese_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.healthy_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.healthy_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.stress_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.stress_person)}
                      </Table>
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.genetic_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.genetic_person)}
                      </Table>
                      <Explanation text={explanation.extra_info.genetics} />
                    </div>
                  </div>
                  <div id="extra-extract-part3" className="row margin-top-30">
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.anxiety_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.anxiety_person)}
                      </Table>
                      <Explanation text={explanation.extra_info.anxiety} />
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.substitute_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.substitute_person)}
                      </Table>
                      <Explanation text={explanation.extra_info.substitute} />
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.off_drug_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.off_drug_person)}
                      </Table>
                      <Explanation text={explanation.extra_info.quit} />
                    </div>
                    <div className="col-sm-3">
                      <Table>
                        {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.acid_rebound_person[0])}
                        {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.acid_rebound_person)}
                      </Table>
                    </div>
                  </div>
                  <div id="extra-extract-part4" className="row margin-top-30">
                    <Table>
                      {func.setTableHeader(this.props.overview_extra_stat.overviewextra_last_info.overall_experience_person[0])}
                      {func.setTableBody(this.props.overview_extra_stat.overviewextra_last_info.overall_experience_person)}
                    </Table>
                    <Explanation text={explanation.extra_info.last} />
                  </div>
                </div>
              </Tab>
            </Tabs>
          </MuiThemeProvider>
          <Navfooter />
        </div>
      );
    }
    return (
      <div>
        <div className="container margin-bottom-10">
          <Navbar />
        </div>
        <div className="center_div loader"> </div>
        <Navfooter />
      </div>
    );
  }
}
