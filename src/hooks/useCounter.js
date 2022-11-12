import { useState } from "react";

export const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState);

  const hanleAdd = (factor) => {
    setCount(count + factor);
  };

  const handleSubstract = (factor) => {
    setCount(count - factor);
  };

  return {
    count,
    hanleAdd,
    handleSubstract
  }
};
