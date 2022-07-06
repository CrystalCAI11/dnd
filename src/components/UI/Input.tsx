import React, { InputHTMLAttributes } from "react"
import styled from "@emotion/styled"

const Input = React.forwardRef<
  HTMLInputElement | null,
  {
    input: InputHTMLAttributes<HTMLInputElement>
    label: string
  }
>(({ input, label }, ref) => {
  return (
    <Container>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
    </Container>
  )
})

export default Input

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  label {
    font-weight: bold;
    margin-right: 1rem;
  }

  input {
    width: 3rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;
  }
`
