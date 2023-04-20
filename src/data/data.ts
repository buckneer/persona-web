import {Dimension, Key, LocalData, Personality} from "./types";


export const data : LocalData = {
	questions: [
		'Za mene se ne bi moglo reci da sam rezervisan i distanciran u komunikaciji sa drugima?',
		'Lako reagujem na tudja osecanja?',
		'Volim da najpre zavrsim jedan, vec zapoceti, pre nego sto pocnem da radim novi posao?',
		'Izmedju dobre prakse i zanimljive maste ja radije biram dobru praksu?',
		'Uzivam u usamljenickim setnjama?',
		'Brzo reagujem na verbalno izrazena tudja razmisljanja?',
		'Brzo i lako se prilagodjavam svim okolnostima koje me snadju u zivotu?',
		'Vise sam sklon razmisljanju o velikim idejama, nego o njihovoj realizaciji?',
		'Kada se nalazim u drustvu ja uglavnom pricam, a manje slusam druge?',
		'Kao osoba ja sam sklon/a da neki dogadjaj najpre osecajno dozivim da bi ga razumeo/la?',
		'Volim da planiram i da se organizujem pre nego sto bilo sta pocnem da radim?',
		'Skoro sve poslove pocinjem da radim od pocetka i korak po korak?',
		'Kada se nalazim u drustvu ja obicno vise slusam druge a manje pricam?',
		'Veoma lako i uspeno kontrolisem svoje emocije?',
		'Volim da se prilagodjavam dok radim bilo koji posao?',
		'Najveci deo poslova zapocinjem da radim bilo gde pa se uklapam u hodu?',
		'Svoje slobodno vreme provodim u vecim grupama ljudi, a retko usamljenicki?',
		'Tacnije procenjujem sta neka osoba oseca u datom trenutnku, nego sta ona misli?',
		'Kod sebe, a i kod drugih od svih osobina licnosti najvise cenim odlucnost?',
		'Najbolje rezultate postizem kada se oslanjam na sopstveno iskustvo?',
		'Slobodno vreme najcesce provodim sa malobrojnim prijateljima i/ili cak usamljenicki?',
		'Tacnije procenjujem sta neka osoba misli nego sta oseca?',
		'Uspevam u radu zato sto se brzo i dobro snalazim?',
		'Najbolje rezultetate postizem kada se oslanjam na svoju mastu?',
		'Vecina osoba me opisuje kao energicnu i pricljivu osobu?',
		'U poredjenju sa vecinom ljudi koje poznajem ja sam vise osecajna nego kriticna osoba?',
		'U poslu vise volim radnu disciplinu nego bilo kakve improvizacije?',
		'U skoro svakom poslu najvaznija mi je praksa i vestina?',
		'Mene vecina ljudi opisuje kao smirenu osobu koja ume da slusa druge?',
		'Uvek se cvrsto drzim vlastitih principa, pa makar to povredjivalo osecanja drugih?',
		'U poslu radije prihvatam korisno prilagodjavanje nego kruta pravila?',
		'Volim da tragam za novim resenjima u svakom problemu?',
		'Petkom uvece, posle naporne nedelje, obicno izadjem u provod?',
		'Ja cesce i vise osecam nego sto razmisljam?',
		'Vise me insteresuje ono sto se stvarno desilo, a manje ono sto je moglo da se dogodi?',
		'Postujem sve zadate vremenske rokove?',
		'Petkom uvece, posle naporne deljenje, obicno ostajem u kuci da se odmaram?',
		'Na moje postupke cesto uticu emocije?',
		'Uvek tragam za razlicitim mogucnostima?',
		'Ne drzim se tako kruto dogovorenih vremenski rokova?',
		'Kada sam u bedaku vise volim da budem u drustvu drugih?',
		'Kada se nadjem u nejasnoj situaciji ja najvise verujem svojim osecanjima?',
		'Svoj zivot zivim tada da sto vise naucim?',
		'Drugi ljudi za mene kazu da sam veoma praktikcna osoba?',
		'Kada sam u bedaku vise volim da budem sam/a?',
		'Vise verujem svom razumu nego osecanjima?',
		'Svoj zivot zivim tako da se sto vise zezam i uzivam u zivotu?',
		'Drugi ljudi za mene kazu da sam veoma mastovita osoba?',
		'Radije bih da ja naredjujem drugima, nego da izvsavam tudje naredbe?',
		'Najvise cemin nadredjene (roditelje, stariji, nastavnici, sefovi...) koji me brizno podrzavaju?',
		'Ako na temu nesrecne ljubavi ima dobar film i dobra kniga, radije cu da procitam knjigu?',
		'Sve poslove i zadatke obavljam po unapred utvrdjenim pravilima?',
		'Volim da se izolujem od spoljasnje buke?',
		'Uvek pokusavam da budem nepristrasan pa cak iako to ugrozava moje odnose sa drugima?',
		'Ako na temu nesrecne ljubavi, ima dobar film i dobra knjiga, radije cu odgledati dobar film?',
		'Volim da poslove radim na svoj nacin, nezavisno od pravila?',
		'Kada sam u brigama ja ih najcesce podelim sa drugima?',
		'Drugi lako prepoznaju moja trenutna osecanja?',
		'Kada izvrsavam svakodnevne zadatke koristim iste nacine nezavnisno od situacije?',
		'Volim istrajan, rutinski rad?',
		'Kada sam u brigama ja ih najcesce zadrzim za sebe?',
		'Drugi tesko prepoznaju moja trenutna osecanja?',
		'Kada izvrsavam svakodnevne zadatke koristim razne nacine zavisno od situacije?',
		'Najvise mi prija rad u naletima, sa puno obrta?',
		'Slobodno vreme, najradije provodim u drustvu meni dragih osoba?',
		'U knjigama i filmovima najvise obracam paznju na osecanja glavnih junaka?',
		'Volim kad su stvari dobro isplanirane i strukturisane?',
		'U svemu sto radim oslanjam se na svoje iskustvo?',
		'Slobodno vreme, najradije bih da provedem sam/a, pred tv-om ili za racunarom?',
		'U knjigama i filmovima meni su najvazniji tok i radnja price?',
		'Volim da se sve desava spontano i neplanirano?',
		'Najvise verujem sopstvenoj  intuiciji?',
		'Nakon dana provedenog medju ljudima osecam se energicno i stimulisano?',
		'Kada dozivim neuspeh najvise mi pomogne ako me neko ohrabri?',
		'U svakom problemu uvek trazim jedno, ali tacno resenje?',
		'Za uspeh u nekom poslu najvaznije je iskustvo?',
		'Nakon dana provedenog sa ljudima osecam se iscrpljeno i zelim samocu?',
		'Kada dozivim neuspeh najvise mi znaci kada mi neko ukaze na razloge mog neuspeha?',
		'Mislim da za svaki problem postoji vise dobrih resenja?',
		'Za uspeh u nekom poslu najvaznija je spremnost za promene?',
		'Lako mi je da razgovaram prvi put sa, dotada, nepoznatom osobom?',
		'Drugari za mene kazu da sam vrlo osecajna osoba?',
		'Moj sto, radni prostor itd. su uglavnom cisti i uredni pod konac?',
		'Osecam se bolje ukoliko se pridrzavam uobicajenih navika?',
		'Imam problema da razgovaram prvi put sa, dotada, nepoznatom osobom?',
		'Drugi ne smatraju vise razboritom, nego osecajnom osobom?',
		'Volim da improvizujem i da se snalazim u novim situacijama?',
		'Cesto rizikujem, jer ko reskira taj vise dobija?',
		'Veoma lako uspostavljam komunikaciju u drustvenim situacijama?',
		'U odnosu sa svojim drugarima vaznije mi je sta oni osecaju nego sta misle?',
		'Volim da radim poslove po redosledu kako su i naisli?',
		'Verujem iskljucivo svom iskustvu i rutini?',
		'Na zurkama i drustvenim okupljanjima drugi ljudi meni prvi prilaze radi upoznavanja?',
		'U odnosu sa mojim drugarima vaznije mi je sta oni misle nego sta osecaju?',
		'Sebe vidim pre kao umetnika nego kao naucnika?',
		'Najvise verujem svom instinktu?',
		'Ja sam vise drustvena nego povucena osoba?',
		'Kada vidim nekoga u nevolji pruzim mu podrsku i utehu?',
		'Najbolje se snalazim u poslovima koji su dobro isplanirani?',
		'Prilicno lako resavam zadatke koje zahtevaju prezicnost i koncentraciju?',
		'Telefonom najcesce razgovaram kada me drugi zovu?',
		'Pricicu nekome u nevolju da saznam razloge i povode?',
		'Ne smeta mi ako moram da radim bez predhodnog planiranja?',
		'Gubim interesovanje kada obavljam zadatke koje zahtevaju preciznost i koncentraciju?',
		'Mislim da sam kao osoba vise otvorena i komunikativna?',
		'U odnosu sa prijateljima, najvaznije mi je sta oni osecaju prema meni?',
		'Najvise cenim resenja problema koja su konacna i efikasna?',
		'Stvari treba prihvatiti onakve kakve jesu?',
		'Mislim da sam kao osoba vise zatvorena i stidljiva?',
		'U odnosu sa prijateljima najvaznije mi je sta oni misle o meni?',
		'Radije bih da pokrenem novu inicijativu, nego da zavrsim vec zapoceto?',
		'Ne treba se miriti sa stanjem stvari vec ih treba menjati?',
		'Nove vesti ja obicno saznam medju prvima?',
		'Drugi me dozivljavaju kao drdacnu osobu?',
		'Kada od delova sklapim neki uredjaj zahtevam semu/crtez po kojoj cu to raditi?',
		'Bolje je imaju jedno efikasno resenje, nego hiljadu posticajnih planova?',
		'Nove vesti ja obicno saznam medju poslednjima?',
		'Kod ljudi sa kojima radim vazniji mi je njihov razum nego osecanja?',
		'Najvise mi odgovara fleksibilno radno vreme?',
		'Resenja najveceg problema slucano mi padnu na pamet?',
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


