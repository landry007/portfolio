import React from "react"
import PersistentDrawerLeft  from '../header/header.js'

import firebase from '../config/fireBaseConfig'
import SkillList from '../skillList/skillList'

import './skills.css'
// Add the Firebase services that you want to use

import "firebase/database";
import "firebase/firestore"



//const database = firebase.database();
const db = firebase.firestore()

class Skills extends React.Component{

	 constructor(props){
	 	super(props)

	 	this.state = {
			 skills : [] ,
	 	        
		 }
		 

	 }

	componentDidMount(){

		 db.collection('Skills').get().then( querySnapshot => {
			this.setState({ skills : querySnapshot.docs }, ()=>{

		       this.state.skills.filter( doc => doc.get('type') == 'front').map( skill => console.log( skill.get('name')))

			})
			
		})

		db.collection('Skills').where('type','==','front').get()
		.then( querySnapshot => this.setState({ front : querySnapshot}))

	 }

	render(){
		return(

			<div>
			   <PersistentDrawerLeft />
			   <div className="skill_container">
			         <div className="rapid_description">
			         	<div className="fast">
			        
							 <img src="./images/fast_loading.png" alt="" />


			         		<h3>Rapidite</h3>
			         		<p>Des temps de chargement rapides et une interaction sans décalage, ma plus haute priorité.</p>

			         	</div>
			         	<div className="responsive">
							 <img src="./images/web_devices.png" alt="" />
				         

			         		<h3>Responsive</h3>
			         		<p>Mes mises en page fonctionnent sur tous les appareils, grands ou petits.</p>

			         	</div>
			         	<div className="intuitive">
						 <img src="./images/Creation_process.png" alt="" />
				    

			         		<h3>Intuitive</h3>
			         		<p>Préférence forte pour UX / UI intuitive, facile à utiliser.</p>

			         	</div>
			         	<div className="dynamic">

						 <img src="./images/programming.png" alt="" />
			    
			         		<h3>Dynamique</h3>
			         		<p>Les sites Web ne doivent pas nécessairement être statiques, j'aime donner vie aux pages.</p>

			         	</div>


			         </div>
			    <div className="progressBar">
			    	<div className="front-end" >

			    		<div className="title">
			    			<h5>Front End</h5>

			    		</div>

			    	</div>

			    	<SkillList skills = { this.state.skills.filter(skill => skill.get('type') === 'front') }   />

			    </div>
			    <div className="divide"></div>

			    <div className="progressBar">
			    	<div className="front-end" >

			    		<div className="title">
			    			<h5>Back End </h5>

			    		</div>

			    	</div>

			    	<SkillList skills = { this.state.skills.filter(skill => skill.get('type') === 'back') }  />

			    </div>

			    <div className="divide"></div>

			     <div className="progressBar">
			    	<div className="front-end" >

			    		<div className="title">
			    			<h5>C M S </h5>

			    		</div>

			    	</div>

			    	<SkillList skills = { this.state.skills.filter(skill => skill.get('type') === 'cms') }   />

			    </div>
			    <div className="divide"></div>

			     <div className="progressBar">
			    	<div className="front-end" >

			    		<div className="title">
			    			<h5>Compétences liées au Web </h5>

			    		</div>

			    	</div>

			    	<SkillList skills = { this.state.skills.filter(skill => skill.get('type') === 'generale-web') }  />

			    </div>
			    <div className="divide"></div>

			    <div className="progressBar">
			    	<div className="front-end" >

			    		<div className="title">
			    			<h5>Outils de Travail & env </h5>

			    		</div>

			    	</div>

			    	<SkillList skills = { this.state.skills.filter(skill => skill.get('type') === 'env') }   />

			    </div>
			    <div className="divide"></div>

			   </div>

			</div>
			)
	}
}

export default Skills ;