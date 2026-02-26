import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

export default function App() {
  const exercises = [
    { id: 1, name: "Push-ups", type: "repetition" },
    { id: 2, name: "Sit-ups", type: "repetition" },
    { id: 3, name: "Plank", type: "duration" },
    { id: 4, name: "Jump Rope", type: "duration" },
  ];

  const [selectedExercise, setSelectedExercise] = useState(null);

  // Screen 1: Menu
  if (!selectedExercise) {
    return (
      <div style={{ padding: 24, fontFamily: "Arial" }}>
        <h1>Exercise Tracker</h1>
        <p>Select an exercise:</p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {exercises.map((ex) => (
            <button
              key={ex.id}
              onClick={() => setSelectedExercise(ex)}
              style={{
                padding: "12px 16px",
                borderRadius: 10,
                border: "1px solid #ccc",
                cursor: "pointer",
              }}
            >
              {ex.name} ({ex.type})
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Screen 2: Exercise screen
  return (
    <div style={{ padding: 24, fontFamily: "Arial" }}>
      {selectedExercise.type === "repetition" ? (
        <RepetitionExercise name={selectedExercise.name} />
      ) : (
        <DurationExercise name={selectedExercise.name} />
      )}

      <div style={{ marginTop: 16 }}>
        <button
          onClick={() => setSelectedExercise(null)}
          style={{
            padding: "10px 14px",
            borderRadius: 10,
            border: "1px solid #ccc",
            cursor: "pointer",
          }}
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
}