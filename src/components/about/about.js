import React from "react"
import PersistentDrawerLeft  from '../header/header.js'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import './about.css'


class About extends React.Component{

	render(){
		return(

			<div>
			   <PersistentDrawerLeft />
			   <div className='about-container'>
			   		<div className="presentation">
			   			<div className="about-flash" ></div>

						<h1>Bonjour, je suis <span>Djodom Landry M </span> - DokterWeb</h1>
						<h1>Je suis developpeur web & mobile Full stack</h1>
						<p>plus de 2 ans d'expériences déja</p>
						<Link to ="projects"> <Button size="large" className='about-button'>Voir Mon Travail</Button></Link>
			   		</div>
			   		<div className="about-description" >

			   			<p className="paragraphe-description" >
			   				Passionné par les nouvelles technologies , le poste de développeur
			   				a attiré toute mon attention . Ma formation résolument tournée vers les
			   				réseaux informatiques, les bases de données et la programmation objet
			   				m'a permis d'acquérir les connaissances nécessaires à la conception et au
			   				développement de projets. J'ai notamment acquis une parfaite maîtrise
			   				des techniques de développement web php et node js (socket.io) , dans
			   				une architecture 3-tier client/serveur. Orienter Web / Mobile ,
			   				et désirant ardemment mettre en exergue mon savoir faire et surtout de
			   				m’améliorer d’avantage au seins de votre entreprise.
			   			</p>
			   		</div>


			   		<div className="about-work" >
			   		
			   			<h3>Comment je travail</h3>
			   			<div className="work-description">
			   				<div className="work 1" ><h1>bonjour</h1>
			   					<h1>bonjour</h1>
			   				</div>
			   				<div className="work 2" ><h1>bonjour</h1>
			   					<h1>bonjour</h1>
			   				</div>
			   				<div className="work 3" ><h1>bonjour</h1>
			   					<h1>bonjour</h1>
			   				</div>
			   				<div className="work 4" ><h1>bonjour</h1>
			   					<h1>bonjour</h1>
			   				</div>
			   				<div className="work 5" ><h1>bonjour</h1>
			   					<h1>bonjour</h1>
			   				</div>
			   				<div className="work 6" ><h1>bonjour</h1>
			   					<h1>bonjour</h1>
			   				</div>
			   				<div className="work 7" ><h1>bonjour</h1>
			   					<h1>bonjour</h1>
			   				</div>
			   				<div className="work 8" ><h1>bonjour</h1>
			   					<h1>bonjour</h1>
			   				</div>
			   				<div className="work 10" ><h1>bonjour</h1>
			   					<h1>bonjour</h1>
			   				</div>
			   				<div className="work 11" ><h1>bonjour</h1>
			   					<h1>bonjour</h1>
			   				</div>


			   			</div>
			   		</div>

			   		<div className="footer">
			   		    <h2>Reponse a quelques questions :)</h2>
			   			<div className="question">
			   				<h3>En quoi consiste votre fonction de développeur Web ?</h3>
			   				<p>Tout projet commence par une phase d'analyse. Les vendeurs (Sales Managers) rencontrent les clients et procèdent à un travail préparatoire en rédigeant un cahier des charges qui définit, par exemple, le type de site Web souhaité.<br/>
			   				 J'interviens ensuite et, en concertation avec les clients, j'étudie leurs besoins en profondeur et toutes les fonctionnalités. A partir de là, je rédige une analyse et je fais des choix techniques (concernant les outils, les plates-formes, les machines).<br/>
			   				 Ensuite, commence la programmation, qui est vraiment le c'ur de mon travail.</p>
			   			</div>
			   			<div className="question">
			   				<h3></h3>
			   				<p></p>
			   			</div>

			   			<div className="question">
			   				<h3>Combien de développeurs interviennent sur un site ?</h3>
			   				<p>Cela dépend de l'envergure du projet. Les sites classiques d'information relèvent plutôt d'un travail de création de look de la part du designer.<br/>
			   				 On y greffe quelques modules comme des newsletters. A côté de cela, il existe des projets plus complexes qui sont vraiment des applications Web utilisées de manière interne, au sein des entreprises, telles que des bases de données, de la gestion de documents, etc.<br/>
			   				 Actuellement, DAD compte 15 développeurs pour 65 personnes et c'est insuffisant.</p>
			   			</div>

			   			<div className="question">
			   				<h3>Donnez-vous déjà vos consignes avant l'intervention des ID (Information Design)[2] ou travaillez-vous à la suite du travail créatif ?</h3>
			   				<p>En fait, quand la phase de développement d'un projet est lancée, les IT et les ID travaillent en parallèle. 
			   				Et, à la fin du projet, nous « mergeons » (nous intégrons) toutes nos fonctionnalités dans la présentation.</p>
			   			</div>

			   			<div className="question">
			   				<h3>Quelles sont les compétences supplémentaires d'un développeur Web par rapport à celles d'un développeur classique ?</h3>
			   				<p>Par rapport à un programmeur classique, il faut maîtriser toute la technologie liée spécifiquement au Web.
			   				 Les principes de base de programmation restent les mêmes, seul le principe de fonctionnement d'une application Web est différent d'une application classique.<br/> Il y a aussi des langages plus spécifiques au Web, tels que HTML, Visual Basic, Java et tout ce qui est script comme Java script ou Vb script qui rendent les pages plus dynamiques. Le choix des langages est fort lié à un type de produit.
			   				 <br/> Le département dont je dépends, qui est le Business Systems, travaille plutôt dans l'environnement Microsoft et notamment Visual Studio qui permet de développer en Visual Basic et en ASP (Active Server Pages).
			   				 <br/> Le pôle Business Platforms utilise plutôt le produit Cold Fusion, qui est aussi un langage dynamique.
			   				 Il faut aussi connaître tous les protocoles réseaux, savoir comment un serveur Web fonctionne, etc..</p>
			   			</div>

			   			<div className="question">
			   				<h3>Hormis la maîtrise des technologies et des langages liés au Web, quelles sont les autres compétences nécessaires pour devenir développeur Web ? Quelles formations doit-on suivre ?</h3>
			   				<p>Personnellement, je suis gradué en informatique. Dans mon métier, je croise beaucoup de gens qui n'ont pas de véritable formation en informatique et qui se sont lancés par passion dans la programmation. 
			   				   Ces derniers ne possèdent pas toutes les bases et les principes de programmation acquis à l'école et sont donc moins rigoureux.<br/> Celui qui apprend par soi-même, sur le tas, n'a forcément pas la même maîtrise que celui qui a fait des études supérieures pour devenir informaticien.<br/>
			   				    Les postes de développeurs sont aussi assurés par des licenciés en informatique ou des ingénieurs, qui ont une approche plus théorique que celle des gradués qui sont plus vite opérationnels.

                              Il faut être rigoureux et prévoyant car les clients pressentent qu'avoir un site Web est un avantage, mais n'ont aucune idée de ce que cela représente. Il faut dès lors anticiper leurs besoins car ils ignorent ce qu'ils veulent.
                               Nous devons donc tenir compte de l'aspect de communication globale et de la demande du client.<br/><br/>

                              L'esprit d'équipe est également important ainsi que la connaissance de l'anglais. Tous les produits et la documentation liée sont majoritairement en anglais.

                              L'expérience professionnelle a beaucoup d'importance car notre métier s'acquiert aussi par ce biais. C'est d'ailleurs ce que les sociétés informatiques recherchent principalement. Lors d'interviews d'embauche, on m'a rarement demandé mon diplôme ou le type d'études que j'avais suivies. Les employeurs sont focalisés sur un savoir-faire immédiat, sur la connaissance pratique de certains langages ou programmes. C'est pour cette raison, qu'il existe une distinction entre un informaticien senior et un junior qui a moins d'expérience et dont on estime qu'il possède la faculté d'apprendre et d'évoluer.</p>
			   			</div>

			   			<div className="question">
			   				<h3>Quels conseils donneriez-vous à un jeune qui voudrait devenir développeur Web ?</h3>
			   				<p>Il doit avant tout faire des études en informatique. C'est un métier qui exige de se remettre en question constamment car la technologie évolue rapidement. Il faut sans cesse se tenir au courant et se former.
			   				 Pour ce faire, nous bénéficions de modules de formation au sein de la société et, d'autre part, nous apprenons par nous-mêmes.</p>
			   			</div>

			   			<div className="question">
			   				<h3>Comment se déroule une journée type d'un développeur Web ?</h3>
			   				<p>En général, je suis sur mon PC toute la journée. Je travaille toujours sur un projet principal et, accessoirement, à la maintenance de produits déjà réalisés comme la correction de bugs ou l'ajout de fonctionnalités. Je peux aussi donner un coup de main sur un autre projet ou faire face aux imprévus.</p>
			   			</div>

			   			<div className="question">
			   				<h3>Dans une société qui travaille sur de nombreux projets, comment ceux-ci sont-ils attribués aux différentes équipes ?</h3>
			   				<p>Les compétences et les spécialisations des personnes interviennent en premier lieu. Ensuite, on essaie de donner les projets en fonction des intérêts de chacun (technologies nouvelles, outils inédits à maîtriser,...). Le contenu ou une marque de société peut aussi intervenir : par exemple, je travaille pour l'instant sur un projet pour BMW et j'aime bien les belles voitures. 
			   				    Mais, ce qui m'attire le plus, c'est de relever le défi et de maîtriser des nouvelles technologies.</p>
			   			</div>

			   			<div className="question">
			   				<h3>Quels sont les aspects positifs et négatifs de votre métier ?</h3>
			   				<p>Le côté positif, c'est qu'il faut sans cesse se renouveler et apprendre. J'aime également le travail d'équipe. La diversité est présente aussi car je travaille sur des sujets différents, bien que le fonds de mon travail de programmation ne change pas selon les marques ou les produits.

                                 La charge de travail et les horaires élastiques constituent les principaux aspects négatifs et sont la règle générale pour les développeurs. En fait, il y a 2 types de fonctionnement : d'un côté, les grosses sociétés bien implantées qui respectent des horaires fixes et de l'autre, les petites entreprises qui débutent et où l'équipe travaille au finish.
                                  De toutes façons, le développeur a toujours une grande charge de travail pour la simple et bonne raison qu'il y a pénurie de bons développeurs ou de développeurs tout court. Mais, j'accepte cette charge de travail car je suis passionné. Si je n'aimais pas mon métier, je réagirais sans doute autrement. Néanmoins, je ne resterai pas développeur Web toute ma vie car cela exige un rythme de travail trop conséquent.
                                Après 10 ou 15 ans de programmation, la reconversion peut passer par un poste de Project Manager ou de Vendeur ou par la création de sa propre entreprise puisque le marché est propice.</p>
			   			</div>

			   			<div className="question">
			   				<h3>Y a-t-il beaucoup de filles développeuses web ?</h3>
			   				<p>Non. C’est un métier qui reste très masculin. Déjà, aux cours, il y avait seulement une fille ou deux sur les centaines d’étudiants. 
			   				  Je ne sais pas pourquoi. Il faudrait peut-être leur demander… Pourtant c’est un métier où le fait d’être un homme plutôt qu’une femme n’apporte aucun avantage.</p>
			   			</div>

			   			<div className="">
			   				<p>[1] IT est le terme générique qui désigne en général le service informatique</p>
			   				<p>
							 [2] ID est le terme générique qui désigne en général l’équipe des graphistes</p>
			   			</div>


			   		</div>
			   	

			   </div>
			

			</div>
			)
	}
}

export default About ;