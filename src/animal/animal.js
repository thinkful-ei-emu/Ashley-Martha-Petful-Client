import React from 'react';
import './animal.css'

class Animal extends React.Component {
  
  render() {
    const {animal} = this.props;    
    
      return (
        <div className="animal">       
                
          <h2 className="animal-name">{animal.name}</h2> 
          <div className="animal-image-container">
            <img src={animal.imageURL} alt="cat" />
            </div>        
          <p className="animal-description">{animal.imageDescription}</p>            
          <p>Sex: {animal.sex}</p>
          <p>Age: {animal.age}</p>
          <p>Breed: {animal.breed}</p>
          <p>About Me:</p>      
          <p>{animal.story}</p>        
        </div>
      );

    
  }

}

export default Animal;
