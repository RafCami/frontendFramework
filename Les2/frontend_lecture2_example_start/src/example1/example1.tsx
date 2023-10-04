import styled from 'styled-components'
import {FunctionComponent, useState, ChangeEventHandler} from 'react'

const FormContainer = styled.div`
  background: #2B2B2B;
  border-radius: 10px;
  font-family: Oblique, Verdana, serif, sans-serif;
  color: #F2F2F2;
  padding: 1em;
  margin: 1em 0;
`

const Example1: FunctionComponent = () => {
    const [text, setText] = useState<string>('Initiële waarde')
    const [counter, setCounter] = useState<number>(0)

    const changeEventHandler: ChangeEventHandler<HTMLInputElement> = (evnt) => {
        setText(evnt.currentTarget.value)
        setCounter(oldCount => oldCount + 0.5)
        setCounter(oldCount => oldCount + 0.5)
    }

    return (
        <FormContainer>
            <p>Tekst aanpassen is heel eenvoudig!</p>
            <p>De huidige waarde is nu: {text}</p>
            <p>In onderstaand input veld kan je deze waarde aanpassen:</p>
            <p>De formulierwaarde is {counter} keer gewijzigd!</p>
            <div>
                <input type="text" value={text} onChange={changeEventHandler}/>
            </div>
        </FormContainer>
    )
}

export default Example1
