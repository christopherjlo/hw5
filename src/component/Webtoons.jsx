import React from "react";

const Webtoons = () => {
  // useState is a hook that allows us to track state in a function component.
  const [webtoons, setWebtoons] = React.useState([]);
  const [test, setTest] = React.useState();

  // useEffect is a hook that allows you to perform side effects in your components.
  React.useEffect(() => {
    var title = "potato";

    // The Fetch API provides an interface for fetching resources (including across the network).
    fetch(
      `https://webtoon.p.rapidapi.com/canvas/search?language=en&query=${title}&startIndex=0&pageSize=10&rapidapi-key=636efbaf2emsh65ac7d7cee8025fp1d2753jsn990327874197`
    )
      .then((res) => res.json())
      .then((json) => {
        setWebtoons(json.message.result.challengeSearch.titleList);
      });
  }, []);

  const ethan = async (url) => {
    const response = await fetch(`https://webtoon-phinf.pstatic.net${url}`, {
      method: "GET",
      headers: {
        Referer: "http://m.webtoons.com/",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 8.1.0; Mi MIX 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Mobile Safari/537.36",
      },
    });
    return response;
  };

  return (
    // Every React component can only return one child e.g the following div
    <div className="webtoons">
      {webtoons?.map((item) => (
        <div>
          <p>{item.title}</p>
          {<img width="200" src={ethan(item.thumbnail)} />}
        </div>
      ))}
    </div>
  );
};

export default Webtoons;
