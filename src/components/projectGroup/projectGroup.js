import React from "react"
import ProjectItem from '../projectItem/projectItem'
import "./projectGroup.css"

import firebase from '../config/fireBaseConfig'

// Add the Firebase services that you want to use

import "firebase/firestore"

//Initialize Firestore

const db = firebase.firestore()



class ProjectGroup extends React.Component{

	constructor(props){
		super(props)

		this.state = {
			projects : []
		}
	}

	async componentDidMount(){

	  const	queryDocumentSnapshot = await db.collection('Projects').get()

	  this.setState({ projects :  queryDocumentSnapshot.docs })
		
	}

	render(){
		return(
			<div style={{overflowX:'hidden'}} >

				<div className="container" >
					{ this.state.projects.filter( projet => projet.get('lang').toUpperCase() == this.props.title).map( project =>{
					return( 

						<ProjectItem  navigation = { this.props.navigation } key = { project.id } title = { this.props.title } project = { project } />

					)
					})  }

				</div>


			</div>
		)
	}
}

export default ProjectGroup