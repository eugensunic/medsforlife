export default function reducer(state = {}, action) {
  if (action.type === 'other') {
    state = { ...state, otherdrug: action.payload };
  }
  if (action.type === 'radio_other') {
    state = { ...state, radio_other: action.payload };
  }
  return state;
}
