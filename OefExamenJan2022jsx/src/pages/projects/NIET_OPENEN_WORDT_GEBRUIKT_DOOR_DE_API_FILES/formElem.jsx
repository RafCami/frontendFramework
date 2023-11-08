import styled from 'styled-components'

const FormElem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  > input[type=text], textarea {
    flex-grow: 1;
    width: 99%;
  }
  label {
    display: block;
    margin: 0 .4em .4em 0;
  }
  margin: 0 .4em;
`

export default FormElem
