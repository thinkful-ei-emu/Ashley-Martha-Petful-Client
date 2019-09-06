import React from 'react';
import config from '../config'
import './adopt.css'
import Dog from '../dog/dog'
import Cat from '../cat/cat'


class Adopt extends React.Component {
  state = {
    cat: {},
    dog: {},    
  }

  componentDidMount() {
  
    this.fetchCat();
    this.fetchDog();
  }

  fetchCat = () => {
    return fetch(`${config.API_ENDPOINT}/cat`, {
    }).then((catRes) => {
      console.log(catRes)
      if (!catRes.ok) {
        return catRes.json().then(e => Promise.reject(e));
      }

      return catRes.json()
    })
      .then((cat) => {
        this.setState({ cat });
      })
      .catch(error => {
        console.error({ error });
      });
  }
  fetchDog = () =>  {
    return fetch(`${config.API_ENDPOINT}/dog`, {
    }).then((dogRes) => {
      console.log(dogRes)
      if (!dogRes.ok) {
        return dogRes.json().then(e => Promise.reject(e));
      }
      
      return dogRes.json()
    })
      .then((dog) => {
        this.setState({ dog });
      })
      .catch(error => {
        console.error({ error });
      });
  }

 

  render() {
    const { cat, dog } = this.state;    
    return (
      <div className="adopt">
        <header className="adopt-header"><h1>Adopt</h1></header>
        <div className="animal-container">
          <Cat cat={cat} fetchCat={this.fetchCat} />
          <Dog dog={dog} fetchDog={this.fetchDog}/>          
        </div>
      </div>
    );
  }


}

export default Adopt;
