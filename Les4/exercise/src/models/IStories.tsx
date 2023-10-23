interface IStories {
    id: number
    deleted: boolean
    type : string
    by : string
    time : 'job' | 'story' | 'comment' | 'poll' | 'pollopt'
    dead : boolean
    kids : number[]
    parent : number
    text : string
    url : string
    title : string
    parts : number[]
    descendants : number
    score : number
}

export default IStories