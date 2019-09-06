import React from 'react';
import config from '../config'
import './adopt.css'
import Dog from '../dog/dog'
import Cat from '../cat/cat'
import Queue from '../queue'


class Adopt extends React.Component {
  state = {
    cat: {},
    dog: {},
    customers: new Queue()    
  }

  componentDidMount() {
    this.fetchCat();
    this.fetchDog();
    this.customersInLine();
  }

  stopTime = (timer) => {
    clearInterval(timer);
  }


  customersInLine = () => {
    let timer = setInterval(() => {
      this.state.customers.enqueue(1)
      let firstInLine = this.state.customers.dequeue();
      if(firstInLine === 6 ){
        console.log('adopt cat');
        this.fetchCat();
      }
      if(firstInLine === 2){
        console.log('adopt a dog');
        this.fetchDog();
      }
      if(firstInLine === 3){
        console.log('adopt both')
        this.fetchCat();
        this.fetchDog();
      }
      if(firstInLine > 3 || firstInLine <= 5){
        console.log(`doesn't adopt goes to end of line`)
        this.state.customers.enqueue(firstInLine);
      }
      if(firstInLine === 1){
        console.log('real life user');
        this.stopTime(timer);
      }
    }, 5000)
  }

  fetchCat = () => {
    return fetch(`${config.API_ENDPOINT}/cat`, {
    }).then((catRes) => {
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
