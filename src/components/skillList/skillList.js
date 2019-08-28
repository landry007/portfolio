import React from 'react'
import ProgressBar from '../progressBar/progressBar'




export default function SkillList(props){

	return(
			<div className="action" >

				{ props.skills.map((skill, k)=>{
					return(
					<div key={ k } className="action-item" >
						<p>{skill.get('name')} </p>
						<ProgressBar skill={ skill.get('percent') } /> 

					</div>
					)
				})}
				
			</div>

		)
}