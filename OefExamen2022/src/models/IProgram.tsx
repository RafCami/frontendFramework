import ICampus from './ICampus'

interface IProgram {
    name: string
    day: boolean
    campus: ICampus
    english: boolean
    area?: ICampus
}

export default IProgram