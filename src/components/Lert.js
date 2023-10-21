import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export default function Lert(props) {
    const [show, setShow] = useState(false);
    const fun =()=>
    {
        setShow(true)
        setTimeout(()=>
        {
            setShow(false)
        },3000)   
    }
    return (
        <>
            {show && <Alert show={show} variant="danger">
                    <p>i have done the task</p>
            </Alert>}
            <Button onClick={fun}>Show Alert</Button>
        </>
    )
}


