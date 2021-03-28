export default function reducer(state = {}, action) {
  if (action.type === 'weight') {
    state = { ...state, weight: action.payload };
  }
  if (action.type === 'height') {
    state = { ...state, height: action.payload };
  }
  if (action.type === 'age') {
    state = { ...state, age: action.payload };
  }
  if (action.type === 'height_si') {
    state = { ...state, height_select: action.payload };
  }
  if (action.type === 'weight_si') {
    state = { ...state, weight_select: action.payload };
  }
  if (action.type === 'radio_gender') {
    state = { ...state, gender: action.payload };
  }
  if (action.type === 'radio_race') {
    state = { ...state, race: action.payload };
  } else {
    // when in production then error
    //
  }
  return state;
}
