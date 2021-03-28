export default function reducer(state = { name: {} }, action) {
  if (action.type === 'pharma_call_all') {
    state = { ...state, name: action.payload, first: true };
  }

  return state;
}
