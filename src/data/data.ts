import {	
		ESFJDesc, ESFPDesc, ESTJDesc, ESTPDesc, ENFJDesc, ENFPDesc, ENTJDesc, ENTPDesc, 
		ISFJDesc, ISFPDesc, ISTJDesc, ISTPDesc, INFJDesc, INFPDesc, INTJDesc, INTPDesc
} from "./templates";

import {Dimension, Key, LocalData, Personality} from "./types";


export const data : LocalData = {
	questions: [
		'Za mene se ne bi moglo reći da sam rezervisan i distanciran u komunikaciji sa drugima?',
		'Lako reagujem na tuđa osećanja?',
		'Volim da najpre završim jedan, već započeti, pre nego što počnem da radim novi posao?',
		'Između dobre prakse i zanimljive mašte ja radije biram dobru praksu?',
		'Uživam u usamljeničkim šetnjama?',
		'Brzo reagujem na verbalno izražena tuđa razmišljanja?',
		'Brzo i lako se prilagođavam svim okolnostima koje me snađu u životu?',
		'Više sam sklon razmišljanju o velikim idejama, nego o njihovoj realizaciji?',
		'Kada se nalazim u društvu ja uglavnom pričam, a manje slušam druge?',
		'Kao osoba ja sam sklon/a da neki događaj najpre osećajno doživim da bi ga razumeo/la?',
		'Volim da planiram i da se organizujem pre nego što bilo šta počnem da radim?',
		'Skoro sve poslove počinjem da radim od početka i korak po korak?',
		'Kada se nalazim u društvu ja obično više slušam druge a manje pričam?',
		'Veoma lako i uspeno kontrolišem svoje emocije?',
		'Volim da se prilagođavam dok radim bilo koji posao?',
		'Najveći deo poslova započinjem da radim bilo gde pa se uklapam u hodu?',
		'Svoje slobodno vreme provodim u većim grupama ljudi, a retko usamljenički?',
		'Tačnije procenjujem šta neka osoba oseća u datom trenutnku, nego šta ona misli?',
		'Kod sebe, a i kod drugih od svih osobina ličnosti najviše cenim odlučnost?',
		'Najbolje rezultate postižem kada se oslanjam na sopstveno iskustvo?',
		'Slobodno vreme najčešće provodim sa malobrojnim prijateljima i/ili čak usamljenički?',
		'Tačnije procenjujem šta neka osoba misli nego šta oseća?',
		'Uspevam u radu zato što se brzo i dobro snalazim?',
		'Najbolje rezultetate postižem kada se oslanjam na svoju maštu?',
		'Većina osoba me opisuje kao energičnu i pričljivu osobu?',
		'U poređenju sa većinom ljudi koje poznajem ja sam više osećajna nego kritična osoba?',
		'U poslu više volim radnu disciplinu nego bilo kakve improvizacije?',
		'U skoro svakom poslu najvažnija mi je praksa i veština?',
		'Mene većina ljudi opisuje kao smirenu osobu koja ume da sluša druge?',
		'Uvek se čvrsto držim vlastitih principa, pa makar to povređivalo osećanja drugih?',
		'U poslu radije prihvatam korisno prilagođavanje nego kruta pravila?',
		'Volim da tragam za novim rešenjima u svakom problemu?',
		'Petkom uveče, posle naporne nedelje, obično izađem u provod?',
		'Ja češće i više osećam nego što razmišljam?',
		'Više me insteresuje ono što se stvarno desilo, a manje ono što je moglo da se dogodi?',
		'Poštujem sve zadate vremenske rokove?',
		'Petkom uveče, posle naporne deljenje, obično ostajem u kući da se odmaram?',
		'Na moje postupke često utiču emocije?',
		'Uvek tragam za različitim mogućnostima?',
		'Ne držim se tako kruto dogovorenih vremenski rokova?',
		'Kada sam u bedaku više volim da budem u društvu drugih?',
		'Kada se nađem u nejasnoj situaciji ja najviše verujem svojim osećanjima?',
		'Svoj život živim tada da što više naučim?',
		'Drugi ljudi za mene kažu da sam veoma praktikcna osoba?',
		'Kada sam u bedaku više volim da budem sam/a?',
		'Više verujem svom razumu nego osećanjima?',
		'Svoj život živim tako da se što više zezam i uživam u životu?',
		'Drugi ljudi za mene kažu da sam veoma maštovita osoba?',
		'Radije bih da ja naređujem drugima, nego da izvsavam tuđe naredbe?',
		'Najviše cemin nadređene (roditelje, stariji, nastavnici, šefovi...) koji me brižno podržavaju?',
		'Ako na temu nesrećne ljubavi ima dobar film i dobra kniga, radije ću da pročitam knjigu?',
		'Sve poslove i zadatke obavljam po unapred utvrđenim pravilima?',
		'Volim da se izolujem od spoljašnje buke?',
		'Uvek pokušavam da budem nepristrasan pa čak iako to ugrožava moje odnose sa drugima?',
		'Ako na temu nesrećne ljubavi, ima dobar film i dobra knjiga, radije ću odgledati dobar film?',
		'Volim da poslove radim na svoj način, nezavisno od pravila?',
		'Kada sam u brigama ja ih najčešće podelim sa drugima?',
		'Drugi lako prepoznaju moja trenutna osećanja?',
		'Kada izvršavam svakodnevne zadatke koristim iste načine nezavnisno od situacije?',
		'Volim istrajan, rutinski rad?',
		'Kada sam u brigama ja ih najčešće zadržim za sebe?',
		'Drugi teško prepoznaju moja trenutna osećanja?',
		'Kada izvršavam svakodnevne zadatke koristim razne načine zavisno od situacije?',
		'Najviše mi prija rad u naletima, sa puno obrta?',
		'Slobodno vreme, najradije provodim u društvu meni dragih osoba?',
		'U knjigama i filmovima najviše obraćam pažnju na osećanja glavnih junaka?',
		'Volim kad su stvari dobro isplanirane i strukturisane?',
		'U svemu što radim oslanjam se na svoje iskustvo?',
		'Slobodno vreme, najradije bih da provedem sam/a, pred tv-om ili za računarom?',
		'U knjigama i filmovima meni su najvažniji tok i radnja priče?',
		'Volim da se sve dešava spontano i neplanirano?',
		'Najviše verujem sopstvenoj  intuiciji?',
		'Nakon dana provedenog među ljudima osećam se energično i stimulisano?',
		'Kada doživim neuspeh najviše mi pomogne ako me neko ohrabri?',
		'U svakom problemu uvek tražim jedno, ali tačno rešenje?',
		'Za uspeh u nekom poslu najvažnije je iskustvo?',
		'Nakon dana provedenog sa ljudima osećam se iscrpljeno i želim samoću?',
		'Kada doživim neuspeh najviše mi znači kada mi neko ukaže na razloge mog neuspeha?',
		'Mislim da za svaki problem postoji više dobrih rešenja?',
		'Za uspeh u nekom poslu najvažnija je spremnost za promene?',
		'Lako mi je da razgovaram prvi put sa, dotada, nepoznatom osobom?',
		'Drugari za mene kažu da sam vrlo osećajna osoba?',
		'Moj što, radni prostor itd. su uglavnom čisti i uredni pod konac?',
		'Osećam se bolje ukoliko se pridržavam uobičajenih navika?',
		'Imam problema da razgovaram prvi put sa, dotada, nepoznatom osobom?',
		'Drugi ne smatraju više razboritom, nego osećajnom osobom?',
		'Volim da improvizujem i da se snalazim u novim situacijama?',
		'Često rizikujem, jer ko reskira taj više dobija?',
		'Veoma lako uspostavljam komunikaciju u društvenim situacijama?',
		'U odnosu sa svojim drugarima važnije mi je šta oni osećaju nego šta misle?',
		'Volim da radim poslove po redosledu kako su i naišli?',
		'Verujem isključivo svom iskustvu i rutini?',
		'Na žurkama i društvenim okupljanjima drugi ljudi meni prvi prilaze radi upoznavanja?',
		'U odnosu sa mojim drugarima važnije mi je šta oni misle nego šta osećaju?',
		'Sebe vidim pre kao umetnika nego kao naučnika?',
		'Najviše verujem svom instinktu?',
		'Ja sam više društvena nego povučena osoba?',
		'Kada vidim nekoga u nevolji pružim mu podršku i utehu?',
		'Najbolje se snalazim u poslovima koji su dobro isplanirani?',
		'Prilično lako rešavam zadatke koje zahtevaju prezicnost i koncentraciju?',
		'Telefonom najčešće razgovaram kada me drugi zovu?',
		'Pričicu nekome u nevolju da saznam razloge i povode?',
		'Ne smeta mi ako moram da radim bez predhodnog planiranja?',
		'Gubim interesovanje kada obavljam zadatke koje zahtevaju preciznost i koncentraciju?',
		'Mislim da sam kao osoba više otvorena i komunikativna?',
		'U odnosu sa prijateljima, najvažnije mi je šta oni osećaju prema meni?',
		'Najviše cenim rešenja problema koja su konačna i efikasna?',
		'Stvari treba prihvatiti onakve kakve jesu?',
		'Mislim da sam kao osoba više zatvorena i stidljiva?',
		'U odnosu sa prijateljima najvažnije mi je šta oni misle o meni?',
		'Radije bih da pokrenem novu inicijativu, nego da završim već započeto?',
		'Ne treba se miriti sa stanjem stvari već ih treba menjati?',
		'Nove vesti ja obično saznam među prvima?',
		'Drugi me doživljavaju kao srdačnu osobu?',
		'Kada od delova sklapim neki uređaj zahtevam šemu/crtež po kojoj ću to raditi?',
		'Bolje je imaju jedno efikasno rešenje, nego hiljadu posticajnih planova?',
		'Nove vesti ja obično saznam među poslednjima?',
		'Kod ljudi sa kojima radim važniji mi je njihov razum nego osećanja?',
		'Najviše mi odgovara fleksibilno radno vreme?',
		'Rešenja najvećeg problema slucano mi padnu na pamet?',
	],
	personalities: [
		{
			name: "ESFJ",
			desc: ESFJDesc()
		},
		{ 
			name: "ESFP",
			desc: ESFPDesc()
		},
		{
			name: "ESTJ",
			desc: ESTJDesc()
		},
		{
			name: "ESTP",
			desc: ESTPDesc()
		},
		{
			name: "ENFJ",
			desc: ENFJDesc()
		},
		{
			name: "ENFP",
			desc: ENFPDesc()
		},
		{
			name: "ENTJ",
			desc: ENTJDesc()
		},
		{
			name: "ENTP",
			desc: ENTPDesc()
		},
		{
			name: "ISFJ",
			desc: ISFJDesc()
		},
		{
			name: "ISFP",
			desc: ISFPDesc()
		},
		{
			name: "ISTJ",
			desc: ISTJDesc()
		},
		{
			name: "ISTP",
			desc: ISTPDesc()
		},
		{
			name: "INFJ",
			desc: INFJDesc()
		},
		{
			name: "INFP",
			desc: INFPDesc()
		},
		{
			name: "INTJ",
			desc: INTJDesc()
		},
		{
			name: "INTP",
			desc: INTPDesc()
		},
	],
	keys: [
		{
			scales: [
				{
					name: "E",
					questions: [1,9,17,25,33,41,49,57,65,73,81,89,97,105,113]
				},
				{
					name: "I",
					questions: [5,13,21,29,37,45,53,61,69,77,85,93,101,109,117]
				}
			]
		},
		{
			scales: [
				{
					name: "S",
					questions: [4,12,20,28,36,44,52,60,68,76,84,92,100,108,116]
				},
				{
					name: "N",
					questions: [8,16,24,32,40,48,56,64,72,80,88,96,104,112,120]
				}
			]
		},
		{
			scales: [
				{
					name: "F",
					questions: [2,10,18,26,34,42,50,58,66,74,82,90,98,106,114]
				},
				{
					name: "T",
					questions: [6,14,22,30,38,46,54,62,70,78,86,94,102,110,118]
				}
			]
		},
		{
			scales: [
				{
					name: "J",
					questions: [3,11,19,27,35,43,51,59,67,75,83,91,99,107,115]
				},
				{
					name: "P",
					questions: [7,15,23,31,39,47,55,63,71,79,87,95,103,111,119]
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

const getPersonality = (name: string) : Personality => {
	return data.personalities.filter(item => {
		return item.name === name
	})[0]
}

export {
	getQuestions,
	getPersonalities,
	getKeys
}


