import React from "react";

export function Layout(props) {
  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <div style={{ width: 850, padding: 10 }}>
        {props.children}
      </div>
    </div>
  );
}