// Function turns string into camel case
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

//helper used by other functions below
function matchRegexp(value, regexp) {
  return regexp.test(value);
}

function isExisty(value) {
  return value !== null && value !== undefined;
}

var validations = {

  isExisty(value) {
    return value !== null && value !== undefined;
  },

  isEmpty(value) {
    return value === '';
  },

  isEmptyString(value) {
    return value === '';
  },

  isUrl(url) {
    if(matchRegexp(url, /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i)) {
      return true;
    } else {
      return false;
    }
  },

  isEmail (value) {
      return matchRegexp(value, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i);
  },

  isNumeric(value) {
    if (typeof value === 'number') {
      return true;
    }
    return matchRegexp(value, /^[-+]?(?:\d*[.])?\d+$/);
  },

  isAlpha(value) {
    return matchRegexp(value, /^[A-Z]+$/i);
  },

  isAlphanumeric(value) {
    return matchRegexp(value, /^[0-9A-Z]+$/i);
  },

  isInt(value) {
    return matchRegexp(value, /^(?:[-+]?(?:0|[1-9]\d*))$/);
  },

  isFloat(value) {
    return matchRegexp(values, value, /^(?:[-+]?(?:\d+))?(?:\.\d*)?(?:[eE][\+\-]?(?:\d+))?$/);
  },

  isWords(value) {
    return matchRegexp(value, /^[A-Z\s]+$/i);
  },

  isSpecialWords(value) {
    return matchRegexp(values, value, /^[A-Z\s\u00C0-\u017F]+$/i);
  },

  maxLength(value, length) {
    return !isExisty(value) || value.length <= length;
  },

  minLength(value, length) {
    return !isExisty(value) || value.length >= length;
  },

  //alphanumeric + spaces + hyphens (address field, for example)
  isAlphanumericSpacesHyphens(value) {
    return matchRegexp(value, /^[0-9A-Z][0-9A-Z -]*[0-9A-Z]+$/i);
  },

  //alpha + spaces + hyphens (first/last names, city for example)
  //has to start with a character and finish with a character
  isAlphaSpacesHyphens(name) {
    if(matchRegexp(name, /^[A-Z][A-Z\s- ]*[A-Z]+$/i)) {
      return true;
    } else {
      return false;
    }
  },

  validateFName(fname) {
    if(this.isAlphaSpacesHyphens(fname) && this.minLength(fname, 2) && this.maxLength(fname, 50)) {
      return true;
    } else {
      return false;
    }
  },

  validateLName(lname) {
    if(this.isAlphaSpacesHyphens(lname) && this.minLength(lname, 2) && this.maxLength(lname, 50)) {
      return true;
    } else {
      return false;
    }
  },

  validateAddress(address) {
    if(this.isAlphanumericSpacesHyphens(address) && this.maxLength(address, 50)) {
      return true;
    } else {
      return false;
    }
  },

  validateUnit(unitNum) {
    if(unitNum === '' || (this.isAlphanumeric(unitNum) && this.maxLength(unitNum, 10))) {
      return true;
    } else {
      return false;
    }
  },

  validateCity(city) {
    if(this.isAlphaSpacesHyphens(city) && this.maxLength(city, 80)) {
      return true;
    } else {
      return false;
    }
  },

  validateProvince(province) {
    if(province != '') {
      return true;
    } else {
      return false;
    }
  },

  validatePostalCode(postalCode) {
    if(this.isPostalCode(postalCode) && this.maxLength(postalCode, 7)) {
      return true;
    } else {
      return false;
    }
  },

  validateEnbridge(enbridge) {
    if(this.isNumeric(enbridge) && this.maxLength(enbridge, 20)) {
      return true;
    } else {
      return false;
    }
  },

  validateHomePhone(homePhone) {
    if(this.isPhoneNumber(homePhone) && this.maxLength(homePhone, 14)) {
      return true;
    } else {
      return false;
    }
  },

  validateCellPhone(cellPhone) {
    if(this.isPhoneNumber(cellPhone) && this.maxLength(cellPhone, 14)) {
      return true;
    } else {
      return false;
    }
  },

  validateEmail(email) {
    if(this.isEmail(email) && this.maxLength(email, 50)) {
      return true;
    } else {
      return false;
    }
  },

  validateProgram(program) {
    if(program != false) {
      return true;
    } else {
      return false;
    }
  },

  validateInstallationDate(installationDate) {
    if (installationDate instanceof Date) {
      return true;
    } else {
      return false;
    }
  },

  validateInstallationTime(installationTime) {
    if (installationTime instanceof Date) {
      return true;
    } else {
      return false;
    }
  },

  validateHireDate(hireDate) {
    if (hireDate instanceof Date) {
      return true;
    } else {
      return false;
    }
  },

  validateSalesRep(salesRep) {
    if(salesRep != '') {
      return true;
    } else {
      return false;
    }
  },

  validateSalesRepId(salesRepId) {
    if(this.isNumeric(salesRepId)) {
      return true;
    } else {
      return false;
    }
  },

  validateApplicationNumber(applicationNumber) {
    if(this.isNumeric(applicationNumber)) {
      return true;
    } else {
      return false;
    }
  },

  validateSqft(sqft) {
    if(this.isNumeric(sqft) && this.maxLength(sqft, 5)) {
      return true;
    } else {
      return false;
    }
  },

  validateBathrooms(bathrooms) {
    if(this.isNumeric(bathrooms) && this.maxLength(bathrooms, 2)) {
      return true;
    } else {
      return false;
    }
  },

  validateResidents(residents) {
    if(this.isNumeric(residents) && this.maxLength(residents, 2)) {
      return true;
    } else {
      return false;
    }
  },

  validatePool(pool) {
    if(pool != '') {
      return true;
    } else {
      return false;
    }
  },

  validateChecklist(checklist) {
    if(checklist != '' && checklist == 'yes') {
      return true;
    } else {
      return false;
    }
  },

  validateAcknowledgement(acknowledgement) {
    if(acknowledgement) {
      return true;
    } else {
      return false;
    }
  },

  validateEmployeeType(employeeType) {
    if(employeeType != '') {
      return true;
    } else {
      return false;
    }
  },

  validateInstaller(installer) {
    if(installer != '') {
      return true;
    } else {
      return false;
    }
  },

  isPostalCode(value) {
    if (matchRegexp(value, /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/)) {
      return true;
    } else {
      return false;
    }
  },

  isPhoneNumber(value) {
    if(matchRegexp(value, /^\d{3}-\d{3}-\d{4}$|^\d{10}$/)) {
      return true;
    } else {
      return false;
    }
  },

  isPassword(password) {
    if(matchRegexp(password, /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9\u00C0-\u017F!@#$%^&*]{8,16}$/)) {
      return true;
    } else {
      return false;
    }
  },
};


//TODO REMOVE 2 following functions
function validateLogin(login) {
  if(login !== null && login !== undefined && login !== ''
                    && matchRegexp(login, /^[0-9A-Z]+$/i)
                    && login.length > 6) {
    console.log('Login passed the validation');
    return true;
  } else {
    console.log('Login failed the validation');
    return false;
  }
}



function validateEmail(email) {
  if(matchRegexp(email, /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i)) {
    return true;
  } else {
    return false;
  }
}

var dateHelpers = {
  /**
  * You first need to create a formatting function to pad numbers to two digits…
  **/
  twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
  },

  toMysqlFormat(date) {
    return date.getFullYear() + "-" + this.twoDigits(1 + date.getMonth()) + "-" + this.twoDigits(date.getDate()) + " " + this.twoDigits(date.getHours()) + ":" + this.twoDigits(date.getMinutes()) + ":" + this.twoDigits(date.getSeconds());
  }
};

var mediaQueries = {

  isTabletPortrait() {
    // @tablet-portrait media query:
    return (window.matchMedia('(orientation: portrait)').matches &&
      window.matchMedia('(max-device-aspect-ratio: 1/1)').matches &&
      window.matchMedia('(min-device-width: 481px)').matches) ||
      // @tablet-portrait-with-keyboard media query:
      (window.matchMedia('(orientation: landscape)').matches &&
      window.matchMedia('(max-device-aspect-ratio: 1/1)').matches &&
      window.matchMedia('(min-device-width: 481px)').matches);
  },

  isTabletLandscape() {
    // @tablet-landscape media query:
    return (window.matchMedia('(orientation: landscape)').matches &&
      window.matchMedia('(min-device-aspect-ratio: 1/1)').matches &&
      window.matchMedia('(min-device-width: 960px)').matches &&
      window.matchMedia('(max-device-width: 1366px)').matches);
  },

  isDesktopPortrait() {
    // @desktop-portrait media query:
    return (window.matchMedia('(orientation: portrait)').matches &&
      window.matchMedia('(min-device-aspect-ratio: 1/1)').matches);
  },

  isDesktopLandscape() {
    // @desktop-landscape media query:
    return (window.matchMedia('(orientation: landscape)').matches &&
      window.matchMedia('(min-device-aspect-ratio: 1/1)').matches &&
      window.matchMedia('(min-device-width: 1367px)').matches);
  }
};

module.exports = {
  dateHelpers,
  mediaQueries,
  validations,
  camelize,
  //TODO remove next 2 functions
  validateLogin,
  validateEmail
}
