export default function reducer(state = { name: {} }, action) {
  if (action.type === 'nutrient_stat') {
    state = { ...state, name: action.payload, sixth_stat: true };
  } else {
    // when in production then error
    // 
  }
  return state;
}
