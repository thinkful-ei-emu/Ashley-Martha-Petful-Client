import React from 'react';
import config from '../config'
import './adopt.css'
import Dog from '../dog/dog'
import Cat from '../cat/cat'
import Queue from '../queue'
import { Link } from 'react-router-dom';


class Adopt extends React.Component {
  state = {
    cat: {},
    dog: {},    
    customers: new Queue(),
    dogError: null,
    catError: null    
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
        this.setState({ cat: cat });
      })
      .catch(res => {
        console.log(res)
        this.setState({ catError: res.error.message });
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
        this.setState({ dog: dog });
      })
      .catch(res => {
        this.setState({ dogError: res.error.message });
      });
  }
  fetchAdoptDog = () =>  {
    return fetch(`${config.API_ENDPOINT}/adopt/dog`, {
    }).then((dogRes) => {
      if (!dogRes.ok) {
        return dogRes.json().then(e => Promise.reject(e));
      }
      
      return dogRes.json()
    })
      
      .catch(error => {
        console.error({ error });
      });
  }
  fetchAdoptCat = () =>  {
    return fetch(`${config.API_ENDPOINT}/adopt/cat`, {
    }).then((catRes) => {
      if (!catRes.ok) {
        return catRes.json().then(e => Promise.reject(e));
      }

      return catRes.json()
    })
     
      .catch(error => {
        console.error({ error });
      });
  }

 

 

  render() {
    const { cat, dog, catError, dogError } = this.state;    
    return (
      <div className="adopt">
        <header className="adopt-header"><h1>Adopt</h1></header>
      
        <div className="animal-container">{
          catError !== null?   <div className="error-message" role="alert">
          {catError && <p className="red">{catError}</p>}
          </div> :   
          <Cat cat={cat} fetchAdoptCat={this.fetchAdoptCat} fetchCat={this.fetchCat}/>   
        }
         {
          dogError !== null?   <div className="error-message" role="alert">
          {dogError && <p className="red">{dogError}</p>}
          </div> :   
         <Dog dog={dog} fetchAdoptDog={this.fetchAdoptDog} fetchDog={this.fetchDog}/>
        }
          
           <Link to="/adopted" >See who has already been adopted</Link>        
        </div>

      </div>
    );
  }
}

export default Adopt;
