
import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export  const registerSchema = yup.object().shape({
  firstName:yup.string().min(3, 'must be at least 3 characters').max(30, 'must be at least 30 characters or less').required("This filed is Required"),
  lastName:yup.string().min(3, 'must be at least 3 characters').max(30, 'must be at least 30 characters or less').required("This filed is Required"),
  email: yup.string().email("Please enter a valid email").required("This filed is Required"),
  phone: yup.number('must be only numbers ').positive('must be only number').integer('must be only number').required("This filed is Required").min(11, 'must 11 numbers'),
  //.matches( /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g, "Invalid phone number")
  password: yup.string().min(5, 'must be at least 5 characters').required("This filed is Required"),
  //  .matches(passwordRules, { message: "Please create a stronger password" })
  passwordCon: yup.string().oneOf([yup.ref("password"), null], "Passwords must match")
  .required("This filed is Required"),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

export const signInSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("This filed is Required"),
  password: yup.string().min(5).required("This filed is Required"),
});