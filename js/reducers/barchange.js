export default function reducer(
  state = {
    begin_patient: 0,
    end_patient: 15,
    begin_doctor: 0,
    end_doctor: 15,
    begin_pharma: 0,
    end_pharma: 15,
    barnum: 1,
    page_num_patient: 1,
    page_num_dr: 1,
    page_num_pharma: 1,
    clicked_patient: false,
    clicked_doctor: false,
    clicked_pharma: false,
    array_patient: [1, 2, 3, 4, 5],
    next_patient: false,
    selected_patient: 1,
    array_doctor: [1, 2, 3, 4, 5],
    next_doctor: false,
    selected_doctor: 1,
    array_pharma: [1, 2, 3, 4, 5],
    next_pharma: false,
    selected_pharma: 1
  },
  action
) {
  if (action.type === 'bar_change_patient') {
    state = {
      ...state,
      begin_patient: (action.barnum - 1) * 16,
      end_patient: action.barnum * 16 - 1,
      clicked_patient: true,
      page_num_patient: action.barnum
    };
  }
  if (action.type === 'bar_change_doctor') {
    state = {
      ...state,
      begin_doctor: (action.barnum - 1) * 16,
      end_doctor: action.barnum * 16 - 1,
      clicked_doctor: true,
      page_num_dr: action.barnum
    };
  }
  if (action.type === 'bar_change_pharma') {
    state = {
      ...state,
      begin_pharma: (action.barnum - 1) * 16,
      end_ppageharma: action.barnum * 16 - 1,
      clicked_pharma: true,
      page_num_pharma: action.barnum
    };
  }
  //-------------------------------------------------------------------------------------------
  //replacing states with this one
  //-------------------------------------------------------------------------------------------

  if (action.type === 'patient_bar_send') {
    state = {
      ...state,
      array_patient: action.array_patient,
      next_patient: action.next_patient,
      selected_patient: action.selected_patient,
      stop_navigation: action.stop_navigation
    };
    window.scrollTo(0, 0);
    if (state.stop_navigation != 'stop') {
      window.history.pushState(
        {
          num: state.selected_patient
        },
        null,
        null
      );
    }
  }
  if (action.type === 'doctor_bar_send') {
    state = {
      ...state,
      array_doctor: action.array_doctor,
      next_doctor: action.next_doctor,
      selected_doctor: action.selected_doctor,
      stop_navigation: action.stop_navigation
    };
    window.scrollTo(0, 0);
    if (state.stop_navigation != 'stop') {
      window.history.pushState(
        {
          num: state.selected_doctor
        },
        null,
        null
      );
    }
  }
  if (action.type === 'pharma_bar_send') {
    state = {
      ...state,
      array_pharma: action.array_pharma,
      next_pharma: action.next_pharma,
      selected_pharma: action.selected_pharma,
      stop_navigation: action.stop_navigation
    };
    window.scrollTo(0, 0);
    if (state.stop_navigation != 'stop') {
      window.history.pushState(
        {
          num: state.selected_pharma
        },
        null,
        null
      );
    }
  }
  return state;
}
