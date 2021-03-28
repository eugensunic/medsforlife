export default function reducer(state = { getFlag: false }, action) {
  if (action.type === 'get-max-id') {
    let idValue = action.payload;
    if (idValue === undefined || idValue === null) {
      idValue = '0';
    }
    state = { ...state, getLastId: parseInt(idValue) + 1, getFlag: true };
  }
  return state;
}
