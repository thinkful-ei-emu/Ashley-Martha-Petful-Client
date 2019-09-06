import React from 'react';
import config from '../config'
import './adopt.css'


class Adopt extends React.Component {
  state = {
    cat: {},
    dog: {},
  }

  componentDidMount() {
    this.fetchAllAnimals();
  }

  fetchAllAnimals(){
    return Promise.all([
      fetch(`${config.API_ENDPOINT}/cat`, {      
      }),
      fetch(`${config.API_ENDPOINT}/dog`, {
     
      })
    ]).then(([catRes, dogRes]) => {     
      if (!catRes.ok)
        return catRes.json().then(e => Promise.reject(e));
      if (!dogRes.ok) return dogRes.json().then(e => Promise.reject(e));

      return Promise.all([catRes.json(), dogRes.json()])
    })
    .then(([cat, dog]) => {
      this.setState({ cat, dog });
    })
    .catch(error => {
      console.error({ error });
    });

  }
  //separate cat and dog into two diff componenets
  //add id to each object
  
  // adoptCat = e => {
  //   return fetch(`${config.API_ENDPOINT}/cat/${catId}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'content-type': 'application/json',
        
  //     }
  //   }).then(res => {
  //     if (!res.ok) return res.json().then(e => Promise.reject(e));
  //   });
  // }






  render() {
    const {cat, dog} = this.state;
    // const {cats, dogs} = this.state
    return (
      <div className="adopt">
        <header className= "adopt-header"><h1>Adopt</h1></header>
        <div className= "animal-container">
        <ul className="cat-container">
        <h2>Adopt a Cat:</h2>
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
        <button onClick={this.adoptDog}>Adopt</button> 
        </ul>
        
        <ul className="dog-container">
        <h2>Adopt a Dog:</h2>
        <h3>{dog.name}</h3> 
        <div className="dog-image-container">
        <img src={cat.imageURL} alt="dog" />
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
        
      </div>
    );
  }


}

export default Adopt;
