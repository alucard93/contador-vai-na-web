import { useState } from 'react'
import {
  ContainerStyleButtons,
  ContainerStyleCounter,
  StyleButton,
} from './styles'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => {
      if (prevCount >= 0 && prevCount < 10) {
        return prevCount + 1
      }
      return prevCount
    })
  }

  const decrement = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        return prevCount - 1
      }
      return prevCount
    })
  }
  

  return (
    <>
      <ContainerStyleCounter>
        <ContainerStyleButtons>
          <StyleButton onClick={increment}>+</StyleButton>
          <h1 className="title-number">{count}</h1>
          <StyleButton onClick={decrement}>-</StyleButton>
        </ContainerStyleButtons>
      </ContainerStyleCounter>
    </>
  )
}

export default Counter
