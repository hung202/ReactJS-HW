import React from 'react'
import { useSelector } from 'react-redux'



export default function App() {
    const count = useSelector(state => state.count)
    return (

        <div>
            asdasdasdsd
            {count}
        </div>
    )
}

