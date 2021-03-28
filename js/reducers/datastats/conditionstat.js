export default function reducer(state = { name: {} }, action) {
  if (action.type === 'condition_stat') {
    state = { ...state, name: action.payload, third_stat: true };
  } else {
    // when in production then error
    // 
  }
  return state;
}
