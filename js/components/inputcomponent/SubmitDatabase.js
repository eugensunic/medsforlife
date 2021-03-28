export function radioSideEffects(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
    if (array[2]) {
      return 'dont know';
    }
  }
  return 'unknown';
}

export function radioOtherDrugs(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
  }
  return 'unknown';
}

export function radioNutrient(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
    if (array[2]) {
      return 'dont know';
    }
  }
  return 'unknown';
}

export function genderValue(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'male';
    }
    if (array[1]) {
      return 'female';
    }
    if (array[2]) {
      return 'other';
    }
  }
  return 'unknown';
}

export function raceValue(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'white';
    }
    if (array[1]) {
      return 'black';
    }
    if (array[2]) {
      return 'asian';
    }
    if (array[3]) {
      return 'hispanic/latino';
    }
    if (array[4]) {
      return 'other';
    }
  }
  return 'unknown';
}

export function globalTime(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'day';
    }
    if (array[1]) {
      return 'week';
    }
    if (array[2]) {
      return 'month';
    }
    if (array[3]) {
      return 'year';
    }
  }
  return null;
}

export function dailyUse(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
    if (array[2]) {
      return 'unknown';
    }
  }
  return null;
}

// ---------------------EXTRA BEGIN-------------------------
export function extraExercise(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'daily';
    }
    if (array[1]) {
      return 'few times per week';
    }
    if (array[2]) {
      return 'few times per month';
    }
    if (array[3]) {
      return 'few times a year';
    }
    if (array[4]) {
      return 'never';
    }
  }
  return 'unknown';
}

export function extraSmoke(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'daily';
    }
    if (array[1]) {
      return 'few times per week';
    }
    if (array[2]) {
      return 'few times per month';
    }
    if (array[3]) {
      return 'few times a year';
    }
    if (array[4]) {
      return 'never';
    }
  }
  return 'unknown';
}

export function extraAlcohol(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'daily';
    }
    if (array[1]) {
      return 'few times per week';
    }
    if (array[2]) {
      return 'few times per month';
    }
    if (array[3]) {
      return 'few times a year';
    }
    if (array[4]) {
      return 'never';
    }
  }
  return 'unknown';
}

export function extraObese(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
    if (array[2]) {
      return 'little';
    }
    if (array[3]) {
      return 'not sure';
    }
  }
  return 'unknown';
}

export function extraEat(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'daily';
    }
    if (array[1]) {
      return 'few times per week';
    }
    if (array[2]) {
      return 'few times per month';
    }
    if (array[3]) {
      return 'few times a year';
    }
    if (array[4]) {
      return 'rarely eat healthy';
    }
  }
  return 'unknown';
}

export function extraStress(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
    if (array[2]) {
      return 'sometimes';
    }
    if (array[3]) {
      return 'rarely get stressed';
    }
    if (array[4]) {
      return 'not sure';
    }
  }
  return 'unknown';
}

export function extraAnxiety(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
    if (array[2]) {
      return 'maybe';
    }
    if (array[3]) {
      return 'dont know';
    }
  }
  return 'unknown';
}

export function extraFamily(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
    if (array[2]) {
      return 'dont know';
    }
  }
  return 'unknown';
}

export function extraGluten(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
    if (array[2]) {
      return 'dont know';
    }
  }
  return 'unknown';
}

export function extraLactose(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
    if (array[2]) {
      return 'dont know';
    }
  }
  return 'unknown';
}

export function extraAcid(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
    if (array[2]) {
      return 'sometimes';
    }
    if (array[3]) {
      return 'dont know';
    }
  }
  return 'unknown';
}

export function extraOverall(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'very satisfied';
    }
    if (array[1]) {
      return 'satisfied';
    }
    if (array[2]) {
      return 'good';
    }
    if (array[3]) {
      return 'poor';
    }
    if (array[4]) {
      return 'horrible';
    }
  }
  return 'unknown';
}

export function extraGood(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
    if (array[2]) {
      return 'somehow';
    }
    if (array[3]) {
      return 'dont know';
    }
  }
  return 'unknown';
}

export function extraAcidRebound(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
  }
  return 'unknown';
}

export function extraPylori(array) {
  if (typeof array !== 'undefined') {
    if (array[0]) {
      return 'yes';
    }
    if (array[1]) {
      return 'no';
    }
    if (array[2]) {
      return 'dont know';
    }
  }
  return 'unknown';
}
