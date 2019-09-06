import React from 'react';
import {Link} from 'react-router-dom'



class Homepage extends React.Component {
  
  
  render () {
    return (
      <div className="homepage">
        <header className="homepage-header">        
          FIFO Adoption
        </header>
        <h1>Find a Fuzzy Friend!</h1>
        <p>FIFO is an adoption agency that works on a "First-In, First-Out" basis. 
          This means that animals are adopted based on the order that they arrive at FIFO.
          Please join us and help our furbabies find a forever home!</p>
          
          <Link to="/adopt" className="adopt-link">Ready to adopt?</Link>
      </div>
    );
  }
  
}

export default Homepage;
