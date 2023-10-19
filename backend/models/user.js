// const { Schema, model } = require('mongoose');
// const Joi = require('joi');

// const userSchema = Schema(
//   {
//     name: {
//       type: String,
//       required: [true, 'Name is required'],
//     },
//     email: {
//       type: String,
//       required: [true, 'Email is required'],
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: [true, 'Password is required'],
//     },
//     token: {
//       type: String,
//       default: null,
//     },
//   },
//   { versionKey: false, timestamps: true }
// );

// const authRegisterSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().min(6).required(),
// });

// const authLoginSchema = Joi.object({
//   email: Joi.string().email().required(),
//   password: Joi.string().min(6).required(),
// });

// const User = model('user', userSchema);

// module.exports = {
//   User,
//   authSchema: {
//     authRegisterSchema,
//     authLoginSchema,
//   },
// };
