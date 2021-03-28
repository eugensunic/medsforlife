export default function reducer(state = { name: {} }, action) {
  if (action.type === 'natural_stat') {
    state = { ...state, name: action.payload, fifth_stat: true };
  } else {
    // when in production then error
    // 
  }
  return state;
}
