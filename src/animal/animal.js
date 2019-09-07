import React from 'react';
import './animal.css'

class Animal extends React.Component {
   //need to display no cats left if none left in queue


  render() {
    const {animal} = this.props;
    
    
      return (
        <div className="animal">       
                
          <h3>{animal.name}</h3> 
          <div className="animal-image-container">
            <img src={animal.imageURL} alt="cat" />
            </div>        
          <p>{animal.imageDescription}</p>            
          <p>Sex: {animal.sex}</p>
          <p>Age: {animal.age}</p>
          <p>Breed: {animal.breed}</p>
          <p>About Me:</p>      
          {animal.story}          
        </div>
      );

    
  }

}

export default Animal;
