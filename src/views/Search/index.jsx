import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export function Search() {
  const [result, setResults] = useState({ loading: true, data: {} });
  let { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`/api/powerstats/search/${encodeURIComponent(name)}`)
        .then((data) => data.json())
        .then((data) =>
          setResults({ loading: false, data: JSON.parse(`${data}`) })
        );
    };
    fetchData();
  }, [name]);

  if (result.loading) return <div>Loading...</div>;
  else {
    if (result.data.results)
      return (
        <>
          <h2>{`Search Results for: ${name}`}</h2>
          <div>
            {result.data.results.map((item) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  marginBottom: 10,
                  backgroundColor: "white",
                }}
              >
                <img
                  style={{ height: 100, width: 70 }}
                  src={`${item.image.url}`}
                  alt="Not Found"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 10,
                  }}
                >
                  <Link to={`/superhero/${item.id}`} key={item.id}>
                    {item.name}
                  </Link>
                  <div>{`Full Name: ${item.biography["full-name"]}`}</div>
                  <div>
                    {Object.keys(item.powerstats).map((key, i) =>
                      `${key}: ${item.powerstats[key]}`.concat(
                        Object.keys(item.powerstats).length - 1 !== i
                          ? " | "
                          : ""
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    else return <h1>No Results</h1>;
  }
}
