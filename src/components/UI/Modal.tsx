import { Fragment, MouseEventHandler, ReactNode } from "react"
import ReactDOM from "react-dom"
import styled from "@emotion/styled"

import { keyframes } from "@emotion/react"

const Modal: React.FC<{
  children: ReactNode
  onClose: MouseEventHandler<HTMLDivElement>
}> = ({ children, onClose }) => {
  const portalElement = document.getElementById("modal")!

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <Container>
          <Content>{children}</Content>
        </Container>,
        portalElement
      )}
    </Fragment>
  )
}

export default Modal

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`

const slideDown = keyframes`  from {
  opacity: 0;
  transform: translateY(-3rem);
}
to {
  opacity: 1;
  transform: translateY(0);
}`

const Container = styled.div`
  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }

  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${slideDown} 300ms ease-out forwards;
`

const Content = styled.div``
