export default function reducer(state = {}, action) {
  if (action.type === 'condition_gastro') {
    state = { ...state, gastro: action.payload };
  }
  if (action.type === 'condition_other') {
    state = { ...state, other: action.payload };
  }
  if (action.type === 'condition_ppi') {
    state = { ...state, ppi: action.payload };
  }
  return state;
}
