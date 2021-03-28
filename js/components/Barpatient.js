import React from 'react';
import { connect } from 'react-redux';
import * as user from './Function.js';
@connect(store => {
  return {
    bar_change: store.bar_change
  };
})
export default class Barpatient extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this._isMounted = true;
    // BACK AND FORWARD BUTTON NAVIGATION EVENT
    //-----------------------------------------
    window.onpopstate = () => {
      if (this._isMounted) {
        if (history.state == null || history.state.num == '1') {
          // //
          // 0
          //0,1   1
          //1,2   2
          //2,3   3
          //3,4   4
          //5     ...
          //4,6
          this.callButtonData(0, 1, 'stop');
        } else if (history.state.num == '2') {
          //
          this.callButtonData(1, 2, 'stop');
        } else if (history.state.num == '3') {
          //

          this.callButtonData(2, 3, 'stop');
        } else if (history.state.num == '4') {
          //

          this.callButtonData(3, 4, 'stop');
        } else if (user.checkNumber(history.state.num, 5, 1300)) {
          // The rest
          //------------------------------------------

          //
          this.callButtonData(0, 1, 'stop');
        } else if (user.checkNumber(history.state.num, 6, 1300)) {
          //
          this.callButtonData(1, 2, 'stop');
        } else if (user.checkNumber(history.state.num, 7, 1300)) {
          //
          this.callButtonData(2, 3, 'stop');
        } else if (user.checkNumber(history.state.num, 8, 1300)) {
          //

          this.callButtonData(3, 4, 'stop');
        } else if (user.checkNumber(history.state.num, 9, 1300)) {
          //
          user.barChange(
            this.props.bar_change.array_patient[5],
            this.props.bar_change.array_patient,
            this.props.bar_change.next_patient,
            'bar_change_patient',
            'patient_bar_send',
            'stop'
          );
        }
      }
    };
  }
  callButtonData(index_1, index_2, stop) {
    this.props.bar_change.next_patient === false
      ? user.barChange(
          this.props.bar_change.array_patient[index_1],
          this.props.bar_change.array_patient,
          this.props.bar_change.next_patient,
          'bar_change_patient',
          'patient_bar_send',
          stop
        )
      : user.barChange(
          this.props.bar_change.array_patient[index_2],
          this.props.bar_change.array_patient,
          this.props.bar_change.next_patient,
          'bar_change_patient',
          'patient_bar_send',
          stop
        );
  }
  render() {
    return (
      <div className="bar">
        {this.props.bar_change.next_patient ? (
          <p
            className="bar_num move_first_num_bar"
            onClick={() => user.barChange(1, this.props.bar_change.array_patient, this.props.bar_change.next_patient, 'bar_change_patient', 'patient_bar_send')}>
            {' '}
            1{' '}
          </p>
        ) : (
          ''
        )}
        {this.props.bar_change.next_patient ? (
          <p
            className="bar_num"
            onClick={() => {
              user.barChange(
                this.props.bar_change.array_patient[0],
                this.props.bar_change.array_patient,
                this.props.bar_change.next_patient,
                'bar_change_patient',
                'patient_bar_send'
              );
            }}>
            {' '}
            ...{' '}
          </p>
        ) : (
          ''
        )}
        <p
          className={
            this.props.bar_change.next_patient === false
              ? this.props.bar_change.array_patient[0] === this.props.bar_change.selected_patient ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_patient[1] === this.props.bar_change.selected_patient ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(0, 1);
          }}>
          {this.props.bar_change.next_patient ? this.props.bar_change.array_patient[1] : this.props.bar_change.array_patient[0]}{' '}
        </p>
        <p
          className={
            this.props.bar_change.next_patient === false
              ? this.props.bar_change.array_patient[1] === this.props.bar_change.selected_patient ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_patient[2] === this.props.bar_change.selected_patient ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(1, 2);
          }}>
          {this.props.bar_change.next_patient ? this.props.bar_change.array_patient[2] : this.props.bar_change.array_patient[1]}{' '}
        </p>
        <p
          className={
            this.props.bar_change.next_patient === false
              ? this.props.bar_change.array_patient[2] === this.props.bar_change.selected_patient ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_patient[3] === this.props.bar_change.selected_patient ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(2, 3);
          }}>
          {this.props.bar_change.next_patient ? this.props.bar_change.array_patient[3] : this.props.bar_change.array_patient[2]}{' '}
        </p>
        <p
          className={
            this.props.bar_change.next_patient === false
              ? this.props.bar_change.array_patient[3] === this.props.bar_change.selected_patient ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_patient[4] === this.props.bar_change.selected_patient ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(3, 4);
          }}>
          {this.props.bar_change.next_patient ? this.props.bar_change.array_patient[4] : this.props.bar_change.array_patient[3]}{' '}
        </p>
        {this.props.bar_change.next_patient ? (
          <p
            className={
              this.props.bar_change.next_patient === false
                ? this.props.bar_change.array_patient[4] === this.props.bar_change.selected_patient ? 'selected_bar' : 'bar_num'
                : this.props.bar_change.array_patient[5] === this.props.bar_change.selected_patient ? 'selected_bar' : 'bar_num'
            }
            onClick={() => {
              user.barChange(
                this.props.bar_change.array_patient[5],
                this.props.bar_change.array_patient,
                this.props.bar_change.next_patient,
                'bar_change_patient',
                'patient_bar_send'
              );
            }}>
            {this.props.bar_change.array_patient[5]}{' '}
          </p>
        ) : (
          ''
        )}
        <p
          className={
            this.props.bar_change.next_patient === false
              ? this.props.bar_change.array_patient[5] === this.props.bar_change.selected_patient ? 'selected_bar' : 'bar_num'
              : this.props.bar_change.array_patient[6] === this.props.bar_change.selected_patient ? 'selected_bar' : 'bar_num'
          }
          onClick={() => {
            this.callButtonData(4, 6);
          }}>
          {' '}
          ...
        </p>{' '}
      </div>
    );
  }
}
