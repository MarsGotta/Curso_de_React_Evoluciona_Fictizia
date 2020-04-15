import { emojis } from "../variables";

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

const randomEmoji = () => emojis[Math.floor(Math.random() * (emojis.length))];

export { filteredFriend, randomEmoji };
