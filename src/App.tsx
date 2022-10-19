import React from 'react';
import './App.css';
import Hello from "./Hello";

export default function App() {

    const names = [
        'Anton',
        'Berta',
        'Cäsar',
    ]

    return <>
        {
            names.map(name =>
                <Hello name={name} key={name}></Hello>
            )
        }

    </>
}
