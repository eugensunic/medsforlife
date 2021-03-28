export default function reducer(state = { name: {} }, action) {
  if (action.type === 'conditionppi_stat') {
    state = { ...state, name: action.payload, second_stat: true };
  } else {
    // when in production then error
    // 
  }
  return state;
}
