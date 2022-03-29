import { useState } from "react";

export const useInputChange = (startingValue) => {
  const [input, setInput] = useState(startingValue);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return [input, handleInputChange];
};
