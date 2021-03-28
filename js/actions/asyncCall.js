import axios from 'axios';

export function asyncAll(url, name, args) {
  return function(dispatch) {
    let output;
    let element = {};
    if (args !== null) {
      for (let i in args) {
        element['param_' + i] = args[i];
      }
    }
    axios
      .get(url, {
        params: element
      })
      .then(response => {
        dispatch({
          type: name,
          payload: response.data
        });
        output = true;
      })
      .catch(err => {
        dispatch({
          type: 'FAIL',
          payload: err
        });
        output = false;
      });
  };
}

export function getIntervalArray(array, start, end) {
  var newarray = [];
  for (var i = start; i <= end; i++) {
    if (array[i] != null || array[i] != undefined) {
      newarray.push(array[i]);
    }
  }
  return newarray;
}

export function changeBarNum(bar, type) {
  return function(dispatch) {
    dispatch({
      type: type,
      barnum: bar
    });
  };
}
// action.type, action.color
export function changeNavigationColor(type, value) {
  return function(dispatch) {
    dispatch({
      type: type,
      color: value
    });
  };
}
// refactor this to one method!
export function sendBarDataPatient(type, array0, next0, selected0, stop_location) {
  return function(dispatch) {
    dispatch({
      type: type,
      array_patient: array0,
      next_patient: next0,
      selected_patient: selected0,
      stop_navigation: stop_location
    });
  };
}
export function sendBarDataDoctor(type, array0, next0, selected0, stop_location) {
  return function(dispatch) {
    dispatch({
      type: type,
      array_doctor: array0,
      next_doctor: next0,
      selected_doctor: selected0,
      stop_navigation: stop_location
    });
  };
}

export function sendBarDataPharma(type, array_0, next_0, selected_0, stop_location) {
  return function(dispatch) {
    dispatch({
      type: type,
      array_pharma: array_0,
      next_pharma: next_0,
      selected_pharma: selected_0,
      stop_navigation: stop_location
    });
  };
}
