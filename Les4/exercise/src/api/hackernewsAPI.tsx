import axios from 'axios'
import IStories from '../models/IStories'
import { UseQueryResult, useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import SettingsContext from '../context/settingsContext'

const client = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0/',
})

export type HackernewsStoryEndpoints = 'top' | 'ask' | 'show' | 'job'

//@param type: 'top' | 'ask' | 'show' | 'job'
const getItemIds = async (endpoint: HackernewsStoryEndpoints): Promise<number[]> => {
    // https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty
    const { data } = await client.get(`${endpoint}stories.json`)
    return data
}

const getItem = async (id: number): Promise<IStories> => {
    // https://hacker-news.firebaseio.com/v0/item/37978084.json?print=pretty
    const { data } = await client.get(`item/${id}.json`)
    return data
}

export const useGetItemIds = (endpoint: HackernewsStoryEndpoints): UseQueryResult<number[], Error> => { 
    const {refetchInterval} = useContext(SettingsContext)

    return useQuery({
        queryKey: [endpoint],
        queryFn: () => getItemIds(endpoint),
        refetchInterval,
     })
}

export const useGetItem = (id: number): UseQueryResult<IStories, Error> => { 
    const {refetchInterval} = useContext(SettingsContext)

    return useQuery({
        queryKey: ['story', id],
        queryFn: () => getItem(id),
        refetchInterval,
     })
}