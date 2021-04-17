import React from "react";

export function Biography({ title, biography, style }) {
  if (biography)
    return (
      <fieldset style={style}>
        <legend>{title}</legend>
        {Object.keys(biography).map((key, i) => (
          <div key={key} style={{ display: "flex" }}>
            <div
              style={{
                display: "block",
                textAlign: "right",
                width: 150,
                minWidth: 150,
                color: "GrayText",
              }}
            >{`${key} : `}</div>
            <div style={{ textAlign: "start" }}>{biography[key]}</div>
          </div>
        ))}
      </fieldset>
    );
  else return <React.Fragment />;
}
