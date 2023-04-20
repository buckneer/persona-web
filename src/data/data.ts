import {Dimension, Key, LocalData, Personality} from "./types";


export const data : LocalData = {
	questions: [
		'1. Za mene se ne bi moglo reci da sam rezervisan i distanciran u komunikaciji sa drugima?',
		'2. Lako reagujem na tudja osecanja?',
		'3. Volim da najpre zavrsim jedan, vec zapoceti, pre nego sto pocnem da radim novi posao?',
		'4. Izmedju dobre prakse i zanimljive maste ja radije biram dobru praksu?',
		'5. Uzivam u usamljenickim setnjama?',
		'6. Brzo reagujem na verbalno izrazena tudja razmisljanja?',
		'7. Brzo i lako se prilagodjavam svim okolnostima koje me snadju u zivotu?',
		'8. Vise sam sklon razmisljanju o velikim idejama, nego o njihovoj realizaciji?',
		'9. Kada se nalazim u drustvu ja uglavnom pricam, a manje slusam druge?',
		'10. Kao osoba ja sam sklon/a da neki dogadjaj najpre osecajno dozivim da bi ga razumeo/la?',
		'11. Volim da planiram i da se organizujem pre nego sto bilo sta pocnem da radim?',
		'12. Skoro sve poslove pocinjem da radim od pocetka i korak po korak?',
		'13. Kada se nalazim u drustvu ja obicno vise slusam druge a manje pricam?',
		'14. Veoma lako i uspeno kontrolisem svoje emocije?',
		'15. Volim da se prilagodjavam dok radim bilo koji posao?',
		'16. Najveci deo poslova zapocinjem da radim bilo gde pa se uklapam u hodu?',
		'17. Svoje slobodno vreme provodim u vecim grupama ljudi, a retko usamljenicki?',
		'18. Tacnije procenjujem sta neka osoba oseca u datom trenutnku, nego sta ona misli?',
		'19. Kod sebe, a i kod drugih od svih osobina licnosti najvise cenim odlucnost?',
		'20. Najbolje rezultate postizem kada se oslanjam na sopstveno iskustvo?',
		'21. Slobodno vreme najcesce provodim sa malobrojnim prijateljima i/ili cak usamljenicki?',
		'22. Tacnije procenjujem sta neka osoba misli nego sta oseca?',
		'23. Uspevam u radu zato sto se brzo i dobro snalazim?',
		'24. Najbolje rezultetate postizem kada se oslanjam na svoju mastu?',
		'25. Vecina osoba me opisuje kao energicnu i pricljivu osobu?',
		'26. U poredjenju sa vecinom ljudi koje poznajem ja sam vise osecajna nego kriticna osoba?',
		'27. U poslu vise volim radnu disciplinu nego bilo kakve improvizacije?',
		'28. U skoro svakom poslu najvaznija mi je praksa i vestina?',
		'29. Mene vecina ljudi opisuje kao smirenu osobu koja ume da slusa druge?',
		'30. Uvek se cvrsto drzim vlastitih principa, pa makar to povredjivalo osecanja drugih?',
		'31. U poslu radije prihvatam korisno prilagodjavanje nego kruta pravila?',
		'32. Volim da tragam za novim resenjima u svakom problemu?',
		'33. Petkom uvece, posle naporne nedelje, obicno izadjem u provod?',
		'34. Ja cesce i vise osecam nego sto razmisljam?',
		'35. Vise me insteresuje ono sto se stvarno desilo, a manje ono sto je moglo da se dogodi?',
		'36. Postujem sve zadate vremenske rokove?',
		'37. Petkom uvece, posle naporne deljenje, obicno ostajem u kuci da se odmaram?',
		'38. Na moje postupke cesto uticu emocije?',
		'39. Uvek tragam za razlicitim mogucnostima?',
		'40. Ne drzim se tako kruto dogovorenih vremenski rokova?',
		'41. Kada sam u bedaku vise volim da budem u drustvu drugih?',
		'42. Kada se nadjem u nejasnoj situaciji ja najvise verujem svojim osecanjima?',
		'43. Svoj zivot zivim tada da sto vise naucim?',
		'44. Drugi ljudi za mene kazu da sam veoma praktikcna osoba?',
		'45. Kada sam u bedaku vise volim da budem sam/a?',
		'46. Vise verujem svom razumu nego osecanjima?',
		'47. Svoj zivot zivim tako da se sto vise zezam i uzivam u zivotu?',
		'48. Drugi ljudi za mene kazu da sam veoma mastovita osoba?',
		'49. Radije bih da ja naredjujem drugima, nego da izvsavam tudje naredbe?',
		'50. Najvise cemin nadredjene (roditelje, stariji, nastavnici, sefovi...) koji me brizno podrzavaju?',
		'51. Ako na temu nesrecne ljubavi ima dobar film i dobra kniga, radije cu da procitam knjigu?',
		'52. Sve poslove i zadatke obavljam po unapred utvrdjenim pravilima?',
		'53. Volim da se izolujem od spoljasnje buke?',
		'54. Uvek pokusavam da budem nepristrasan pa cak iako to ugrozava moje odnose sa drugima?',
		'55. Ako na temu nesrecne ljubavi, ima dobar film i dobra knjiga, radije cu odgledati dobar film?',
		'56. Volim da poslove radim na svoj nacin, nezavisno od pravila?',
		'57. Kada sam u brigama ja ih najcesce podelim sa drugima?',
		'58. Drugi lako prepoznaju moja trenutna osecanja?',
		'59. Kada izvrsavam svakodnevne zadatke koristim iste nacine nezavnisno od situacije?',
		'60. Volim istrajan, rutinski rad?',
		'61. Kada sam u brigama ja ih najcesce zadrzim za sebe?',
		'62. Drugi tesko prepoznaju moja trenutna osecanja?',
		'63. Kada izvrsavam svakodnevne zadatke koristim razne nacine zavisno od situacije?',
		'64. Najvise mi prija rad u naletima, sa puno obrta?',
		'65. Slobodno vreme, najradije provodim u drustvu meni dragih osoba?',
		'66. U knjigama i filmovima najvise obracam paznju na osecanja glavnih junaka?',
		'67. Volim kad su stvari dobro isplanirane i strukturisane?',
		'68. U svemu sto radim oslanjam se na svoje iskustvo?',
		'69. Slobodno vreme, najradije bih da provedem sam/a, pred tv-om ili za racunarom?',
		'70. U knjigama i filmovima meni su najvazniji tok i radnja price?',
		'71. Volim da se sve desava spontano i neplanirano?',
		'72. Najvise verujem sopstvenoj  intuiciji?',
		'73. Nakon dana provedenog medju ljudima osecam se energicno i stimulisano?',
		'74. Kada dozivim neuspeh najvise mi pomogne ako me neko ohrabri?',
		'75. U svakom problemu uvek trazim jedno, ali tacno resenje?',
		'76. Za uspeh u nekom poslu najvaznije je iskustvo?',
		'77. Nakon dana provedenog sa ljudima osecam se iscrpljeno i zelim samocu?',
		'78. Kada dozivim neuspeh najvise mi znaci kada mi neko ukaze na razloge mog neuspeha?',
		'79. Mislim da za svaki problem postoji vise dobrih resenja?',
		'80. Za uspeh u nekom poslu najvaznija je spremnost za promene?',
		'81. Lako mi je da razgovaram prvi put sa, dotada, nepoznatom osobom?',
		'82. Drugari za mene kazu da sam vrlo osecajna osoba?',
		'83. Moj sto, radni prostor itd. su uglavnom cisti i uredni pod konac?',
		'84. Osecam se bolje ukoliko se pridrzavam uobicajenih navika?',
		'85. Imam problema da razgovaram prvi put sa, dotada, nepoznatom osobom?',
		'86. Drugi ne smatraju vise razboritom, nego osecajnom osobom?',
		'87. Volim da improvizujem i da se snalazim u novim situacijama?',
		'88. Cesto rizikujem, jer ko reskira taj vise dobija?',
		'89. Veoma lako uspostavljam komunikaciju u drustvenim situacijama?',
		'90. U odnosu sa svojim drugarima vaznije mi je sta oni osecaju nego sta misle?',
		'91. Volim da radim poslove po redosledu kako su i naisli?',
		'92. Verujem iskljucivo svom iskustvu i rutini?',
		'93. Na zurkama i drustvenim okupljanjima drugi ljudi meni prvi prilaze radi upoznavanja?',
		'94. U odnosu sa mojim drugarima vaznije mi je sta oni misle nego sta osecaju?',
		'95. Sebe vidim pre kao umetnika nego kao naucnika?',
		'96. Najvise verujem svom instinktu?',
		'97. Ja sam vise drustvena nego povucena osoba?',
		'98. Kada vidim nekoga u nevolji pruzim mu podrsku i utehu?',
		'99. Najbolje se snalazim u poslovima koji su dobro isplanirani?',
		'100. Prilicno lako resavam zadatke koje zahtevaju prezicnost i koncentraciju?',
		'101. Telefonom najcesce razgovaram kada me drugi zovu?',
		'102. Pricicu nekome u nevolju da saznam razloge i povode?',
		'103. Ne smeta mi ako moram da radim bez predhodnog planiranja?',
		'104. Gubim interesovanje kada obavljam zadatke koje zahtevaju preciznost i koncentraciju?',
		'105. Mislim da sam kao osoba vise otvorena i komunikativna?',
		'106. U odnosu sa prijateljima, najvaznije mi je sta oni osecaju prema meni?',
		'107. Najvise cenim resenja problema koja su konacna i efikasna?',
		'108. Stvari treba prihvatiti onakve kakve jesu?',
		'109. Mislim da sam kao osoba vise zatvorena i stidljiva?',
		'110. U odnosu sa prijateljima najvaznije mi je sta oni misle o meni?',
		'111. Radije bih da pokrenem novu inicijativu, nego da zavrsim vec zapoceto?',
		'112. Ne treba se miriti sa stanjem stvari vec ih treba menjati?',
		'113. Nove vesti ja obicno saznam medju prvima?',
		'114. Drugi me dozivljavaju kao drdacnu osobu?',
		'115. Kada od delova sklapim neki uredjaj zahtevam semu/crtez po kojoj cu to raditi?',
		'116. Bolje je imaju jedno efikasno resenje, nego hiljadu posticajnih planova?',
		'117. Nove vesti ja obicno saznam medju poslednjima?',
		'118. Kod ljudi sa kojima radim vazniji mi je njihov razum nego osecanja?',
		'119. Najvise mi odgovara fleksibilno radno vreme?',
		'120. Resenja najveceg problema slucano mi padnu na pamet?',
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


