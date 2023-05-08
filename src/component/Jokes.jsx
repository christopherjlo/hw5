import React from "react";

const Jokes = () => {
  // useState is a hook that allows us to track state in a function component.
  const [jokes, setJokes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);


  // useEffect is a hook that allows you to perform side effects in your components.
  React.useEffect(() => {
    // The Fetch API provides an interface for fetching resources (including across the network).
    fetch(
      `https://dad-jokes.p.rapidapi.com/random/joke?rapidapi-key=636efbaf2emsh65ac7d7cee8025fp1d2753jsn990327874197`
    )
      .then((res) => res.json())
      .then((json) => {
        setJokes(json.body);
      });
  }, [counter]);

  const newJoke = () => {
    setCounter(counter + 1);
  }

  return (
    // Every React component can only return one child e.g the following div
    <div className="jokes">
      {jokes?.map((item) => (
        <div>
          <h1>Random Dad Joke Generator</h1>
          <p>{item.setup}</p>
          <p>{item.punchline}</p>
          <button onClick={newJoke}>Click me for a new dad joke!</button>
        </div>
      ))}
    </div>
  );
};

export default Jokes;
