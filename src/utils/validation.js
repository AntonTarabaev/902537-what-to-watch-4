export const isValidEmail = (email) => {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email);
};

export const isValidPassword = (password) => {
  return typeof password === `string` && password.length > 3;
};
