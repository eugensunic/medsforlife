export default function reducer(state = { post_navigation: [true, false, false] }, action) {
  if (action.type === 'post-nav') {
    state = { ...state, post_navigation: action.color };
  }
  if (action.type === 'stat-nav') {
    state = { ...state, post_navigation: action.color };
  }
  return state;
}
