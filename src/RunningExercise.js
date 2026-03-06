import React, { useState } from "react";

function RunningExercise() {
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);

    const addSecond = () => {
        setTime(time + 1);
    };

    const recordLap = () => {
        setLaps([...laps, time]);
    };

    return (
        <div>
            <h2>Running Exercise</h2>
            <p>Elapsed Time: {time} seconds</p>

            <button onClick={addSecond}>Run +1 sec</button>
            <button onClick={recordLap}>Record Lap</button>

            <h3>Laps</h3>
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>Lap {index + 1}: {lap} seconds</li>
                ))}
            </ul>
        </div>
    );
}

export default RunningExercise;