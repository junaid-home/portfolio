export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Name required";
  }

  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.message) {
    errors.message = "Message Required";
  } else if (values.message.length < 10) {
    errors.message = "Message needs to be 10 characters or more";
  }
  return errors;
}
