import { friends } from "./data.js";

export default function filterFriends(searchText, maxResults) {
  const myFriends = friends
    .filter(friend => {
      if (friend.name.first.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (friend.name.last.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);

  return myFriends;
}
