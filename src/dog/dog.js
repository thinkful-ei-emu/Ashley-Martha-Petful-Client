import React from 'react';
//import config from '../config'
import './dog.css'

class Dog extends React.Component {
   
  adoptDog = e => {
    e.preventDefault();
    this.props.fetchAdoptDog();
    this.props.fetchDog();
    this.props.customersInLine();
  }

  render() {
    const {dog, place, customer, clear, customersInLine} = this.props;
    return (
      <div className="dog">  
         <h2>Adopt a Dog:</h2>
        <div className="dog-container">       
        <h3>{dog.name}</h3> 
        <div className="dog-image-container">
        <img src={dog.imageURL} alt="dog" />
        </div>        
        <p className="dog-description">{dog.imageDescription}</p>            
        <p>Sex: {dog.sex}</p>
        <p>Age: {dog.age}</p>
        <p>Breed: {dog.breed}</p>
        <p>About Me:</p>
        <p>{dog.story}</p>
        {this.props.place === 0 && this.props.clear === true ? <button onClick={this.adoptDog}>Adopt</button> :
        <></>}   
        </div>       
       
        
      </div>
    );
  }


}

export default Dog;
