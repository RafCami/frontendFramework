import Coordinates from '../models/Coordinates.ts'
import axios from 'axios'
import IOneCallApiResponse, { DailyForecast } from '../models/IOneCallApiResponse.ts'
import {useQuery, UseQueryResult} from '@tanstack/react-query'

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY

//region Mutations & queries

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          MUTATIONS & QUERIES
 * ---------------------------------------------------------------------------------------------------------------------
 */

//endregion


//region API functions

/**
 * ---------------------------------------------------------------------------------------------------------------------
 *                                          API functions
 * ---------------------------------------------------------------------------------------------------------------------
 */

const client = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    // api.openweathermap.org/data/2.5/weather
})

const getWeather = async (coordinates: Coordinates): Promise<IOneCallApiResponse> => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 500))
    const [latitude, longitude] = coordinates
    const {data} =  await client.get<IOneCallApiResponse>('/onecall', {
        params: {
            lat: latitude,
            lon: longitude,
            units: 'metric',
            lang: 'nl-be',
            appid: import.meta.env.VITE_OPEN_WEATHER_API_KEY,
        },
    })
    return data
}


export const useGetWeather = (coordinates: Coordinates | undefined): UseQueryResult<DailyForecast, Error> => {
   return useQuery({
      queryKey: ['weather', coordinates],
      queryFn: async () => (await getWeather(coordinates as Coordinates)).daily,
      enabled: !!coordinates,
      refetchInterval: 5 * 60 * 1000,
   })
}
//endregion



