export default function reducer(state = {}, action) {
  if (action.type === 'natural_helped') {
    state = { ...state, naturalhelped: action.payload };
  }
  if (action.type === 'natural_nothelped') {
    state = { ...state, naturalnothelped: action.payload };
  }

  return state;
}
