import {FunctionComponent} from 'react'
import {ISubject} from '../models/ISubject.ts'

const Subject: FunctionComponent<ISubject> = ({name, sp, semester}) => {
    return (
        <div className="subject">
            <div className="subtitle">
                <div>{name}</div>
                {sp} studiepunten - semester {semester}
            </div>
            <div className="content">
                <ul>

                </ul>
            </div>
        </div>
    )
}

export default Subject
