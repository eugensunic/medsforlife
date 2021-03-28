export default function reducer(state = { name: {} }, action) {
  if (action.type === 'tag2') {
    state = { ...state, name: action.payload, third: true };
  } else {
    // when in production then error
    // 
  }
  return state;
}
