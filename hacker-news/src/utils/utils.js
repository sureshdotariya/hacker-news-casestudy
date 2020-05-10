export const UpdateVote = (votes, id, type) => {
  if (!votes || !id) {
    return [];
  }
  const upVote = type === 'up' ? true : false;
  const news = votes.map((news) => {
    if (news.id === id) {
      return {
        ...news,
        votes: upVote ? news.votes + 1 : news.votes - 1,
      };
    }
    return news;
  });

  return news;
};
