import {Dimension, Key, LocalData, Personality} from "./types";


export const data : LocalData = {
	questions: [
		'1?',
		'2?',
		'3?',
		'4?',
		'5?',
	],
	personalities: [
		{
			name: "INTP",
			desc: "Loreeeem ipsum"
		},
		{
			name: "INTP",
			desc: "Loreeeem ipsum"
		},
		{
			name: "INTP",
			desc: "Loreeeem ipsum"
		},
		{
			name: "INTP",
			desc: "Loreeeem ipsum"
		},
	],
	keys: [
		{
			scales: [
				{
					name: "E",
					questions: [1,2,3]
				},
				{
					name: "I",
					questions: [1,2,3]
				}
			]
		},
		{
			scales: [
				{
					name: "E",
					questions: [1,2,3]
				},
				{
					name: "I",
					questions: [1,2,3]
				}
			]
		}
	]
}


const getQuestions = () : string[] => {
	return data.questions
}

const getPersonalities = () : Personality[] => {
	return data.personalities
}

const getKeys = () : Dimension[] => {
	return data.keys
}

export {
	getQuestions,
	getPersonalities,
	getKeys
}


