import React from 'react';

export default class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.state = { width: 800, height: 400, flag: false };
  }
  updateDimensions() {
    if (this.refs.get_it.clientWidth < 774) {
      this.setState({
        width: this.refs.get_it.clientWidth,
        height: 400,
        flag: true
      });
    }
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
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
      var percent = (parseInt(value_array[i]) / parseFloat(total) * 100).toFixed(2);
      newarr.push(percent);
    }
    return newarr;
  }
  excludeUnknownLabel(label_array) {
    var newarr = [].concat(label_array);
    for (var i = 0; i < label_array.length; i++) {
      if (label_array[i] == 'unknown') {
        newarr.splice(i, 1);
      }
    }

    return newarr;
  }
  excludeUnknownValue(label_array, value_array) {
    var newarr = [].concat(value_array);
    for (var i = 0; i < label_array.length; i++) {
      if (label_array[i] == 'unknown') {
        newarr.splice(i, 1);
      }
    }
    return newarr;
  }
  graphBar(x_array, value_array, val) {
    return {
      labels: x_array,
      datasets: [
        {
          fillColor: 'rgba(0,60,100,1)',
          strokeColor: 'black',
          data: value_array
        }
      ]
    };
  }
  graphDoughnut(label_array, value_array, val) {
    var newarr = [];
    var color_array = ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', 'blue', 'pink', 'purple', 'white', 'gray'];
    var highlight_array = ['red', 'green', 'brown', 'yellow', 'dark', 'blue', 'pink', 'purple', 'white', 'gray'];

    for (var i = 0; i < label_array.length; i++) {
      newarr.push({ value: value_array[i], color: color_array[i], highlight: highlight_array[i], label: label_array[i] });
    }
    return newarr;
  }
  render() {
    //prvi put napravi samo jednu vrijednosti

    var BarChart;
    var DoughnutChart;
    const canStyle = {
      width: this.state.width,
      height: 400
    };
    if (this.props.which_one) {
      BarChart = require('react-chartjs').Bar;
    } else {
      DoughnutChart = require('react-chartjs').Doughnut;
    }

    return (
      <div className="row center" ref="get_it">
        {this.props.which_one ? (
          this.props.percent_value ? (
            <BarChart
              style={canStyle}
              data={this.graphBar(this.excludeUnknownLabel(this.props.x_arr), this.excludeUnknownValue(this.props.x_arr, this.props.value_arr), this.props.percent_value)}
              width="800"
              height="400"
              redraw
            />
          ) : (
            <BarChart
              style={canStyle}
              data={this.graphBar(
                this.excludeUnknownLabel(this.props.x_arr),
                this.valuesToPercentageArray(this.excludeUnknownValue(this.props.x_arr, this.props.value_arr)),
                this.props.percent_value
              )}
              width="800"
              height="400"
              redraw
            />
          )
        ) : this.props.percent_value ? (
          <DoughnutChart
            style={canStyle}
            data={this.graphDoughnut(
              this.excludeUnknownLabel(this.props.x_arr),
              this.excludeUnknownValue(this.props.x_arr, this.props.value_arr),
              this.props.percent_value
            )}
            width="800"
            height="400"
            redraw
          />
        ) : (
          <DoughnutChart
            style={canStyle}
            data={this.graphDoughnut(
              this.excludeUnknownLabel(this.props.x_arr),
              this.valuesToPercentageArray(this.excludeUnknownValue(this.props.x_arr, this.props.value_arr)),
              this.props.percent_value
            )}
            width="800"
            height="400"
            redraw
          />
        )}
      </div>
    );
  }
}
