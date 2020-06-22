import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import PersistentDrawerLeft  from '../header/header.js'
import Tabs from '../tabsProjects/tabs'



class Project extends React.Component{

	render(){
		return(
				<div>
				<PersistentDrawerLeft />
				<Tabs navigation = { this.props } />
				
				</div>
			)
	}
}

export default Project ;