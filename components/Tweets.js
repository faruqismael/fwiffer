import React, { useState, useEffect } from "react";
import Feed from "./Feed";
import { BsTwitter } from "react-icons/bs";

function Tweets({ tweetss }) {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("https://dummyapi.io/data/v1/post?limit=10", {
          headers: {
            "Content-Type": "application/json",
            "APP-ID": "623c54516994987d53d18718",
          },
        });

        const data = await resp.json();

        setTweets(data.data);
        setLoading(false);
        return data.data;
      } catch (error) {
        fetchData();
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-2 ">
      {loading && (
        <div className="h-[40vh] w-full text-2xl flex flex-col justify-center items-center">
          <BsTwitter className={"text-primary"} /> <p>Loading ...</p>
        </div>
      )}
      {tweets && tweets.map((tweet, i) => <Feed tweet={tweet} key={i} />)}
    </div>
  );
}

export default Tweets;
