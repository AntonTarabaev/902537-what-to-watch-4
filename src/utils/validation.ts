import {CommentSettings} from "@constants/main";

export const isValidEmail = (email: string) => {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email);
};

export const isValidPassword = (password: string) => {
  return typeof password === `string` && password.length > 0;
};

export const isValidComment = (comment: string) => {
  return comment.length >= CommentSettings.MIN_LENGTH && (comment.length <= CommentSettings.MAX_LENGTH);
};
