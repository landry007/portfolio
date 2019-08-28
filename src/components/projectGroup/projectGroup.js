import React from "react"
import ProjectItem from '../projectItem/projectItem'
import "./projectGroup.css"




class ProjectGroup extends React.Component{

	render(){
		return(
				<div style={{overflowX:'hidden'}} >

					<h1>JE SUIS LE  GROUP : '{ this.props.title }' :) </h1>

					<div className="container" >
						<ProjectItem title = { this.props.title }  />
						<ProjectItem title = { this.props.title }  />
						<ProjectItem title = { this.props.title }  />
						<ProjectItem title = { this.props.title }  />
						<ProjectItem title = { this.props.title }  />
						<ProjectItem title = { this.props.title }  />
						<ProjectItem title = { this.props.title }  />
						

					</div>


				</div>
			)
	}
}

export default ProjectGroup