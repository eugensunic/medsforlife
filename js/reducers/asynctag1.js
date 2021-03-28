export default function reducer(state = { name: {} }, action) {
  if (action.type === 'tag1') {
    state = { ...state, name: action.payload, second: true };
  } else {
    //
    //
    //
  }
  return state;
}
