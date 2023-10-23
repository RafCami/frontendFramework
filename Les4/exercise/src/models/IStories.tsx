interface IStories {
    id: number
    deleted?: boolean
    type : 'job' | 'story' | 'comment' | 'poll' | 'pollopt'
    by? : string
    time? : number
    dead? : boolean
    kids? : number[]
    parent? : number
    text? : string
    url? : string
    title? : string
    parts? : number[]
    descendants? : number
    score? : number
}

export default IStories