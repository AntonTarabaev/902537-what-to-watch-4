const parseComment = (data) => {
  return {
    id: data[`id`],
    author: data[`user`][`name`],
    authorId: data[`user`][`id`],
    rating: data[`rating`],
    date: new Date(data[`date`]),
    comment: data[`comment`],
  };
};

export const parseComments = (comments: Comment[]) => {
  return comments.map(parseComment);
};
