import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export function Favourites() {
  const [superhero, setSuperhero] = useState({ loading: true, result: {} });
  let history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`/api/powerstats`)
        .then((data) => data.json())
        .then((data) => {
          setSuperhero({ loading: false, result: data });
        });
    };

    fetchData();
  }, []);

  function _onClick(id) {
    history.push(`/superhero/${id}`);
  }

  if (superhero.loading === false) {
    return (
      <div>
        <h2>Favourites</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {superhero.result.map((data) => (
            <div
              key={data.id}
              onClick={() => _onClick(data.id)}
              style={{
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
            >
              <img
                style={{ height: 290, width: 200 }}
                src={`/api/images/${data.id}.jpeg`}
                alt="not found"
              />
              <Link
                to={`/superhero/${data.id}`}
                style={{ border: 1, borderColor: "gray" }}
              >
                {data.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  } else return <div>Loading...</div>;
}
