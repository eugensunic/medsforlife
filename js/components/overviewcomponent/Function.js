import React from 'react';
import { connect } from 'react-redux';
import * as user from '../../actions/asyncCAll.js';
import * as func from './Function.js';
import axios from 'axios';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function setTableHeaderColumn(obj) {
  // adjust key name on backend
  if (obj != null || obj != undefined) {
    return Object.keys(obj).map((key, i) => {
      return <TableHeaderColumn>{key}</TableHeaderColumn>;
    });
  }
}

function setTableHeaderColumnDrugSides(obj) {
  // adjust key name on backend
  if (obj != null || obj != undefined) {
    return Object.keys(obj).map((key, i) => {
      if (key !== 'ppi_drugID') {
        return <TableHeaderColumn>{key}</TableHeaderColumn>;
      }
      return '';
    });
  }
}
function ulItemList(array) {
  return (
    <TableRowColumn>
      <ul>
        {array.map((elm, j) => {
          if (!elm) {
            return '';
          }
          return <li>{elm}</li>;
        })}
      </ul>
    </TableRowColumn>
  );
}
// for sides-drugs

export function setTableBodyColumn(array) {
  // you have to find out how to avodi undefined early on

  return array.map((item, i) => {
    return (
      <TableRow>
        {Object.keys(item).map((key, i) => {
          if (Array.isArray(item[key])) {
            return ulItemList(item[key]);
          }
          return <TableRowColumn>{item[key]}</TableRowColumn>;
        })}
      </TableRow>
    );
  });
}
export function setTableBodyColumnDrugSides(array) {
  let cnt = -1;
  return array.map((item, i) => {
    ++cnt;
    return (
      <TableRow>
        {Object.keys(item).map((key, i) => {
          if (Array.isArray(item[key])) {
            let temp_array = array[cnt].ppi_drugID;
            if (key !== 'ppi_drugID') {
              return (
                <TableRowColumn>
                  <ul>
                    {item[key].map((elm, j) => {
                      if (j < temp_array.length - 1) {
                        if (temp_array[j] != temp_array[j + 1]) {
                          if (!elm) {
                            return (
                              <li>
                                {''}
                                <hr />
                              </li>
                            );
                          }
                          return (
                            <li>
                              {elm}
                              <hr />
                            </li>
                          );
                        }
                      }

                      if (!elm) {
                        return <li>{''}</li>;
                      }
                      return <li>{elm}</li>;
                    })}
                  </ul>
                </TableRowColumn>
              );
            }
            return '';
          }
          return <TableRowColumn>{item[key]}</TableRowColumn>;
        })}
      </TableRow>
    );
  });
}

export function setTableHeader(obj) {
  if (obj != null || obj != undefined) {
    return (
      <TableHeader displaySelectAll={false}>
        <TableRow>{setTableHeaderColumn(obj)}</TableRow>
      </TableHeader>
    );
  }
}
export function setTableHeaderDrugSides(obj) {
  if (obj != null || obj != undefined) {
    return (
      <TableHeader displaySelectAll={false}>
        <TableRow>{setTableHeaderColumnDrugSides(obj)}</TableRow>
      </TableHeader>
    );
  }
}

export function setTableBody(arr) {
  return <TableBody>{setTableBodyColumn(arr)}</TableBody>;
}
export function setTableBodyDrugSides(arr, reducer_arr) {
  return <TableBody>{setTableBodyColumnDrugSides(arr, reducer_arr)}</TableBody>;
}

function createEquivalentObject(obj) {
  let obj2 = {};
  for (let key in obj) {
    obj2[key] = '';
  }
  return obj2;
}

//disease function
export function checkWhenNumberChange(array) {
  let global_array = [];

  let gastro = [];
  let other = [];
  let ppis = [];

  let basic_copy;
  let flag = false;
  let first_entrance = true;
  // you have to make this generic
  if (array.length === 1) {
    global_array.push({
      basicID: array[array.length - 1].basicID,
      gastro: array[array.length - 1].gastro,
      other: array[array.length - 1].other,
      ppis: array[array.length - 1].ppis
    });
  } else {
    for (let i in array) {
      i = parseInt(i);
      // because of i+1 otherwise it can step out of the array to non-existing element
      if (i < array.length - 1) {
        // checks all continous
        if (array[i].basicID === array[i + 1].basicID) {
          flag = true;
          if (first_entrance) {
            first_entrance = false;
            gastro.push(array[i].gastro);
            other.push(array[i].other);
            ppis.push(array[i].ppis);
          }
          gastro.push(array[i + 1].gastro);
          other.push(array[i + 1].other);
          ppis.push(array[i + 1].ppis);
        }
        // checks all others, adds only one file
        if (array[i].basicID !== array[i + 1].basicID && !flag) {
          gastro.push(array[i].gastro);
          other.push(array[i].other);
          ppis.push(array[i].ppis);
        }
        if (array[i].basicID !== array[i + 1].basicID) {
          basic_copy = array[i].basicID;
          global_array.push({ basicID: basic_copy, gastro: gastro, other: other, ppis: ppis });
          first_entrance = true;
          gastro = [];
          other = [];
          ppis = [];
          flag = false;
        }
      }
    }
  }
  // checking last pair of consecutives if exist because of the upper constraint which doesn't permit going inside
  if (gastro.length > 0) {
    global_array.push({ basicID: basic_copy + 1, gastro: gastro, other: other, ppis: ppis });
  }
  // checking last index only, because of the upper constraint which doesn't permit going inside
  if (array[array.length - 1].basicID !== array[array.length - 2].basicID) {
    global_array.push({
      basicID: array[array.length - 1].basicID,
      gastro: [array[array.length - 1].gastro],
      other: [array[array.length - 1].other],
      ppis: [array[array.length - 1].ppis]
    });
  }
  // testing purpose print
  //printArray(global_array);

  return global_array;
}
// drug_sides function
export function checkWhenNumberChangeDrugSides(array) {
  let global_array = [];

  let name = [];
  let generic = [];
  let brand = [];
  let ppi_drugID = [];

  let basic_copy;
  let flag = false;
  let first_entrance = true;
  // you have to make this generic
  if (array.length === 1) {
    global_array.push({
      basicID: array[array.length - 1].basicID,
      name: array[array.length - 1].name,
      generic: array[array.length - 1].generic,
      brand: array[array.length - 1].brand,
      ppi_drugID: array[array.length - 1].ppi_drugID
    });
  } else {
    for (let i in array) {
      i = parseInt(i);
      // because of i+1 otherwise it can step out of the array to non-existing element
      if (i < array.length - 1) {
        // checks all continous
        if (array[i].basicID === array[i + 1].basicID) {
          flag = true;
          if (first_entrance) {
            first_entrance = false;
            name.push(array[i].name);
            generic.push(array[i].generic);
            brand.push(array[i].brand);
            ppi_drugID.push(array[i].ppi_drugID);
          }
          name.push(array[i + 1].name);
          generic.push(array[i + 1].generic);
          brand.push(array[i + 1].brand);
          ppi_drugID.push(array[i + 1].ppi_drugID);
        }
        // checks all others, adds only one file
        if (array[i].basicID !== array[i + 1].basicID && !flag) {
          name.push(array[i].name);
          generic.push(array[i].generic);
          brand.push(array[i].brand);
          ppi_drugID.push(array[i + 1].ppi_drugID);
        }
        if (array[i].basicID !== array[i + 1].basicID) {
          basic_copy = array[i].basicID;
          global_array.push({ basicID: basic_copy, name: name, generic: generic, brand: brand, ppi_drugID: ppi_drugID });
          first_entrance = true;
          name = [];
          generic = [];
          brand = [];
          ppi_drugID = [];

          flag = false;
        }
      }
    }
  }
  // checking last pair of consecutives if exist because of the upper constraint which doesn't permit going inside
  if (name.length > 0) {
    global_array.push({ basicID: basic_copy + 1, name: name, generic: generic, brand: brand, ppi_drugID: ppi_drugID });
  }
  // checking last index only, because of the upper constraint which doesn't permit going inside
  if (array[array.length - 1].basicID !== array[array.length - 2].basicID) {
    global_array.push({
      basicID: array[array.length - 1].basicID,
      name: [array[array.length - 1].name],
      generic: [array[array.length - 1].generic],
      brand: [array[array.length - 1].brand],
      ppi_drugID: [array[array.length - 1].ppi_drugID]
    });
  }
  // testing purpose print
  //printArray(global_array);

  return global_array;
}
export function checkWhenNumberChangeSideGeneral(array) {
  let global_array = [];

  let side_radio = [];
  let name = [];

  let basic_copy;
  let flag = false;
  let first_entrance = true;
  // you have to make this generic
  if (array.length === 1) {
    global_array.push({
      basicID: array[array.length - 1].basicID,
      side_radio: array[array.length - 1].side_radio,
      name: array[array.length - 1].name
    });
  } else {
    for (let i in array) {
      i = parseInt(i);
      // because of i+1 otherwise it can step out of the array to non-existing element
      if (i < array.length - 1) {
        // checks all continous
        if (array[i].basicID === array[i + 1].basicID) {
          flag = true;
          if (first_entrance) {
            first_entrance = false;
            side_radio.push(array[i].side_radio);
            name.push(array[i].name);
          }
          side_radio.push(array[i + 1].side_radio);
          name.push(array[i + 1].name);
        }
        // checks all others, adds only one file
        if (array[i].basicID !== array[i + 1].basicID && !flag) {
          side_radio.push(array[i].side_radio);
          name.push(array[i].name);
        }
        if (array[i].basicID !== array[i + 1].basicID) {
          basic_copy = array[i].basicID;
          global_array.push({ basicID: basic_copy, side_radio: side_radio, name: name });
          first_entrance = true;
          side_radio = [];
          name = [];
          flag = false;
        }
      }
    }
  }
  // checking last pair of consecutives if exist because of the upper constraint which doesn't permit going inside
  if (side_radio.length > 0) {
    global_array.push({ basicID: basic_copy + 1, side_radio: side_radio, name: name });
  }
  // checking last index only, because of the upper constraint which doesn't permit going inside
  if (array[array.length - 1].basicID !== array[array.length - 2].basicID) {
    global_array.push({
      basicID: array[array.length - 1].basicID,
      side_radio: [array[array.length - 1].side_radio],
      name: [array[array.length - 1].name]
    });
  }
  // testing purpose print
  //printArray(global_array);

  return global_array;
}
export function checkWhenNumberChangeOtherDrugs(array) {
  let global_array = [];

  let other_drug_radio = [];
  let name = [];

  let basic_copy;
  let flag = false;
  let first_entrance = true;
  // you have to make this generic
  if (array.length === 1) {
    global_array.push({
      basicID: array[array.length - 1].basicID,
      other_drug_radio: array[array.length - 1].other_drug_radio,
      name: array[array.length - 1].name
    });
  } else {
    for (let i in array) {
      i = parseInt(i);
      // because of i+1 otherwise it can step out of the array to non-existing element
      if (i < array.length - 1) {
        // checks all continous
        if (array[i].basicID === array[i + 1].basicID) {
          flag = true;
          if (first_entrance) {
            first_entrance = false;
            other_drug_radio.push(array[i].other_drug_radio);
            name.push(array[i].name);
          }
          other_drug_radio.push(array[i + 1].other_drug_radio);
          name.push(array[i + 1].name);
        }
        // checks all others, adds only one file
        if (array[i].basicID !== array[i + 1].basicID && !flag) {
          other_drug_radio.push(array[i].other_drug_radio);
          name.push(array[i].name);
        }
        if (array[i].basicID !== array[i + 1].basicID) {
          basic_copy = array[i].basicID;
          global_array.push({ basicID: basic_copy, other_drug_radio: other_drug_radio, name: name });
          first_entrance = true;
          other_drug_radio = [];
          name = [];
          flag = false;
        }
      }
    }
  }
  // checking last pair of consecutives if exist because of the upper constraint which doesn't permit going inside
  if (other_drug_radio.length > 0) {
    global_array.push({ basicID: basic_copy + 1, other_drug_radio: other_drug_radio, name: name });
  }
  // checking last index only, because of the upper constraint which doesn't permit going inside
  if (array[array.length - 1].basicID !== array[array.length - 2].basicID) {
    global_array.push({
      basicID: array[array.length - 1].basicID,
      other_drug_radio: [array[array.length - 1].other_drug_radio],
      name: [array[array.length - 1].name]
    });
  }
  // testing purpose print
  //printArray(global_array);

  return global_array;
}
export function checkWhenNumberChangeNutrient(array) {
  let global_array = [];

  let nutrient_radio = [];
  let name = [];

  let basic_copy;
  let flag = false;
  let first_entrance = true;
  // you have to make this generic
  if (array.length === 1) {
    global_array.push({
      basicID: array[array.length - 1].basicID,
      nutrient_radio: array[array.length - 1].nutrient_radio,
      name: array[array.length - 1].name
    });
  } else {
    for (let i in array) {
      i = parseInt(i);
      // because of i+1 otherwise it can step out of the array to non-existing element
      if (i < array.length - 1) {
        // checks all continous
        if (array[i].basicID === array[i + 1].basicID) {
          flag = true;
          if (first_entrance) {
            first_entrance = false;
            nutrient_radio.push(array[i].nutrient_radio);
            name.push(array[i].name);
          }
          nutrient_radio.push(array[i + 1].nutrient_radio);
          name.push(array[i + 1].name);
        }
        // checks all others, adds only one file
        if (array[i].basicID !== array[i + 1].basicID && !flag) {
          nutrient_radio.push(array[i].nutrient_radio);
          name.push(array[i].name);
        }
        if (array[i].basicID !== array[i + 1].basicID) {
          basic_copy = array[i].basicID;
          global_array.push({ basicID: basic_copy, nutrient_radio: nutrient_radio, name: name });
          first_entrance = true;
          nutrient_radio = [];
          name = [];
          flag = false;
        }
      }
    }
  }
  // checking last pair of consecutives if exist because of the upper constraint which doesn't permit going inside
  if (nutrient_radio.length > 0) {
    global_array.push({ basicID: basic_copy + 1, nutrient_radio: nutrient_radio, name: name });
  }
  // checking last index only, because of the upper constraint which doesn't permit going inside
  if (array[array.length - 1].basicID !== array[array.length - 2].basicID) {
    global_array.push({
      basicID: array[array.length - 1].basicID,
      nutrient_radio: [array[array.length - 1].nutrient_radio],
      name: [array[array.length - 1].name]
    });
  }
  // testing purpose print
  //printArray(global_array);

  return global_array;
}
export function checkWhenNumberChangeNatural(array) {
  let global_array = [];

  let helped = [];
  let not_helped = [];

  let basic_copy;
  let flag = false;
  let first_entrance = true;
  // you have to make this generic
  if (array.length === 1) {
    global_array.push({
      basicID: array[array.length - 1].basicID,
      helped: array[array.length - 1].helped,
      not_helped: array[array.length - 1].not_helped
    });
  } else {
    for (let i in array) {
      i = parseInt(i);
      // because of i+1 otherwise it can step out of the array to non-existing element
      if (i < array.length - 1) {
        // checks all continous
        if (array[i].basicID === array[i + 1].basicID) {
          flag = true;
          if (first_entrance) {
            first_entrance = false;
            helped.push(array[i].helped);
            not_helped.push(array[i].not_helped);
          }
          helped.push(array[i + 1].helped);
          not_helped.push(array[i + 1].not_helped);
        }
        // checks all others, adds only one file
        if (array[i].basicID !== array[i + 1].basicID && !flag) {
          helped.push(array[i].helped);
          not_helped.push(array[i].not_helped);
        }
        if (array[i].basicID !== array[i + 1].basicID) {
          basic_copy = array[i].basicID;
          global_array.push({ basicID: basic_copy, helped: helped, not_helped: not_helped });
          first_entrance = true;
          helped = [];
          not_helped = [];
          flag = false;
        }
      }
    }
  }
  // checking last pair of consecutives if exist because of the upper constraint which doesn't permit going inside
  if (helped.length > 0) {
    global_array.push({ basicID: basic_copy + 1, helped: helped, not_helped: not_helped });
  }
  // checking last index only, because of the upper constraint which doesn't permit going inside
  if (array[array.length - 1].basicID !== array[array.length - 2].basicID) {
    global_array.push({
      basicID: array[array.length - 1].basicID,
      helped: [array[array.length - 1].helped],
      not_helped: [array[array.length - 1].not_helped]
    });
  }
  // testing purpose print
  //printArray(global_array);

  return global_array;
}
// testing purpose only
function printArray(array) {
  for (let i in array) {
  }
}
