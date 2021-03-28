export default function reducer(state = {}, action) {
  if (action.type === 'dosage_to_sides') {
    state = { ...state, name1: action.payload, first_other: true };
  }
  if (action.type === 'drug_years') {
    state = { ...state, name2: action.payload, second_other: true };
  }
  //anxiety
  if (action.type === 'drugs_to_anxiety') {
    state = { ...state, name3: action.payload, third_other: true };
  }
  if (action.type === 'drugs_to_kidney') {
    state = { ...state, name31: action.payload, third1_other: true };
  }
  if (action.type === 'drugs_to_osteo') {
    state = { ...state, name32: action.payload, third2_other: true };
  }
  if (action.type === 'drugs_to_dementia') {
    state = { ...state, name33: action.payload, third3_other: true };
  }
  if (action.type === 'drugs_to_explicitnone') {
    state = { ...state, name4: action.payload, fourth_other: true };
  }
  //magnesium
  if (action.type === 'drugs_to_magnesium') {
    state = { ...state, name5: action.payload, fifth_other: true };
  }
  if (action.type === 'drugs_to_b12') {
    state = { ...state, name51: action.payload, fifth1_other: true };
  }
  if (action.type === 'drugs_to_calcium') {
    state = { ...state, name52: action.payload, fifth2_other: true };
  }
  //
  if (action.type === 'drugs_to_stomach_polyps') {
    state = { ...state, name6: action.payload, sixth_other: true };
  }
  if (action.type === 'duration_to_sides') {
    state = { ...state, name7: action.payload, seventh_other: true };
  }
  if (action.type === 'natural_remedies_helped') {
    state = { ...state, name8: action.payload, eight_other: true };
  }
  if (action.type === 'patients_on_daily') {
    state = { ...state, name9: action.payload, nineth_other: true };
  }
  if (action.type === 'patients_on_dosage') {
    state = { ...state, name10: action.payload, tenth_other: true };
  }
  if (action.type === 'post_with_sides3') {
    state = { ...state, name11: action.payload, eleventh_other: true };
  }
  if (action.type === 'post_with_sides_greater3') {
    state = { ...state, name12: action.payload, twelveth_other: true };
  }
  if (action.type === 'post_with_sides_lower3') {
    state = { ...state, name13: action.payload, thirteenth_other: true };
  }
  if (action.type === 'side_effects_generic') {
    state = { ...state, name14: action.payload, fourteenth_other: true };
  }
  if (action.type === 'gerd_barrett_hiatal') {
    state = { ...state, name15: action.payload, fifteenth_other: true };
  }
  if (action.type === 'gerd_barrett_hiatal_and') {
    state = { ...state, name16: action.payload, sixteenth_other: true };
  }
  return state;
}
