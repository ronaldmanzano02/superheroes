import React from "react";
import { useForm } from "react-hook-form";

function InputContainer({ label, children }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-between", padding: 10 }}
    >
      {label}
      {children}
    </div>
  );
}

export function PowerStatForm({ id, name, powerstats, imageUrl }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: id,
      name: name,
      imageUrl: imageUrl,
      ...powerstats,
    },
  });
  const onSubmit = (data) => {
    fetch("/api/powerstats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(data),
    }).then(function (response) {
      alert("Powerstats has been successfuly saved.");
      return response.json();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Powerstats</legend>
        <InputContainer label="Intelligence">
          <input
            required
            type="number"
            min="0"
            {...register((name = "intelligence"))}
            placeholder="Intelligence"
          />
        </InputContainer>
        <InputContainer label="Strength">
          <input
            required
            type="number"
            min="0"
            {...register("strength")}
            placeholder="Strength"
          />
        </InputContainer>
        <InputContainer label="Speed">
          <input
            required
            type="number"
            min="0"
            {...register("speed")}
            placeholder="Speed"
          />
        </InputContainer>
        <InputContainer label="Durability">
          <input
            required
            type="number"
            min="0"
            {...register("durability")}
            placeholder="Durability"
          />
        </InputContainer>
        <InputContainer label="Power">
          <input
            required
            type="number"
            min="0"
            {...register("power")}
            placeholder="Power"
          />
        </InputContainer>
        <InputContainer label="Combat">
          <input
            required
            type="number"
            min="0"
            {...register("combat")}
            placeholder="Combat"
          />
        </InputContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 10,
          }}
        >
          <input type="submit" value="Update" />
        </div>
      </fieldset>
    </form>
  );
}
