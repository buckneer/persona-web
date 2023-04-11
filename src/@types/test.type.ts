
export type Test = {
    id?: string,
    allQuestions?: number,
    draft?: boolean,
    name?: string,
    color?: string,
    user?: string
    // questions?: Array<String>,
}

export type Questions = {
    id?: string,
    TestId?: string,
    questions?: Array<String>
}

export type Scale = {
    name: string,
    questions: Array<number>
}

export type Dimension = {
    scales: Array<Scale>
}

export type DimensionDoc = {
    id?: string,
    testId?: string,
    dimensions?: Dimension[]
}

export type Result = {
    name: string,
    desc: string
}

export type ResultDoc = {
    testId: string,
    results: Result[]
}
