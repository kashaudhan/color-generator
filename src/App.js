import React, { useState } from "react";
import SingleColor from "./Singlecolor";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#00FF00").all(10));
  console.log("List ", list);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            className={`${error ? "error" : null}`}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#00FF00"
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((clr, index) => {
          return <SingleColor key={index} {...clr} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
