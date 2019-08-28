import React from "react"
import PersistentDrawerLeft  from '../header/header.js'
import Tabs from '../tabsProjects/tabs'






class Project extends React.Component{


	render(){
		return(

			<div>
			   <PersistentDrawerLeft />
			   <Tabs />
			
			</div>
			)
	}
}

export default Project ;