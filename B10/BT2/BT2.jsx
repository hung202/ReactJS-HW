import React, { useState } from "react";

export default function BT2() {
    const [time, setTime] = useState('day');

    const handleClickNight = () => {
        setTime('night');
    };

    const handleClickDay = () => {
        setTime('day');
    };

    return (
        <div>
            <button onClick={handleClickNight}>Night</button>
            <button onClick={handleClickDay}>Day</button>
            <div style={{ width: '200px', height: '80px', backgroundColor: time === 'day' ? 'blue' : 'red' }}></div>
        </div>
    );
}