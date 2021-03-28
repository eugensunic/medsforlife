export default function reducer(state = { filter1: false, filter2: false, filter3: false }, action) {
  if (action.type === 'post_post') {
    //uglavnom, trebas napraviti posebne reducere za sve GET akcije
    state = { ...state, post_array: action.payload, filter1: true };
  }
  if (action.type === 'data_data') {
    //

    state = { ...state, data_array: action.payload, filter2: true };
  }
  if (action.type === 'rest_rest') {
    //

    state = { ...state, rest_array: action.payload, filter3: true };
  } else {
    //
    //
    //
  }
  return state;
}
