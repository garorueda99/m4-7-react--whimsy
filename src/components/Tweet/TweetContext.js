import React, { createContext, useState } from "react";
import avatar from "../../assets/carmen-sandiego.png";

const moment = require("moment");
export const TweetContext = createContext(null);

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const tweetContents = "Where in the world am I?";
  const displayName = "Carmen Sandiego ✨";
  const username = "carmen-sandiego";
  const avatarSrc = avatar;
  const isRetweetedByCurrentUser = isRetweeted;
  const isLikedByCurrentUser = isLiked;
  const date = moment("20200728T0900")
    .format("h:mm A - MMM Do, YYYY")
    .toString();
  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
        date,
        numOfLikes,
        numOfRetweets,
        setNumOfRetweets,
        setIsRetweeted,
        setIsLiked,
        setNumOfLikes,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
