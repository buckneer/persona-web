

interface Scale {
	name: string,
	questions: Array<number>
}

interface Dimension {
	scales: Scale[]
}

interface Key {
	dimension: Dimension[]
}


interface Personality {
	name: string,
	desc: JSX.Element
}


interface LocalData {
	questions: Array<string>,
	personalities: Array<Personality>,
	keys: Array<Dimension>
}

interface PersonalityType {
	name: string,
	personalities: Array<PersonalityItem>,
	background: string,
	textColor: string,
}

interface PersonalityItem {

	title: string,
	type: string
	desc: string,
	illustration: string,
	link: string
}

export type {
	Key,
	Scale,
	Personality,
	Dimension,
	LocalData,
	PersonalityType,
	PersonalityItem
}
