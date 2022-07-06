import { Fragment, useEffect, useState } from "react"
import styled from "@emotion/styled"

import mealsImage from "../../assets/meals.jpg"
import cartIcon from "../../assets/cartIcon.svg"
import { useAppDispatch, useAppSelector } from "../../hooks/use-app"
import { showHideCart } from "../../stores/slices/cart-slice"
import { css, keyframes } from "@emotion/react"

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const totalAmount = useAppSelector((state) => state.cart.cart.totalAmount)
  const [isbump, setisBump] = useState<boolean>(false)

  useEffect(() => {
    if (totalAmount === 0) {
      return
    }
    setisBump(true)
    const timer = setTimeout(() => {
      setisBump(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [totalAmount])

  return (
    <Fragment>
      <Container justify="space-between" animation={isbump}>
        <h1>Meals</h1>
        <button onClick={() => dispatch(showHideCart())}>
          <img src={cartIcon} alt="cartIcon" />
          <span>Your Cart</span>
          <Number>{totalAmount}</Number>
        </button>
      </Container>
      <Image />
    </Fragment>
  )
}

export default Header

const FlexContainer = styled.header<{ justify?: string }>`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: center;
`

const bump = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`

const Container = styled(FlexContainer)<{ animation?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 80%;
  height: 5rem;
  background-color: #8a2b06;
  color: white;
  padding: 0 10%;
  z-index: 10;

  button {
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: #4d1601;
    color: white;
    padding: 0.75rem 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
    font-weight: bold;
    animation: ${(props) =>
      props.animation
        ? css`
            ${bump} 300ms ease-out
          `
        : null};
    &:active,
    &:hover {
      background-color: #2c0d00;
    }
  }

  img {
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
  }
`

const Image = styled.div`
  width: 110%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
  background: url(${mealsImage}) no-repeat center;
  background-size: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`

const Number = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`
