import React from 'react';

export function valueToPercentageFirstCol(array, index) {
  var max_value = array[0].every;
  return (parseInt(array[index].every) / parseInt(max_value) * 100).toFixed(2);
}
export function valueToPercentageFirstColGraph(array) {
  var max_value = array[0].every;
  var new_arr_obj = { array0: [] };
  new_arr_obj.array0.push({ every: 0 });
  new_arr_obj.array0.push({ every: (parseInt(array[1].every) / parseInt(max_value) * 100).toFixed(2) });
  new_arr_obj.array0.push({ every: (parseInt(array[2].every) / parseInt(max_value) * 100).toFixed(2) });
  return new_arr_obj.array0;
}
export function valueToPercentageRest(array, max_array) {
  var max_value = max_array[0].every;
  var new_arr_obj = { array0: [] };
  var temp1 = [];
  var temp2 = [];
  for (var i = 0; i < array.length; i++) {
    new_arr_obj.array0.push({ first_col: array[i].first_col, amount: (parseInt(array[i].amount) / parseInt(max_value) * 100).toFixed(2) });
  }
  return new_arr_obj.array0;
}
export function graphPieChartAmount(arr, pharma_doc) {
  var data_pie = [];
  var arr_color = [
    'BlueViolet',
    'DarkSeaGreen',
    'DodgerBlue',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGrey',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'Darkorange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkSlateGrey',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen'
  ];
  var label_arr = [];
  if (pharma_doc === 'doc') {
    label_arr = ['', 'Explicit Dr.', 'User associated'];
  }
  if (pharma_doc === 'pharma') {
    label_arr = ['', 'Explicit Pharma.', 'User associated'];
  }

  for (var i = 1; i < arr.length; i++) {
    data_pie.push({
      label: label_arr[i],
      color: arr_color[i],
      value: arr[i].every
    });
  }
  return data_pie;
}

export function graphPieChart(arr) {
  var data_pie = [];
  var arr_color = [
    '#6c87df',
    'DarkGrey',
    '#49a94d',
    'Orange',
    '#d5c965',
    '#f38181',
    '#97c5dd',
    '#eebafa',
    'DeepPink',
    '#d04071',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    '#2c5dfa',
    'FloralWhite',
    'ForestGreen',
    '#3c3e45',
    '#e2a1ed',
    '#e998b4'
  ];

  for (var i = 0; i < arr.length; i++) {
    data_pie.push({
      label: arr[i].first_col,
      color: arr_color[i],
      value: arr[i].amount
    });
  }
  return data_pie;
}
export function getTable(arr, first_name, second_name, conclusion, name1, name2) {
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <td>{first_name}</td>
            <td>{second_name}</td>
          </tr>
        </thead>
        <tbody>{getMultipleListElements(arr, name1, name2)}</tbody>
      </table>
      <h5 className="conclusion">Conclusion:</h5>
      <div className="conclusion_div">
        <span className="conclusion_color">{conclusion}</span>
      </div>
    </div>
  );
}
//first_col, amount
//firstcol, secondcol
export function getMultipleListElements(arr, name1, name2) {
  return arr.map((item, i) => {
    return (
      <tr key={i}>
        <td>{item[name1]}</td>
        <td>{item[name2]}</td>
      </tr>
    );
  });
}
