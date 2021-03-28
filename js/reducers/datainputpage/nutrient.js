export default function reducer(state = { nutrient: null, radio_nutrient: null }, action) {
  if (action.type === 'nutrient') {
    state = { ...state, nutrient: action.payload };
  }
  if (action.type === 'radio_nutrient') {
    state = { ...state, radio_nutrient: action.payload };
  }
  return state;
}
