export default function reducer(state = {}, action) {
  if (action.type === 'drug_generic' && action.payload1 == 'first') {
    state = { ...state, id: action.payload1, generic1: action.payload2 };
  }
  if (action.type === 'drug_brand' && action.payload1 == 'first') {
    state = { ...state, id: action.payload1, brand1: action.payload2 };
  }
  if (action.type === 'dosage' && action.payload1 == 'first') {
    state = { ...state, id: action.payload1, dosage1: action.payload2 };
  }
  if (action.type === 'duration' && action.payload1 == 'first') {
    state = { ...state, id: action.payload1, duration1: action.payload2 };
  }
  if (action.type === 'globaltime' && action.payload1 == 'first') {
    state = { ...state, id: action.payload1, globaltime1: action.payload2 };
  }
  if (action.type === 'daily' && action.payload1 == 'first') {
    state = { ...state, id: action.payload1, daily1: action.payload2 };
  }
  //---------------------------------------------------------------------------------------------------------------------
  //---------------------------------------------------------------------------------------------------------------------
  if (action.type === 'drug_generic' && action.payload1 == 'second') {
    state = { ...state, id: action.payload1, generic2: action.payload2 };
  }
  if (action.type === 'drug_brand' && action.payload1 == 'second') {
    state = { ...state, id: action.payload1, brand2: action.payload2 };
  }
  if (action.type === 'dosage' && action.payload1 == 'second') {
    state = { ...state, id: action.payload1, dosage2: action.payload2 };
  }
  if (action.type === 'duration' && action.payload1 == 'second') {
    state = { ...state, id: action.payload1, duration2: action.payload2 };
  }
  if (action.type === 'globaltime' && action.payload1 == 'second') {
    state = { ...state, id: action.payload1, globaltime2: action.payload2 };
  }
  if (action.type === 'daily' && action.payload1 == 'second') {
    state = { ...state, id: action.payload1, daily2: action.payload2 };
  }
  //-----------------------------------------------------------------------------------------------------------------------
  //-----------------------------------------------------------------------------------------------------------------------
  if (action.type === 'drug_generic' && action.payload1 == 'third') {
    state = { ...state, id: action.payload1, generic3: action.payload2 };
  }
  if (action.type === 'drug_brand' && action.payload1 == 'third') {
    state = { ...state, id: action.payload1, brand3: action.payload2 };
  }
  if (action.type === 'dosage' && action.payload1 == 'third') {
    state = { ...state, id: action.payload1, dosage3: action.payload2 };
  }
  if (action.type === 'duration' && action.payload1 == 'third') {
    state = { ...state, id: action.payload1, duration3: action.payload2 };
  }
  if (action.type === 'globaltime' && action.payload1 == 'third') {
    state = { ...state, id: action.payload1, globaltime3: action.payload2 };
  }
  if (action.type === 'daily' && action.payload1 == 'third') {
    state = { ...state, id: action.payload1, daily3: action.payload2 };
  }
  //------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------

  if (action.type === 'drug_generic' && action.payload1 == 'fourth') {
    state = { ...state, id: action.payload1, generic4: action.payload2 };
  }
  if (action.type === 'drug_brand' && action.payload1 == 'fourth') {
    state = { ...state, id: action.payload1, brand4: action.payload2 };
  }
  if (action.type === 'dosage' && action.payload1 == 'fourth') {
    state = { ...state, id: action.payload1, dosage4: action.payload2 };
  }
  if (action.type === 'duration' && action.payload1 == 'fourth') {
    state = { ...state, id: action.payload1, duration4: action.payload2 };
  }
  if (action.type === 'globaltime' && action.payload1 == 'fourth') {
    state = { ...state, id: action.payload1, globaltime4: action.payload2 };
  }
  if (action.type === 'daily' && action.payload1 == 'fourth') {
    state = { ...state, id: action.payload1, daily4: action.payload2 };
  }

  return state;
}
