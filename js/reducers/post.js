export default function reducer(state = { post_criteria: 'default', doctor_criteria: 'default', pharma_criteria: 'default' }, action) {
  if (action.type === 'post_request') {
    state = { ...state, post_response: action.payload };
  }

  if (action.type === 'post_criteria') {
    state = { ...state, post_criteria: action.payload };
  }

  if (action.type === 'doctor_criteria') {
    state = { ...state, doctor_criteria: action.payload };
  }

  if (action.type === 'pharma_criteria') {
    state = { ...state, pharma_criteria: action.payload };
  }

  return state;
}
