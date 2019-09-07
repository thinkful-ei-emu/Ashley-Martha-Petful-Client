import React from 'react';
import {Link} from 'react-router-dom'
import './homepage.css'

class Homepage extends React.Component {
    
  render () {
    return (
      <div className="homepage">
        <header className="homepage-header">        
          FIFO Adoption
        </header>
        <h1>Find a Fuzzy Friend!</h1>
        <img src="https://www.kingcounty.gov/~/media/global/heroimages/raskc/pets-lineup-xlg.ashx" alt="line of cats and dogs" /> 
        <p>FIFO is an adoption agency that works on a "First-In, First-Out" basis. 
          This means that animals are adopted based on the order that they arrive at FIFO. You 
          also will have to wait until you are first in line in order to adopt a pet. 
          Please join us and help our furbabies find a forever home!</p>
          
          <Link to="/adopt" className="adopt-link">Ready to adopt?</Link>
      </div>
    );
  }
  
}

export default Homepage;
