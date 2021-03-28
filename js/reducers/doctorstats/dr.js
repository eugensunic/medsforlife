export default function reducer(state = {}, action) {
  if (action.type === 'doctors_url_fetched') {
    state = { ...state, name1: action.payload, first_dr: true };
  }
  if (action.type === 'flag_grouping') {
    state = { ...state, name2: action.payload, second_dr: true };
  }
  //anxiety
  if (action.type === 'number_of_posts') {
    state = { ...state, name3: action.payload, third_dr: true };
  }

  return state;
}
