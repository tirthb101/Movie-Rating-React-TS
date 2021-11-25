import React, { useState} from "react";

const Rate = ({CallBack}) => {
    const [value , setvalue] = useState('5');
    return (
        <>
            <input type="range" min="1" max="10" value={value} onChange={event => setvalue(event.currentTarget.value)} /> {value}
            <p><button onClick={() => CallBack(value)}>Rate</button></p>
        </>
)};

export default Rate;
