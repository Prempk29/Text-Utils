import React from 'react'
import Form from 'react-bootstrap/Form';

export default function Switch(props) {
  return (
    <>
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label=""
        onClick={props.click}
      />
    </Form>
    </>
  )
}
