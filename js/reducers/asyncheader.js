export default function reducer(state = { name: {} }, action) {
  if (action.type === 'header') {
    state = { ...state, name: action.payload, first: true };
  } else {
    // when in production then error
    //
  }
  return state;
}
