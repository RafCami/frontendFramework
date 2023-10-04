import styled from 'styled-components'
import {FunctionComponent} from 'react'

const FormContainer = styled.div`
  background: #2B2B2B;
  border-radius: 10px;
  font-family: Oblique, Verdana, serif, sans-serif;
  color: #F2F2F2;
  padding: 1em;
  margin: 1em 0;
`

const Example1: FunctionComponent = () => {

    return (
        <FormContainer>
            <p>Tekst aanpassen is heel eenvoudig!</p>
            <p>De huidige waarde is nu:</p>
            <p>In onderstaand input veld kan je deze waarde aanpassen:</p>
            <p>De formulierwaarde is keer gewijzigd!</p>
            <div>
                <input type="text"/>
            </div>
        </FormContainer>
    )
}

export default Example1
