function TweetCard({ tweet }) {
  return (
    <>
      <p>{tweet.Tweet}</p>
      <p>{tweet.User_email}</p>
    </>
  );
}

export default TweetCard;
