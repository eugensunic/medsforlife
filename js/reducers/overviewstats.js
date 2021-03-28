export default function reducer(state = {}, action) {
  if (action.type === 'fetch_overview_stats') {
    state = { ...state, overview: action.payload };
  }
  return state;
}
