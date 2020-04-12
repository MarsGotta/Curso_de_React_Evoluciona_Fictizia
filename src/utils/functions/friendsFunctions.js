const filteredFriend = (text, friends) => {
  return friends.filter(({ name: { first, last } }) => {
    if (first.toLowerCase().includes(text)) {
      return true;
    }
    if (last.toLowerCase().includes(text)) {
      return true;
    }
    return false;
  });
};

export { filteredFriend };
