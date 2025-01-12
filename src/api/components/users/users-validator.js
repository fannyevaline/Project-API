const joi = require('joi');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      passwordConfirm: joi
        .string()
        .min(6)
        .max(32)
        .required()
        .label('passwordConfirm'),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changePassword: {
    body: {
      old_password: joi.string().min(6).max(32).required(),
      new_password: joi.string().min(6).max(32).required(),
      confirm_new_password: joi.string().min(6).max(32).required(),
    },
  },
};
