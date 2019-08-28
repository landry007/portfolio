import React from "react"
import "./home.css"

import PersistentDrawerLeft  from '../header/header.js'






class Home extends React.Component{




	render(){
		return(

			<div>
			   <PersistentDrawerLeft />
				<div className="container" >
						<div className="logo">
							<img className="image" src="http://www.wis-ecoles.com/wp-content/uploads/2018/02/avatar-H1535118110440.png" alt="google Map" />
						</div>
					<div className="main">


						<div className="presentation" >
							<h1 className="main_text" >Full Stack Web Developper</h1>
							<p className="divider">******************************************************************</p>

							<p  className="lang_list" >HTML / CSS3 <span>|</span>Bootstrap <span>|</span>JavaScript<span>|</span>React / React Native <span>|</span>Node js <span>|</span> Express js<span>|</span> Php ... </p>

							<div className="social_medias">
								<a href=""><img src="./images/face.png" alt="facebook logo" /></a>
								<a href=""><img src="./images/github.png" alt="facebook logo" /></a>
								<a href=""><img src="./images/linkdin.png" alt="facebook logo" /></a>
								

							</div>

						</div>

					</div>

				</div>


			</div>
			)
	}
}

export default Home ;