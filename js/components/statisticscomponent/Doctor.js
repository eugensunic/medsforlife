import React from 'react';
import Statistic from './Statistic.js';
import { connect } from 'react-redux';

import * as user from '../../actions/asyncCAll.js';
import * as user1 from './Functions.js';
@connect(store => {
  return {
    dr: store.dr
  };
})
export default class Doctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { button1: true, button2: false, button3: false, radio1: true, radio2: false };
  }
  componentWillMount() {
    if (this.props.dr.name1 == undefined && this.props.dr.name2 == undefined && this.props.dr.name3 == undefined) {
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/doc_call/doctors_url_fetched.php', 'doctors_url_fetched', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/doc_call/flag_grouping.php', 'flag_grouping', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/doc_call/number_of_posts.php', 'number_of_posts', ''));
    }
    this.props.dispatch(user.changeNavigationColor('stat-nav', [false, true, false]));
  }
  showDoctorMethod() {
    var PieChart;
    var conclusion2 =
      'Doctor thoughts is a section which represents the doctors opinion about this drug. The majority of them believe that the drug is not harmful when taken long-term, However there is a good amount of doctors who are skeptical (some of them explicitly say that PPIs aren’t good drugs) about the safety of PPIs when taken long-term';
    var conclusion3 =
      'The table shows the list of Dr. comments starting from the website where most users expressed their Dr. opinion to the website where users barely talked about their doctors';
    PieChart = require('react-chartjs').Pie;
    const canStyle = {
      marginTop: 30
    };
    if (this.props.dr.first_dr && this.props.dr.second_dr && this.props.dr.third_dr) {
      return (
        <div className="">
          <div className="row">
            <div style={{ marginTop: 10 }}>
              <span
                className={this.state.radio1 ? 'radio_clicked' : 'radio_normal'}
                style={{ marginRight: 3 }}
                onClick={() => this.setState({ radio1: true, radio2: false })}>
                Value
              </span>
              <span className={this.state.radio2 ? 'radio_clicked' : 'radio_normal'} onClick={() => this.setState({ radio1: false, radio2: true })}>
                Percentage
              </span>
            </div>
            <div className="col-sm-4">
              <h5>Number of Doctor comments </h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <td>Doctors</td>
                    <td>Amount</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Total Dr. post</strong>
                    </td>
                    <td>{this.state.radio2 == false ? this.props.dr.name3[0].every : 100}</td>
                  </tr>
                  <tr>
                    <td>{'Explicit Dr. '}</td>
                    <td>{this.state.radio2 == false ? this.props.dr.name3[1].every : user1.valueToPercentageFirstCol(this.props.dr.name3, 1)}</td>
                  </tr>
                  <tr>
                    <td>{'User associated'}</td>
                    <td>{this.state.radio2 == false ? this.props.dr.name3[2].every : user1.valueToPercentageFirstCol(this.props.dr.name3, 2)}</td>
                  </tr>
                </tbody>
              </table>
              <h5 className="conclusion">Conclusion:</h5>
              <div className="conclusion_div">
                <span className="conclusion_color">
                  The table represents the total amount of doctors comments in the database via users posts and doctors who have posted on behalf of themselves. Explicit
                  Dr. are comments from doctors themselves, whereas user associated comments are comments of users posting what their doctors told them about the drug.
                  Much more user comments about their doctors are found then dr. explicitly posting their thoughts
                </span>
              </div>
            </div>
            <div className="col-sm-4">
              <h5>Doctor thoughts</h5>
              {this.state.radio2 == false
                ? user1.getTable(this.props.dr.name2, 'Opinion', 'Amount', conclusion2, 'first_col', 'amount')
                : user1.getTable(user1.valueToPercentageRest(this.props.dr.name2, this.props.dr.name3), 'Opinion', 'Amount', conclusion2, 'first_col', 'amount')}
            </div>
            <div className="col-sm-4">
              <h5>Dr. comments taken from URL </h5>
              {this.state.radio2 == false
                ? user1.getTable(this.props.dr.name1, 'URL', 'Amount', conclusion3, 'first_col', 'amount')
                : user1.getTable(user1.valueToPercentageRest(this.props.dr.name1, this.props.dr.name3), 'URL', 'Amount', conclusion3, 'first_col', 'amount')}
            </div>
          </div>
          <div className="row bottom-offset center">
            <div style={{ marginTop: 22 }}>
              <span
                className={'label label-default inlineblock border_label_span' + (this.state.button1 ? ' highlight_it' : ' margin-bottom-8')}
                onClick={() => this.setState({ button1: true, button2: false, button3: false })}>
                Dr. comments
              </span>
              <span
                className={'label label-default inlineblock border_label_span' + (this.state.button2 ? ' highlight_it' : ' margin-bottom-8')}
                onClick={() => this.setState({ button1: false, button2: true, button3: false })}>
                Dr. thoughts
              </span>
              <span
                className={'label label-default inlineblock border_label_span' + (this.state.button3 ? ' highlight_it' : ' margin-bottom-8')}
                onClick={() => this.setState({ button1: false, button2: false, button3: true })}>
                Dr. url
              </span>
            </div>
            {this.state.button1 ? (
              <PieChart
                style={canStyle}
                data={
                  this.state.radio2 == false
                    ? user1.graphPieChartAmount(this.props.dr.name3, 'doc')
                    : user1.graphPieChartAmount(user1.valueToPercentageFirstColGraph(this.props.dr.name3), 'doc')
                }
                width="350"
                height="300"
                redraw
              />
            ) : (
              ''
            )}
            {this.state.button2 ? (
              <PieChart
                style={canStyle}
                data={
                  this.state.radio2 == false
                    ? user1.graphPieChart(this.props.dr.name2)
                    : user1.graphPieChart(user1.valueToPercentageRest(this.props.dr.name2, this.props.dr.name3))
                }
                width="350"
                height="300"
                redraw
              />
            ) : (
              ''
            )}
            {this.state.button3 ? (
              <PieChart
                style={canStyle}
                data={
                  this.state.radio2 == false
                    ? user1.graphPieChart(this.props.dr.name1)
                    : user1.graphPieChart(user1.valueToPercentageRest(this.props.dr.name1, this.props.dr.name3))
                }
                width="350"
                height="300"
                redraw
              />
            ) : (
              ''
            )}
          </div>
        </div>
      );
    } else {
      return <div className="center_div loader" />;
    }
  }

  render() {
    return <div className="">{this.showDoctorMethod()}</div>;
  }
}
