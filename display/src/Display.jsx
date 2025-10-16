import React from "react";
import { useStore } from "zustand";

export default function Display() {
  const count = useStore((state) => state.count);
  return (
    <div>
      <h2>Display Remote</h2>
      <p>Current Count: {count}</p>
    </div>
  );
}
