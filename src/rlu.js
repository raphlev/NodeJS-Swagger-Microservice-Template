/**
 * This module is added just to check dev npm script config to allow js file compilation
 * Usuful in allowJs property is used in tsconfig
 */

const getName = () => {
  return "Jim";
};

const getLocation = () => {
  return "Munich";
};

const dateOfBirth = "12.01.1973";

exports.getName = getName;
exports.getLocation = getLocation;
exports.dob = dateOfBirth;

/**
 * VARIATION IN SYNTAX
 * 
 * 

exports.getName = () => {
  return 'Jim';
};

exports.getLocation = () => {
  return 'Munich';
};

exports.dob = '12.01.1982';

 */
