import {FunctionComponent} from 'react'

interface LabelProps {
    score: number
}

const Label: FunctionComponent<LabelProps> = ({score}) => {
    let result = ''
    switch (true) {
        case score < 0.1:
            result = 'Disaster'
            break
        case score <= 0.3:
            result = 'Insufficient'
            break
        case score <= 0.5:
            result = 'Sufficient'
            break
        case score <= 0.6:
            result = 'Average'
            break
        case score <= 0.8:
            result = 'Good'
            break
        case score <= 0.9:
            result = 'Very good'
            break
        case score > 0.9:
            result = 'Excellent'
            break
    }

    return (
        <>
        {result}
        </>
    )
}
// Kleiner dan 0.1 ➝ Disaster
// Tot en met 0.3 ➝ Insufficient
// Tot en met 0.5 ➝ Sufficient
// Tot en met 0.6 ➝ Average
// Tot en met 0.8 ➝ Good
// Tot en met 0.9 ➝ Very good
// Hoger dan 0.9 ➝ Excellent
export default Label