import React, { useState } from "react";

export default function RepetitionExercise({ name }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{name}</h2>

            <div style={{ fontSize: 40, margin: "16px 0" }}>{count}</div>

            <div style={{ display: "flex", gap: 12 }}>
                <button
                    onClick={() => setCount((prev) => prev + 1)}
                    style={{ padding: "12px 16px", borderRadius: 10, cursor: "pointer" }}
                >
                    +1 Rep
                </button>

                <button
                    onClick={() => setCount(0)}
                    style={{ padding: "12px 16px", borderRadius: 10, cursor: "pointer" }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}