import React from 'react'

import loading from "../images/loader.svg"
import './styles/Loader.css'

class Loader extends React.Component {
  render() {
    return (
      <section>
        <div className="loader">          
          <img src={loading} alt="" />            
        </div>
      </section>
    );
  }
}

export default Loader 