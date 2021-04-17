import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Biography } from "./Biography";
import { PowerStatForm } from "./PowerStatsForm";

export function SuperHero() {
  const [superhero, setSuperhero] = useState({ loading: true, result: {} });
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`/api/powerstats/${encodeURIComponent(id)}`)
        .then((data) => data.json())
        .then((data) => {
          setSuperhero({ loading: false, result: data });
        });
    };

    fetchData();
  }, [id]);

  if (superhero.loading === false) {
    let { savedPowerStat, savedImage } = superhero.result;

    let {
      response,
      error,
      powerstats,
      id,
      name,
      image,
      work,
      appearance,
      biography,
      connections,
    } = superhero.result.defaults;

    if (response === "error") {
      return <div>{error}</div>;
    } else {
      return (
        <div>
          <h1>{name}</h1>
          <div
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                style={{
                  maxWidth: 480,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  style={{ width: 480, height: 634, marginTop: 8 }}
                  src={savedImage || image.url}
                  alt="not found"
                />

                <Biography
                  style={{ flex: 1 }}
                  title="Biography"
                  biography={biography}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  minWidth: 366,
                }}
              >
                <PowerStatForm
                  id={id}
                  name={name}
                  powerstats={savedPowerStat ?? powerstats}
                  imageUrl={image.url}
                />

                <Biography title="Appearance" biography={appearance} />
                <Biography title="Work" biography={work} />
                <Biography
                  style={{ flex: 1 }}
                  title="Connections"
                  biography={connections}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  } else return <div>Loading...</div>;
}
