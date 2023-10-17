import axios from 'axios'
import Coordinates from '../models/Coordinates.ts'
import IGeoCodeResult from '../models/IGeoCodeResult.ts'
import {GeoCodeResultAlternative} from '../models/IGeoCodeResultAlternative.ts'
import {useQuery, UseQueryResult} from '@tanstack/react-query'

const API_KEY = import.meta.env.VITE_BING_API_KEY
const client = axios.create({
    baseURL: 'https://dev.virtualearth.net/REST/v1/Locations',
})

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

const fetchCoordinates = async (query: string): Promise<IGeoCodeResult> => {
    const {data} = await client.get(`${query}`, {
        params: {
            key: API_KEY,
        },
    })
    return data
}

// ENKEL NODIG ALS BING NIET WERKT
const fetchCoordinatesV2 = async (query: string): Promise<GeoCodeResultAlternative> => {
    const {data} = await client.get(
        `https://geocode.maps.co/search`,
        {
            params: {
                q: query,
            },
        },
    )

    return data
}

//endregion


//region API functions

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */
export const useGetCoordinates = (query: string, enabled = true): UseQueryResult<Coordinates, Error> => {
    return useQuery({
       queryKey: ['geocode', query],
       queryFn: async () => getCoordinatesFromResult(await fetchCoordinates(query)),
       // ALTERNATIEVE QUERY FUNCTION VOOR HET GEVAL DAT BING NIET WERKT.
       // queryFn: async () => getCoordinatesFromResultV2(await fetchCoordinatesV2(query)),
       enabled: enabled && query !== '',
       staleTime: Infinity,
       cacheTime: Infinity,
    })
 }

/**
 *
 * @param fetchResult Het antwoord van een succesvolle call voor een geocode request.
 * @return De geografische coördinaten van de eerste match, i.e. de locatie die het meest waarschijnlijk correct is.
 */
const getCoordinatesFromResult = (fetchResult: IGeoCodeResult): Coordinates | undefined => {
    return fetchResult?.resourceSets?.at(0)?.resources?.at(0)?.geocodePoints?.at(0)?.coordinates
}

/**
 * ALTERNATIVE VERSIE MET EEN GRATIS API VOOR HET GEVAL DAT BING NIET WERKT.
 *
 * @param fetchResult Het antwoord van een succesvolle call voor een geocode request.
 * @return De geografische coördinaten van de eerste match, i.e. de locatie die het meest waarschijnlijk correct is.
 */
const getCoordinatesFromResultV2 = (fetchResult: GeoCodeResultAlternative): Coordinates | undefined => {
    return [Number(fetchResult[0].lat), Number(fetchResult[0].lon)]
}
//endregion

