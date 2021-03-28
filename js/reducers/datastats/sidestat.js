export default function reducer(state = { name: {} }, action) {
  if (action.type === 'side_stat') {
    state = { ...state, name: action.payload, eight_stat: true };
  } else {
    // when in production then error
    // 
  }
  return state;
}
