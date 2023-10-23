import axios from 'axios'
import IStories from '../models/IStories'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import SettingsContext from '../context/settingsContext'

const client = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
})

type HackernewsStoryEndpoints = 'top' | 'ask' | 'show' | 'job'

//@param type: 'top' | 'ask' | 'show' | 'job'
export const getItemIds = async (endpoint: HackernewsStoryEndpoints): Promise<number[]> => {
    // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
    const { data } = await client.get(`${endpoint}stories.json?print=pretty`)
    return data
}

const getItem = async (id: number): Promise<IStories> => {
    // https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty
    const { data } = await client.get(`item/${id}.json?print=pretty`)
    return data
}

export const useGetItemIds = (endpoint: HackernewsStoryEndpoints, enabled = true): UseQueryResult<number[], Error> => { 
    const {refetchInterval} = useContext(SettingsContext)

    return useQuery({
        queryKey: [endpoint],
        queryFn: async () => await getItemIds(endpoint),
        refetchInterval: refetchInterval,
        enabled: enabled,
        staleTime: Infinity,
        cacheTime: Infinity,
     })
}

export const useGetItem = (id: number, enabled = true): UseQueryResult<IStories, Error> => { 
    const {refetchInterval} = useContext(SettingsContext)

    return useQuery({
        queryKey: ['story', id],
        queryFn: async () => await getItem(id),
        refetchInterval: refetchInterval,
        enabled: enabled,
        staleTime: Infinity,
        cacheTime: Infinity,
     })
}