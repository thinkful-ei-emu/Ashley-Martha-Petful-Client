import React from 'react';
//import config from '../config'
import './cat.css'


class Cat extends React.Component {  

  adoptCat = e => {
    e.preventDefault();
    this.props.fetchAdoptCat();
    this.props.fetchCat();
    this.props.customersInLine();
  }
  

  render() {
    const {cat, place, clear, customers, customersInLine} = this.props;
    
    return (
      <div className="cat">  
         <h2>Adopt a Cat:</h2>
         <div className="cat-container">        
        <h3>{cat.name}</h3> 
        <div className="cat-image-container">
          <img src={cat.imageURL} alt="cat" />
          </div>        
        <p className="cat-description">{cat.imageDescription}</p>            
        <p>Sex: {cat.sex}</p>
        <p>Age: {cat.age}</p>
        <p>Breed: {cat.breed}</p>
        <p>About Me:</p>
        <p>{cat.story} </p>  
        {this.props.place === 0 && this.props.clear === true
        ? <button onClick={this.adoptCat}>Adopt</button> 
        : <> </>}
        </div>      
      </div>
    );



  }


}

export default Cat;
