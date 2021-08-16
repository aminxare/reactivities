import React from 'react'

interface Props{
    duck:any;
}

const DuckItem = ({duck}:Props) => {
    return (
        <div>
            <p>{duck.name}</p>
            <button onClick={()=>duck.makeSound(`${duck.name} sound`)}>Make Sound</button>
        </div>
    )
}

export default DuckItem
