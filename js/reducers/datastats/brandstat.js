export default function reducer(state = { name: {} }, action) {
  if (action.type === 'brand_stat') {
    state = { ...state, name: action.payload, first_stat: true };
  } else {
    // when in production then error
    //
  }
  return state;
}
