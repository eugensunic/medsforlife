export default function reducer(state = {}, action) {
  if (action.type === 'fetch_overview_extra_stats') {
    state = { ...state, overviewextra: action.payload };
  }
  if (action.type === 'fetch_overview_extra_stats_added_info') {
    state = { ...state, overviewextra_last_info: action.payload };
  }
  return state;
}
