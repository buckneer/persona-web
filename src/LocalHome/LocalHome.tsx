import "./LocalHome.scss";
import architect from "../assets/personalities/architect.svg";
import logician from "../assets/personalities/logician.svg";
import commander from "../assets/personalities/commander.svg";
import debater from "../assets/personalities/debater.svg";
import advocate from "../assets/personalities/infj-advocate.svg";
import mediator from "../assets/personalities/infp-mediator.svg";
import protagonist from "../assets/personalities/enfj-protagonist.svg";
import campaigner from "../assets/personalities/enfp-campaigner.svg"
import logisctician from "../assets/personalities/istj-logistician.svg";
import defender from "../assets/personalities/isfj-defender.svg";
import executive from "../assets/personalities/estj-executive.svg";
import consul from "../assets/personalities/esfj-consul.svg";
import virtuoso from "../assets/personalities/istp-virtuoso.svg";
import adventurer from "../assets/personalities/isfp-adventurer.svg";
import ent from "../assets/personalities/estp-entrepreneur.svg";
import entertainer from "../assets/personalities/esfp-entertainer.svg";
import {PersonalityType} from "../data/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import { data } from "../data/data";


const personalities: PersonalityType[] = [
	{
		name: "Analitičari",
		personalities: [
			{
				title: "Arhitekta",
				desc: "Maštoviti i strategijski mislioci, koji imaju plan za sve.",
				illustration: architect,
				type: "INTJ-A / INTJ-T"
			},
			{
				title: "Logičar",
				desc: "Inovativni izumitelji sa nezasitnom željom za znanjem.",
				illustration: logician,
				type: "INTP-A / INTP-T"
			},
			{
				title: "Komandant",
				desc: "Neustrašivi, maštoviti lideri sa jakom voljom, koji uvek pronalaze način - ili ga stvore",
				illustration: commander,
				type: "ENTJ-A / ENTJ-T"
			},
			{
				title: "Debatnik",
				desc: "Pametni i radoznali mislioci koji ne mogu da odole intelektualnom izazovu.",
				illustration: debater,
				type: "ENTP-A / ENTP-T"
			},

		],
		background: "#E7DFEA",
		textColor: "#88619a"
	},
	{
		name: "Diplomate",
		personalities: [
			{
				title: "Advokat",
				desc: "Tihi i tajanstveni, ali vrlo inspiritivni i neumorni idealisti.",
				illustration: advocate,
				type: "INFJ-A / INFJ-T"
			},
			{
				title: "Posrednik",
				desc: "Poetični, ljubazni i altruistički ljudi, uvek rado učestvuju u dobrim delima.",
				illustration: mediator,
				type: "INFP-A / INFP-T"
			},
			{
				title: "Protagonista",
				desc: "Harizmatične i inspirativne vođe, u stanju da fasciniraju svoje slušaoce.",
				illustration: protagonist,
				type: "ENFJ-A / ENFJ-T"
			},
			{
				title: "Aktivista",
				desc: "Entuzijasti, kreativne i društvene osobe slobodnog duha koji uvek nađu razlog za osmeh.",
				illustration: campaigner,
				type: "ENFP-A / ENFP-T"
			},

		],
		background: "#d6ece3",
		textColor: "#33a474"
	},
	{
		name: "Stražari",
		personalities: [
			{
				title: "Logističar",
				desc: "Praktične osobe, fokusirane na činjenice, u čiju se pouzdanost ne može sumnjati.",
				illustration: logisctician,
				type: "ISTJ-A / ISTJ-T"
			},
			{
				title: "Branilac",
				desc: "Veoma posvećeni i topli zaštitnici, uvek spremni da zaštite svoje voljene.",
				illustration: defender,
				type: "ISFJ-A / ISFJ-T"
			},
			{
				title: "Izvršilac",
				desc: "Odlični administratori, nenadmašni u upravljanju stvarima - ili ljudima.",
				illustration: executive,
				type: "ESTJ-A / ESTJ-T"
			},
			{
				title: "Konzul",
				desc: "Izvanredno saosećajni, društveni i popularni ljudi, uvek rado pomažu.",
				illustration: consul,
				type: "ESFJ-A / ESFJ-T"
			},

		],
		background: "#d9eaf0",
		textColor: "#4298b4"
	},
	{
		name: "Istraživači",
		personalities: [
			{
				title: "Virtuoz",
				desc: "Neustrašivi i praktični eksperimentatori, majstori svih alata.",
				illustration: virtuoso,
				type: "ISTP-A / ISTP-T"
			},
			{
				title: "Avanturista",
				desc: "Fleksibilni i šarmantni umetnici, uvek spremni da istražuju i dožive nešto novo.",
				illustration: adventurer,
				type: "ISFP-A / ISFP-T"
			},
			{
				title: "Preduzetnik",
				desc: "Pametni, energični i vrlo perspektivni ljudi, koji uživaju u riskantnim poduhvatima.",
				illustration: ent,
				type: "ESTP-A / ESTP-T"
			},
			{
				title: "Zabavljač",
				desc: "Spontani, energični i entuzijastični zabavljači - život nikad nije dosadan pored njih.",
				illustration: entertainer,
				type: "ESFP-A / ESFP-T"
			},

		],
		background: "#f9eed7",
		textColor: "#e4ae3a"
	}
]

function LocalHome() {

	const navigate = useNavigate();

	const handleRedirect = () => {
		navigate("/test")
	}

	return (
		<div className="LocalHome">

			<main className="container">
				<div className="heading">
					<h1>PERSONA</h1>
					<p>Upoznaj sebe</p>
				</div>

				<div className="button-container">

					<div className="dark-button" onClick={handleRedirect}>Započni test</div>
				</div>

				<div className="arrow">
					<FontAwesomeIcon size="2x" icon={faChevronDown} />
				</div>
			</main>
			{personalities.map(personality => (
				<div className="types" style={{background: personality.background, color: personality.textColor}}>
					<div className="section-heading">
						<h2>{personality.name}</h2>
					</div>
					<div className="box-container">
						{personality.personalities.map(item => (
							<div className="box">
								<img src={item.illustration} />
								<div className="type-desc">
									<h1>{item.title}</h1>
									{item.type}
									<p>{item.desc}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			))}

			<div>
				{data.personalities[0].desc}
			</div>


		</div>
	);
}

export default LocalHome;
