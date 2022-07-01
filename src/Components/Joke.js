import "../Stylesheets/joke.css";
import { useState, useEffect } from "react";

export default function Joke({ error, category, type, setup, delivery, joke }) {
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setFlag(false);
  }, [setup]);

  function showJoke() {
    setFlag(true);
  }

  function hideJoke() {
    setFlag(false);
  }

  return (
    <div className="joke-paragraph">
      <div className="main-joke">
        {error ? (
          <p>We don't have jokes in this category in the language selected</p>
        ) : joke ? (
          <p>"{joke}"</p>
        ) : (
          <div className="text-joke" onMouseEnter={showJoke} onClick={hideJoke}>
            <p>"{setup}"</p> {flag && <p className="second-part">"{delivery}"</p>}
          </div>
        )}
      </div>

      {!error && (
         <div className="details-joke">
         <strong>Type:</strong> {type}
         <p>
           <strong>Category:</strong> {category}
         </p>
       </div>
      )}
     
    </div>
  );
}
