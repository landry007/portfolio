import React from 'react'
import { Route, Switch } from "react-router-dom"
import Home from "./components/home/home"
import  Projects from "./components/projects/projects"
import  Skills from "./components/skills/skills"
import  Contact from "./components/contact/contact"

import  About from "./components/about/about"

import './App.css'



class App extends React.Component {

  render(){
    return(

      <div>
       
            <Switch>

                <Route  path="/" exact component={ Home } />
                <Route  path="/projects" component={ Projects } />
                <Route  path="/mes-competences" component={ Skills } />
                <Route  path="/a-propos" component={ About } />
                <Route  path="/contactez-moi" component={ Contact } />


            </Switch >


      </div>
     


      )
  }
 
}

export default App
