import React from 'react';
import Statistic from './Statistic.js';
import { connect } from 'react-redux';

import * as user from '../../actions/asyncCAll.js';
import * as user1 from './Functions.js';

@connect(store => {
  return {
    ph: store.ph
  };
})
export default class Pharmacist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { button1: true, button2: false, button3: false, radio1: true, radio2: false };
  }
  componentWillMount() {
    if (this.props.ph.name4 == undefined && this.props.ph.name5 == undefined && this.props.ph.name6 == undefined) {
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/pharma_call/pharmacist_url_fetched.php', 'pharmacist_url_fetched', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/pharma_call/flag_grouping.php', 'flag_grouping_pharma', ''));
      this.props.dispatch(user.asyncAll('/medsforlife/othercall/pharma_call/number_of_posts.php', 'number_of_posts_pharma', ''));
    }
    this.props.dispatch(user.changeNavigationColor('stat-nav', [false, false, true]));
  }
  showDoctorMethod() {
    var PieChart;
    var conclusion2 = 'Pharmacist thoughts is a section which represents the pharmaceutical opinion about this drug';
    var conclusion3 =
      'The table shows the list of Pharmacist comments starting from the website where most users expressed their Pharmacist opinion to the website where users barely talked about their Pharmacist';
    PieChart = require('react-chartjs').Pie;
    const canStyle = {
      marginTop: 30
    };
    if (this.props.ph.first_ph && this.props.ph.second_ph && this.props.ph.third_ph) {
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
              <h5>Number of Pharmacists comments </h5>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <td>Pharmacists</td>
                    <td>Amount</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Total Pharma. post</strong>
                    </td>
                    <td>{this.state.radio2 == false ? this.props.ph.name6[0].every : 100}</td>
                  </tr>
                  <tr>
                    <td>{'Explicit Pharma. '}</td>
                    <td>{this.state.radio2 == false ? this.props.ph.name6[1].every : user1.valueToPercentageFirstCol(this.props.ph.name6, 1)}</td>
                  </tr>
                  <tr>
                    <td>{'User associated'}</td>
                    <td>{this.state.radio2 == false ? this.props.ph.name6[2].every : user1.valueToPercentageFirstCol(this.props.ph.name6, 2)}</td>
                  </tr>
                </tbody>
              </table>
              <h5 className="conclusion">Conclusion:</h5>
              <div className="conclusion_div">
                <span className="conclusion_color">
                  The table represents the total amount of pharmacists comments in the database via users posts and pharmacists who have posted on behalf of themselves.
                  Explicit Pharma are comments from pharmacists themselves, whereas user associated comments are comments of users posting what their pharmacists told
                  them about the drug
                </span>
              </div>
            </div>
            <div className="col-sm-4">
              <h5>Pharmacist thoughts</h5>
              {this.state.radio2 == false
                ? user1.getTable(this.props.ph.name5, 'Opinion', 'Amount', conclusion2, 'first_col', 'amount')
                : user1.getTable(user1.valueToPercentageRest(this.props.ph.name5, this.props.ph.name6), 'Opinion', 'Amount', conclusion2, 'first_col', 'amount')}
            </div>
            <div className="col-sm-4">
              <h5>Pharma comments taken from URL </h5>
              {this.state.radio2 == false
                ? user1.getTable(this.props.ph.name4, 'URL', 'Amount', conclusion3, 'first_col', 'amount')
                : user1.getTable(user1.valueToPercentageRest(this.props.ph.name4, this.props.ph.name6), 'URL', 'Amount', conclusion3, 'first_col', 'amount')}
            </div>
          </div>
          <div className="row bottom-offset center">
            <div style={{ marginTop: 22 }}>
              <span
                className={'label label-default inlineblock border_label_span' + (this.state.button1 ? ' highlight_it' : ' margin-bottom-8')}
                onClick={() => this.setState({ button1: true, button2: false, button3: false })}>
                Pharma. comments
              </span>
              <span
                className={'label label-default inlineblock border_label_span' + (this.state.button2 ? ' highlight_it' : ' margin-bottom-8')}
                onClick={() => this.setState({ button1: false, button2: true, button3: false })}>
                Pharma. thoughts
              </span>
              <span
                className={'label label-default inlineblock border_label_span' + (this.state.button3 ? ' highlight_it' : ' margin-bottom-8')}
                onClick={() => this.setState({ button1: false, button2: false, button3: true })}>
                Pharma. url
              </span>
            </div>
            {this.state.button1 ? (
              <PieChart
                style={canStyle}
                data={
                  this.state.radio2 == false
                    ? user1.graphPieChartAmount(this.props.ph.name6, 'pharma')
                    : user1.graphPieChartAmount(user1.valueToPercentageFirstColGraph(this.props.ph.name6), 'pharma')
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
                    ? user1.graphPieChart(this.props.ph.name5)
                    : user1.graphPieChart(user1.valueToPercentageRest(this.props.ph.name5, this.props.ph.name6))
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
                    ? user1.graphPieChart(this.props.ph.name4)
                    : user1.graphPieChart(user1.valueToPercentageRest(this.props.ph.name4, this.props.ph.name6))
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
