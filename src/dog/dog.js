import React from 'react';
//import config from '../config'
import './dog.css'


class Dog extends React.Component {
  //need to display no dogs left if none left in queue
   
  adoptDog = e => {
    e.preventDefault();
    this.props.fetchAdoptDog();
    this.props.fetchDog();
  }

  render() {
    const {dog} = this.props;    

    if (!dog) {
      return <p>No more dogs left to adopt</p>;
    }
    else{
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


}

export default Dog;
