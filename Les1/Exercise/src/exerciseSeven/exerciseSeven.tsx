import styled from 'styled-components'
import {ChangeEventHandler, FunctionComponent, useState} from 'react'
import Slider from './Slider'

const BmiLabel = styled.div`
  font-family: Verdana, serif;
  font-size: 20px;
`

const calculateBMI = (hoogteInCm: number, massa: number): number => {
    const hoogteInM = hoogteInCm / 100
    return Math.round(massa / (hoogteInM * hoogteInM))
}

const BMIContainer = styled.div`
  padding: 20px 40px;
  border: #333 2px dotted;
  width: 450px;
  border-radius: 10px;
  text-align: left;
  margin-top: 2em;
`

const ExerciseSeven: FunctionComponent = () => {
    const [hoogte, setHoogte] = useState<number>(180)
    const [massa, setMassa] = useState<number>(74)

    const SliderHandlerHoogte : ChangeEventHandler<HTMLInputElement> = evt => {
      const value = evt.currentTarget.value
      if (value === null) return
      setHoogte(parseInt(value))
    }
    const SliderHandlerMassa : ChangeEventHandler<HTMLInputElement> = evt => {
        const value = evt.currentTarget.value
        if (value === null) return
        setMassa(parseInt(value))
    }
    // const SliderHandler : ChangeEventHandler<HTMLInputElement> = (evt, mass: Boolean) => {
    //     const value = evt.currentTarget.value
    //     if (value === null) return
    //     if (mass) setMassa(parseInt(value))
    //     else setHoogte(parseInt(value))
    // }

    return (
        <>
          <BMIContainer>
            <BmiLabel>Heigth: {hoogte}</BmiLabel>
            <Slider min={145} max={240} value={hoogte} changeHandler={SliderHandlerHoogte} />
            <BmiLabel>Mass: {massa}</BmiLabel>
            <Slider min={50} max={200} value={massa} changeHandler={SliderHandlerMassa} />
            <BmiLabel>BMI: {calculateBMI(hoogte, massa)}</BmiLabel>
          </BMIContainer>
        </>
    )
}

export default ExerciseSeven
