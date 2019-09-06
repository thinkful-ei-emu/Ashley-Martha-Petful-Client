import React from 'react';
import config from '../config'
import './cat.css'


class Cat extends React.Component {
  
   
  adoptCat = e => {
    console.log('adopt cat ran')
    e.preventDefault();
    this.props.fetchCat();

  }






  render() {
    const {cat} = this.props;
    
    return (
      <div className="cat">  
         <h2>Adopt a Cat:</h2>
         <ul className="cat-container">        
        <h3>{cat.name}</h3> 
        <div className="cat-image-container">
          <img src={cat.imageURL} alt="cat" />
          </div>        
        <li>{cat.imageDescription}</li>            
        <li>Sex: {cat.sex}</li>
        <li>Age: {cat.age}</li>
        <li>Breed: {cat.breed}</li>
        <li>About Me:</li>
        {cat.story}<br></br>        
        <button onClick={this.adoptCat}>Adopt</button> 
        </ul>      
       
        
      </div>
    );
  }


}

export default Cat;
