import React, { useEffect, useRef, useState } from "react";

function pad2(n) {
    return String(n).padStart(2, "0");
}

export default function DurationExercise({ name }) {
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSecondsElapsed((prev) => prev + 1);
            }, 1000);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = null;
        };
    }, [isRunning]);

    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    const display = `${pad2(minutes)}:${pad2(seconds)}`;

    return (
        <div>
            <h2>{name}</h2>

            <div style={{ fontSize: 40, margin: "16px 0" }}>{display}</div>

            <div style={{ display: "flex", gap: 12 }}>
                {!isRunning ? (
                    <button
                        onClick={() => setIsRunning(true)}
                        style={{ padding: "12px 16px", borderRadius: 10, cursor: "pointer" }}
                    >
                        Start
                    </button>
                ) : (
                    <button
                        onClick={() => setIsRunning(false)}
                        style={{ padding: "12px 16px", borderRadius: 10, cursor: "pointer" }}
                    >
                        Stop
                    </button>
                )}

                <button
                    onClick={() => {
                        setIsRunning(false);
                        setSecondsElapsed(0);
                    }}
                    style={{ padding: "12px 16px", borderRadius: 10, cursor: "pointer" }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}