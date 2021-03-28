export default function reducer(state = {}, action) {
  if (action.type === 'exercise') {
    state = { ...state, exercise: action.payload };
  }
  if (action.type === 'smoke') {
    state = { ...state, smoke: action.payload };
  }
  if (action.type === 'alcohol') {
    state = { ...state, alcohol: action.payload };
  }
  if (action.type === 'obesse') {
    state = { ...state, obesse: action.payload };
  }
  if (action.type === 'eat') {
    state = { ...state, eat: action.payload };
  }
  if (action.type === 'stress') {
    state = { ...state, stress: action.payload };
  }
  if (action.type === 'familly') {
    state = { ...state, familly: action.payload };
  }
  if (action.type === 'anxiety') {
    state = { ...state, anxiety: action.payload };
  }
  if (action.type === 'gluten') {
    state = { ...state, gluten: action.payload };
  }
  if (action.type === 'lactose') {
    state = { ...state, lactose: action.payload };
  }
  if (action.type === 'acid') {
    state = { ...state, acid: action.payload };
  }
  if (action.type === 'overall') {
    state = { ...state, overall: action.payload };
  }
  if (action.type === 'good') {
    state = { ...state, good: action.payload };
  }
  if (action.type === 'pylori') {
    state = { ...state, pylori: action.payload };
  }
  if (action.type === 'a_rebound') {
    state = { ...state, a_rebound: action.payload };
  }

  return state;
}
