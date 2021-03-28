export default function reducer(state = { name: {} }, action) {
  if (action.type === 'other_stat') {
    state = { ...state, name: action.payload, seventh_stat: true };
  } else {
    // when in production then error
    // 
  }
  return state;
}
