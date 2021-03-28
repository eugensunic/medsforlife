export default function reducer(state = {}, action, name = 'home') {
  if (action.type === 'home_element') {
    state = { ...state, name: action.payload };
  }
  if (action.type === 'stats_element') {
    state = { ...state, name: action.payload };
  }
  if (action.type === 'input_element') {
    state = { ...state, name: action.payload };
  }
  if (action.type === 'about_element') {
    state = { ...state, name: action.payload };
  }
  if (action.type === 'starter_element') {
    state = { ...state, name: action.payload };
  }
  if (action.type === 'research_element') {
    state = { ...state, name: action.payload };
  }
  if (action.type === 'newstats_element') {
    state = { ...state, name: action.payload };
  }
  return state;
}
