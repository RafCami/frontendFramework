import thomasMore from './thomasMoreData.json'
import studyAreas from './studyAreas.json'
import campuses from './campuses.json'

/**
 * Retrieve a list of all the study areas available at Thomas More Kempen. A study array has the following format:
 * {
 *     name: string,        // The name of the study area
 *     id: string           // The id of the study area
 * }
 *
 * @return {{name: string, id: string}[]} An array of study areas.
 */
export const getAllStudyAreas = () => {
    return studyAreas.map(x => ({...x}))
}

/**
 * Retrieve a list of all the campuses in use by Thomas More Kempen. A campuses has the following format:
 * {
 *     name: string,        // The location of the campuses
 *     id: string           // The id of the campuses
 * }
 *
 * @return {{name: string, id: string}[]} An array of campuses..
 */
export const getAllCampuses = () => {
    return campuses.map(c => ({...c}))
}

/**
 * Retrieve a list of all the programs that match the given filters.
 *
 * @param campus {undefined | string | ''} The id of the campuses at which the programs must be taught. When the
 * parameter is an empty string or undefined, all campuses are returned.
 * @param day {undefined | boolean | ''} Whether the programs must be available in the evening or in the day. When the
 * parameter is undefined or an empty string, both evening and day programs are returned.
 * @param studyArea {undefined | string | ''} The id of the study area in which the user is interested. When the
 * parameter is an empty string, all study areas are returned.
 */
export const getAllMatchingPrograms = (campus, day, studyArea) => {
    return thomasMore.filter(p => programMatchesFilter(p, campus, day, studyArea))
}


const programMatchesFilter = (program, campusId, day, studyAreaId) => {
    if (campusId && program.campus.id !== campusId) return false
    if (day !== undefined && day !== '' && program.day !== day) return false
    if (studyAreaId && program.area.id !== studyAreaId) return false
    return true
}




