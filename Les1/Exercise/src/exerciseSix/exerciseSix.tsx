import styled from 'styled-components'
import {FunctionComponent} from 'react'
import { useState } from 'react'
import {MouseEventHandler} from 'react'

const Calculator = styled.div`
  padding: 1.5em 2em;
  background-color: #00ace6;
  max-width: 21em;
  border-radius: 10px;
  text-align: left;
  margin-top: 2em;
`

const CalculatorButton = styled.button`
  font-family: Verdana, serif;
  font-size: 2rem;
  margin: .25em;
  font-weight: bold;
  background-color: #CCCCCC;
  color: white;
  border-radius: 5px;
  width: 3em;
  height: 2em;
  display: inline-block;
  text-align: center;
  line-height: 2em;
`

const CalculatorScreen = styled.div`
  font-family: Verdana, serif;
  color: white;
  font-size : 2em;
  min-height: 2em;
`

const buttons = ['7', '8', '9', '4', '5', '6', '1', '2', '3', 'C', '0', 'Del']

const ExerciseSix: FunctionComponent = () => {
  const [label, setLabel] = useState<number>(0)

  const handleMouseEvent: MouseEventHandler<HTMLElement> = evt => {
    const button = evt.currentTarget.textContent
    if (button === null) return
    if (button === 'C') {
      setLabel(0)
    } else if (button === 'Del') {
      setLabel(label => Math.floor((label / 10)))
    } else {
      setLabel(label => label * 10 + parseInt(button))
    }
  }
  
    return (
        <>
            <Calculator>
                <CalculatorScreen>{label}</CalculatorScreen>
                {buttons.map((button) => (
                    <CalculatorButton key={button} onClick={handleMouseEvent}>{button}</CalculatorButton>
                ))}
            </Calculator>
        </>
    )
}

export default ExerciseSix
