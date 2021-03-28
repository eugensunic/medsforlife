export default function reducer(state = {}, action) {
  if (action.type === 'radio_sides') {
    state = { ...state, radio_side: action.payload };
  }
  if (action.type === 'side_effect1') {
    state = { ...state, effect1: action.payload };
  }
  if (action.type === 'side_effect2') {
    state = { ...state, effect2: action.payload };
  }
  if (action.type === 'side_effect3') {
    state = { ...state, effect3: action.payload };
  }
  if (action.type === 'side_effect4') {
    state = { ...state, effect4: action.payload };
  }
  if (action.type === 'side_general') {
    state = { ...state, side_effect_general: action.payload };
  }
  return state;
}
