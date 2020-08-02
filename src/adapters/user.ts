export const parseUser = (user) => {
  return {
    id: String(user[`id`]),
    name: user[`name`],
    avatar: user[`avatar_url`],
    email: user[`email`],
  };
};
