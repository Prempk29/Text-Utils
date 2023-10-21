import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function TextForm(props) {
    const Valuechanged = (event) => {
        settext(event.target.value)
    }
    const Clicked = () => {
        console.log(text)
        const newtext=text.toUpperCase()
        settext(newtext)
    }
    const SClicked=()=>
    {
        console.log(text)
        const newtext=text.toLowerCase()
        settext(newtext)
    }
    const Clear =()=>
    {
        settext("")
    }
    const [text, settext] = useState("")
    return (
        <>
            <h1>{props.heading}</h1>
            <div className="container">
                <FloatingLabel controlId="floatingTextarea2">
                    <Form.Control
                        as="textarea"
                        value={text}
                        onChange={Valuechanged}
                        style={{ height: '100px' }}
                    />
                </FloatingLabel>
                <Button variant="primary" className="my-3" onClick={Clicked}>To Capital</Button>{' '}
                <Button variant="primary" className="my-3" onClick={SClicked}>To Small</Button>{' '}
                <Button variant="danger" className="my-3" onClick={Clear}>Clear</Button>{' '}
            </div>
            <div className="container">
                <h1>Text summary</h1>
                <p>{text.split(" ").length} word and {text.length} characters</p>
            </div>
        </>
    )
}


