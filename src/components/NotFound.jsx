import React from 'react'
import Not_Found from '../images/error_1.svg'

import './styles/NotFound.css'

class NotFound extends React.Component{
    render(){
        return (
            <div className="imageContainer">
                <div>
                    <h4>An Error has ocurred</h4>
                    <h6>{this.props.mensaje}</h6>  
                </div>
                 
                <div>
                    <img src={Not_Found} alt=""/>  
                </div>             
                                              
            </div>
        )
    }
}

export default NotFound