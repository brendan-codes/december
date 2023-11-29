import React from 'react';
import { useState } from 'react';

const FunctionalComponent = ({value}) => {
    let [count, setCount] = useState(0);

    return (
        <>
            <p>Hello world!</p>
            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>
            {value}
        </>
    )
}

export default FunctionalComponent;