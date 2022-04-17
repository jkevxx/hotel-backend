/**
 * Fields validation in used by folder validators/
 */

const { validationResult } = require('express-validator')

const validatorHandler = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    const errorArray = [];
    const typeError = error.array();
    typeError.forEach(err => {
      // console.log(err.msg);
      errorArray.push(err.msg)
    })
    // console.log(Object.values(typeError));
    res.status(400).json({ errors: errorArray })
  }
}

module.exports = validatorHandler;
