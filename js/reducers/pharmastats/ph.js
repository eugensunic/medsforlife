export default function reducer(state = {}, action) {
  if (action.type === 'pharmacist_url_fetched') {
    state = { ...state, name4: action.payload, first_ph: true };
  }
  if (action.type === 'flag_grouping_pharma') {
    state = { ...state, name5: action.payload, second_ph: true };
  }
  if (action.type === 'number_of_posts_pharma') {
    state = { ...state, name6: action.payload, third_ph: true };
  }

  return state;
}
