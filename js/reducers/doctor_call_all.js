export default function reducer(state = { name: {} }, action) {
  if (action.type === 'doctor_call_all') {
    state = { ...state, name: action.payload, first: true };
  }
  return state;
}
