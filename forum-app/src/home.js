import react, { useState, useEffect } from "react";
import supabase from "./supabaseClient";
import TweetCard from "./tweetCard";
function Home({ token }) {
  const [tweet, setTweet] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [fetchTweetsData, setFetchTweetsData] = useState(null);
  function handleChange(e) {
    setTweet(e.target.value);
  }
  async function handleTweet() {
    const { error } = await supabase
      .from("Tweets")
      .insert({ Tweet: tweet, name: token.user.email });
  }

  useEffect(() => {
    async function fetchTweets() {
      const { data, error } = await supabase.from("Tweets").select();

      if (error) {
        setFetchError(error);
        setFetchTweetsData(null);
        console.log(fetchError);
      }
      if (data) {
        setFetchTweetsData(data);
        setFetchError(null);
        console.log(data);
      }
    }
    fetchTweets();
  }, []);
  return (
    <>
      <main>
        <textarea
          className="inputTweet"
          placeholder="What do you want to share?"
          onChange={handleChange}
        ></textarea>
        <button className="shareButton" onClick={handleTweet}>
          Share
        </button>
      </main>
      <div>
        {fetchError && <p>{fetchError}</p>}
        {fetchTweetsData &&
          fetchTweetsData.map((tweet) => (
            <TweetCard tweet={tweet} key={tweet.id} />
          ))}
      </div>
    </>
  );
}

export default Home;
