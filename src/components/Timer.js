import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function MyStopwatch() {
    const { minutes, seconds } = useContext(AuthContext);

    return (
        <>
            <span>{minutes}</span>:
            <span>{String(seconds).length > 1 ? seconds : "0" + seconds}</span>
        </>
    );
}

export function Timer() {
    return (
        <div className="w-[30px]">
            <MyStopwatch />
        </div>
    );
}
