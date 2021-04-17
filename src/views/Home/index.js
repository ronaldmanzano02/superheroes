import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export function Home() {
  let history = useHistory();
  const [input, setInput] = useState("");
  function _handleKeyDown(e) {
    if (e.key === "Enter") {
      history.push(`/search/${input}`);
    }
  }

  return (
    <div style={{ display: "flex", backgroundColor: "white", padding: 20 }}>
      <Link to="/">Home</Link>
      <div style={{ marginLeft: "auto" }}>
        <label htmlFor="search">Search </label>
        <input
          name="search"
          style={{ width: 300 }}
          value={input}
          onInput={(e) => setInput(e.target.value)}
          onKeyDown={_handleKeyDown}
          placeholder="Search your favourite superhero.."
        />
      </div>
    </div>
  );
}
