import React from 'react';
import * as user from './Functions.js';

export default class Ohterstats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pie_chart_one: true, pie_chart_two: false, pie_chart_three: false };
  }

  componentDidMount() {
    if (this.props.clicked_other_stats) {
      document.querySelector('#first_row_target').scrollIntoView();
    }
  }
  goToLocation() {}
  getOnlyOneValue(arr) {
    return <span>{arr[0].amount}</span>;
  }
  graphPieChartWithZeroIndex(arr) {
    var data_pie = [
      {
        label: 'posts with 3 side effects',
        color: '#5093ce',
        highlight: '#78acd9',
        value: this.props.post_with_sides3[0].amount
      },
      {
        label: 'posts with more than 3 side effects ',
        color: '#c7ccd1',
        highlight: '#e3e6e8',
        value: this.props.post_with_sides_greater3[0].amount
      },
      {
        label: 'posts with less than 3 side effects',
        color: '#7fc77f',
        highlight: '#a3d7a3',
        value: this.props.post_with_sides_lower3[0].amount
      }
    ];
    return data_pie;
  }
  graphPieChart(arr, order) {
    var label_0 = [];
    if (order === 'second') {
      label_0.push('GERD');
      label_0.push('Hiatal hernia');
      label_0.push("Barrett's");
    }
    if (order === 'third') {
      label_0.push('GERD & Hiatal');
      label_0.push("GERD & Barrett's");
      label_0.push("Barrett's & Hiatal");
    }
    var data_pie = [
      {
        label: label_0[0],
        color: '#5093ce',
        highlight: '#78acd9',
        value: arr[0].amount
      },
      {
        label: label_0[1],
        color: '#c7ccd1',
        highlight: '#e3e6e8',
        value: arr[1].amount
      },
      {
        label: label_0[2],
        color: '#7fc77f',
        highlight: '#a3d7a3',
        value: arr[2].amount
      }
    ];
    return data_pie;
  }

  render() {
    var conclusion1 = `Most patients have been on the drug for 10 years. However, as numbers tend to drop after 10 years on the drug, there is a big number of patients being on the drug for 15 and 20 years`;
    var conclusion2 = `Daily used PPIs means that patients were daily on them (continuously/non-stop) for the given amount of years. Most patients were on them continuously for equal or less than 10 years, but there are also patients who’ve been on them for 15 and 20 years continuously`;
    var conclusion3 = `Most patients are on a maintenance dose (pantoprazole, esomeprazole: 40mg, omeprazole, rabeprazole: 20mg, lansoprazole: 30mg), few are on a high dosage and OTC-low dosage`;
    var conclusion4 = `The table shows the relation between the dosage of the drug taken and number of side effects.  If we exclude the amount of side effects which don't have reported dosage (dosage = 0, which means that the user post did not specify the dosage parameter) we can see that most side effects occur at dosage of 40mg`;
    var conclusion5 = `Duration and side effects represent one of the most important relations when it comes to drug usage. A lot of people who are on PPIs for a period of 0-3 years experience side effects. Patients experience most side effects after being on them for 10 years. We can again see an increase in 15 and 20 years of being on PPIs. NOTE: x years does not mean that a patient has been on them continuously. He may have altered his therapy during those years`;
    var conclusion6 = `Most side effects occurred with generic drugs Omeprazole, Esomeprazole, Lansoprazole, respectively`;
    var conclusion7 = `The highest occurrence of “zero side effects” was reported with the usage of omeprazole, esomeprazole, lansoprazole. This means that for omeprazole, 43 users said that they experienced zero (0) side effects, for patients using esomeprazole, 13 users experienced zero side effects, and for lansoprazole 10 users experienced zero side effects`;
    var conclusion8 = `The numbers are low for the shown table. Few post out of 1200+ were found where patients discussed stomach polyps. We can make a conclusion that an occurrence of stomach polyps is rare, but apparently can happen`;
    var conclusion9 = `The numbers are low for the shown table. Few post out of 1200+ were found where patients discussed kidney problems associated to PPI usage. We can make a conclusion that an occurrence of kidney conditions are rare, but apparently can happen`;
    var conclusion10 = `The numbers are low for the shown table. Few post out of 1200+ were found where patients discussed bone problems associated to PPI usage. We can make a conclusion that an occurrence of bone problems are rare, but apparently can happen. Bone fractures and weakness has been a primary issue with these drugs, however low numbers show that not too many patients complain about it.  Bone problems may arise from this drugs since it is reported higher than average if we look at other diseases which PPIs may “cause”`;
    var conclusion11 = `The numbers are low for the shown table. Few post out of 1200+ were found where patients discussed anxiety problems associated to PPI usage. Anxiety is a broad topic and many patients may attribute their mental problems to these drugs rather than looking at other factors. A form of anxiety may arise from these drugs since it has been reported higher than average if we look at other diseases which PPIs may “cause”`;
    var conclusion12 = `The numbers are low for the shown table. An extremely low amount of posts out of 1200+ were found where patients discussed cognitive decline problems associated to PPI usage. In the latest studies no links were found which would show relatively strong connection between PPIs and mental capabilities decline`;
    var conclusion13 = `The numbers are low for the shown table. A low amount of posts out of 1200+ were found where patients discussed vitamin B12 problems associated to PPIs usage. Vitamin B12 deficiency was broadly discussed along with bone issues when talking about PPIs side effects and harmfulness`;
    var conclusion14 = `The numbers are low for the shown table. A low amount of posts out of 1200+ were found where patients discussed magnesium deficiency associated to PPIs usage. Although small numbers, it's interesting to see esomeprazole ahead of every other drug despite the biggest amount of data coming from omeprazole (omeprazole users are the most frequent ones)`;
    var conclusion15 = `The numbers are low for the shown table. A low amount of posts out of 1200+ were found where patients discussed calcium deficiency associated to PPIs usage. Calcium deficiency is connected to bone loss, since it is the main ingredient for bones strength. Interestingly, not many people were to be found complaining about it despite being discussed widely in media`;

    var PieChart;
    PieChart = require('react-chartjs').Pie;
    const canStyle = {
      marginTop: 30
    };
    return (
      <div id="first_row_target" className="container">
        <div className="row">
          <div className="col-sm-4">
            <h5 className="others_heading">
              Period on drug <span>(duration)</span>
            </h5>
            {user.getTable(this.props.drug_years, 'Duration (years)', 'Post', conclusion1, 'firstcol', 'secondcol')}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">
              Period on drug daily <span>(duration)</span>
            </h5>
            {user.getTable(this.props.patients_on_daily, 'Duration_daily (years)', 'Post', conclusion2, 'firstcol', 'secondcol')}
          </div>
          <div className="col-sm-4">
            <h5 id="targeting" className="others_heading">
              Period on drug <span>(dosage)</span>
            </h5>
            {user.getTable(this.props.patients_on_dosage, 'Dosage', 'Post', conclusion3, 'firstcol', 'secondcol')}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <h5 className="others_heading">Dosage related to side effects</h5>
            {user.getTable(this.props.dosage_to_sides, 'Dosage', 'Side effects', conclusion4, 'firstcol', 'secondcol')}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">Duration related to side effects</h5>
            {user.getTable(this.props.duration_to_sides, 'Duration (years)', 'Side effects', conclusion5, 'firstcol', 'secondcol')}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">
              Drug <span>generic</span> related to side effects
            </h5>
            {user.getTable(this.props.side_effects_generic, 'Drug generic', 'Side effects (amount)', conclusion6, 'firstcol', 'secondcol')}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <h5 className="others_heading">
              Drugs <span>generic</span> associated to zero side effects
            </h5>
            {user.getTable(this.props.drugs_to_explicitnone, 'Drug generic', 'No side effects', conclusion7, 'firstcol', 'secondcol')}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">
              Drugs <span>generic</span> associated to stomach polyps <span>(side effect)</span>
            </h5>
            {user.getTable(this.props.drugs_to_stomach_polyps, 'Drug generic', 'Stomach polyp side effect', conclusion8, 'firstcol', 'secondcol')}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">
              Drug <span>generic</span> associated to kidney problems <span>(kidney failure, ckd, nephritis etc.)</span>
            </h5>
            {user.getTable(this.props.drugs_to_kidney, 'Drug generic', 'Kidney condition side effect', conclusion9, 'firstcol', 'secondcol')}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <h5 className="others_heading">
              Drugs <span>generic</span> associated to bone problems <span>(osteopenia, osteoporosis, bone fracture etc.)</span>
            </h5>
            {user.getTable(this.props.drugs_to_osteo, 'Drug generic', 'Bone problems side effect', conclusion10, 'firstcol', 'secondcol')}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">
              Drugs <span>generic</span> associated with Anxiety
            </h5>
            {user.getTable(this.props.drugs_to_anxiety, 'Drug generic', 'Anxiety side effect', conclusion11, 'firstcol', 'secondcol')}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">
              Drug <span>generic</span> associated to dementia
            </h5>
            {user.getTable(this.props.drugs_to_dementia, 'Drug generic', 'Dementia side effect', conclusion12, 'firstcol', 'secondcol')}
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-sm-4">
            <h5 className="others_heading">
              Drugs <span>generic</span> associated to vitamin B12 deficiency{' '}
            </h5>
            {user.getTable(this.props.drugs_to_b12, 'Drug generic', 'B12 deficiency', conclusion13, 'firstcol', 'secondcol')}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">
              Drugs <span>generic</span> associated to vitamin Mg deficiency
            </h5>
            {user.getTable(this.props.drugs_to_magnesium, 'Drug generic', 'Mg deficiency', conclusion14, 'firstcol', 'secondcol')}
          </div>
          <div className="col-sm-4">
            <h5 className="others_heading">
              Drug <span>generic</span> associated to Calcium deficiency
            </h5>
            {user.getTable(this.props.drugs_to_calcium, 'Drug generic', 'Ca deficiency', conclusion15, 'firstcol', 'secondcol')}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-6">
            <h5 className="others_heading">Data 3 elements stats</h5>
            <div className="first_option" onClick={() => this.setState({ pie_chart_one: true, pie_chart_two: false, pie_chart_three: false })}>
              <p className="inline">Posts with 3 side effects</p>
              <span className="inline">{this.getOnlyOneValue(this.props.post_with_sides3)}</span>
              <br />
              <p className="inline">Posts with 3 or more side effects</p>
              <span className="inline">{this.getOnlyOneValue(this.props.post_with_sides_greater3)}</span>
              <br />
              <p className="inline">Posts with less than 3 side effects</p>
              <span className="inline">{this.getOnlyOneValue(this.props.post_with_sides_lower3)}</span>
            </div>

            <p />
            <div className="second_option" onClick={() => this.setState({ pie_chart_one: false, pie_chart_two: true, pie_chart_three: false })}>
              <p className="inline">Patients with GERD</p>
              <span className="inline">{this.props.gerd_barrett_hiatal[0].amount}</span>
              <br />
              <p className="inline">Patients with Hiatal Hernia</p>
              <span className="inline">{this.props.gerd_barrett_hiatal[1].amount}</span>
              <br />
              <p className="inline">Patients with Barrett&#39;s</p>
              <span className="inline">{this.props.gerd_barrett_hiatal[2].amount}</span>
              <p />
            </div>
            <div className="third_option" onClick={() => this.setState({ pie_chart_one: false, pie_chart_two: false, pie_chart_three: true })}>
              <p className="inline">Patients with GERD and Hiatal hernia</p>
              <span className="inline">{this.props.gerd_barrett_hiatal_and[0].amount}</span>
              <br />
              <p className="inline">Patients with GERD and Barrett&#39;s</p>
              <span className="inline">{this.props.gerd_barrett_hiatal_and[1].amount}</span>
              <br />
              <p className="inline last_graph_bottom">Patients with Barrett&#39;s and Hiatal hernia</p>
              <span className="inline">{this.props.gerd_barrett_hiatal_and[2].amount}</span>
            </div>
          </div>

          <div className="col-sm-6">
            {this.state.pie_chart_one ? <PieChart style={canStyle} data={this.graphPieChartWithZeroIndex()} width="350" height="300" redraw /> : ''}
            {this.state.pie_chart_two ? (
              <PieChart style={canStyle} data={this.graphPieChart(this.props.gerd_barrett_hiatal, 'second')} width="350" height="300" redraw />
            ) : (
              ''
            )}
            {this.state.pie_chart_three ? (
              <PieChart style={canStyle} data={this.graphPieChart(this.props.gerd_barrett_hiatal_and, 'third')} width="350" height="300" redraw />
            ) : (
              ''
            )}
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
