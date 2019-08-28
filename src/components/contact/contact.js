import React from "react"
import PersistentDrawerLeft  from '../header/header.js'

import './contact.css'


class Contact extends React.Component{




	render(){
		return(

			<div>
			   <PersistentDrawerLeft />
			   <div className="contact-container" >

			   		<div className="social-form">
					   <div className="social-network" >
						  <h1>social network</h1> 
						  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7961.544653196867!2d11.5857315!3d3.8589691000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc4f1a726173d%3A0x2ef4027a161cef97!2sLyc%C3%A9e+de+Nkoabang!5e0!3m2!1sfr!2scm!4v1564224538742!5m2!1sfr!2scm" width="600" height="550" frameborder="0"  allowfullscreen></iframe> 
					   </div>

					    <div className="contact-form" >
						   <h1>contact form</h1>
					    </div>   
					</div>

			   </div>
			   
			

			</div>
			)
	}
}

export default Contact ;