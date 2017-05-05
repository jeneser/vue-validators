import validator from 'validator'

export const methods = {
  isEmail: function (str) {
    return validator.isEmail(str)
  }
}
