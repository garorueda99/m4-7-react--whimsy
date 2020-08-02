import React, { useContext } from "react";
import styled from "styled-components";

import LikeButton from "../LikeButton";
import Action from "./Action";
import TweetActionIcon from "./TweetActionIcon";
import { TweetContext } from "./TweetContext";

const ActionBar = () => {
  const {
    setIsRetweeted,
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
    setNumOfRetweets,
    setIsLiked,
    setNumOfLikes,
  } = useContext(TweetContext);

  // useEffect(() => {
  //   console.log(isRetweetedByCurrentUser);

  // }, [isRetweetedByCurrentUser]);
  return (
    <Wrapper>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="reply" />
      </Action>
      <Action
        color="rgb(23, 191, 99)"
        size={40}
        onClick={() => {
          setIsRetweeted(!isRetweetedByCurrentUser);
          isRetweetedByCurrentUser
            ? setNumOfRetweets((n) => n - 1)
            : setNumOfRetweets((n) => n + 1);
        }}
      >
        <TweetActionIcon
          kind="retweet"
          color={
            isRetweetedByCurrentUser ? "rgb(23, 191, 99)" : "rgb(90, 12, 21)"
          }
        />
      </Action>
      <Action
        color="rgb(224, 36, 94)"
        size={40}
        onClick={() => {
          setIsLiked(!isLikedByCurrentUser);
          isLikedByCurrentUser
            ? setNumOfLikes((n) => n - 1)
            : setNumOfLikes((n) => n + 1);
        }}
      >
        <LikeButton isLiked={isLikedByCurrentUser} />
      </Action>
      <Action color="rgb(27, 149, 224)" size={40}>
        <TweetActionIcon kind="share" />
      </Action>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 48px;
`;

export default ActionBar;
