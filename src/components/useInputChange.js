import { useState } from "react";

export const useInputChange = (startingValue) => {
  const [input, setInput] = useState(startingValue);

  const handleInputChange = (e) => {
    // I am aware of the if statements being a codesmell. But I don't have a better solution yet
    if (e.currentTarget.name == "resetButton") {

      // empties the the form
      setInput({});
      return [input, handleInputChange];
    }

    if (e.currentTarget.name !== "resetButton") {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
      return [input, handleInputChange];
    }
  };

  return [input, handleInputChange];
};
