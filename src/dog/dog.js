import React from 'react';
//import config from '../config'
import './dog.css'


class Dog extends React.Component {
  
   
  adoptDog = e => {
    e.preventDefault();
    this.props.fetchDog();
  }

  render() {
    const {dog} = this.props;
    // const {cats, dogs} = this.state
    return (
      <div className="dog">  
         <h2>Adopt a Dog:</h2>
        <ul className="dog-container">       
        <h3>{dog.name}</h3> 
        <div className="dog-image-container">
        <img src={dog.imageURL} alt="dog" />
        </div>        
        <li>{dog.imageDescription}</li>            
        <li>Sex: {dog.sex}</li>
        <li>Age: {dog.age}</li>
        <li>Breed: {dog.breed}</li>
        <li>About Me:</li>
        {dog.story}<br></br>
        <button onClick={this.adoptDog}>Adopt</button>    
        </ul>       
       
        
      </div>
    );
  }


}

export default Dog;
