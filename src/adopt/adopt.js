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
    place: this.placeInLine,
    clear: false,   
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
    let placeInLine = Math.floor(Math.random()*10)
    this.setState({
      place: placeInLine,
      clear: false
    })
    let timer = setInterval(() => {
      this.state.customers.enqueue(Math.floor(Math.random()*4))
      let firstInLine = this.state.customers.dequeue();
      if(this.state.place === 0){
        this.stopTime(timer);
        this.setState({
          clear: true
        })
      }
      else{
        if(firstInLine === 1 ){
          this.fetchAdoptCat();
          this.fetchCat();
          placeInLine--;          
          this.setState({
            place: placeInLine
          })
        }
        if(firstInLine === 2){
          this.fetchAdoptDog();
          this.fetchDog();
          placeInLine--;
          this.setState({
            place: placeInLine
          })
        }
        if(firstInLine === 3){
          this.fetchAdoptCat();
          this.fetchAdoptDog();
          this.fetchCat();
          this.fetchDog();
          placeInLine--;          
          this.setState({
            place: placeInLine
          })
        }
        if(firstInLine > 3){
          this.state.customers.enqueue(firstInLine);
          placeInLine--;        
          this.setState({
            place: placeInLine
          })
        }
      }
    }, 3000)
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
        {catError !== null && dogError !== null ?
        <h4>There are no more animals to adopt. Check again tomorrow.</h4> : 
         this.state.place === 0 
          ? <h4>It's now your turn.</h4> 
          : <h4>There are now {this.state.place} pet lovers in front of you in line.</h4> 
        }
        
        <div className="animal-container">{
          catError !== null?   <div className="error-message" role="alert">
          {catError && <p className="red">There are no more cats avaliable.</p>}
          </div> :   
          <Cat 
          cat={cat} 
          place={this.state.place} 
          clear={this.state.clear}
          customers={this.state.customers}
          customersInLine={this.customersInLine}
          fetchCat={this.fetchCat} 
          fetchAdoptCat={this.fetchAdoptCat}
          />
         
        }
         {
          dogError !== null?   <div className="error-message" role="alert">
          {dogError && <p className="red">There are no more dogs avaliable.</p>}
          </div> :   
           <Dog 
           dog={dog} 
           place={this.state.place} 
           clear={this.state.clear}
           customers={this.state.customers}
           customersInLine={this.customersInLine}
           fetchDog={this.fetchDog}
           fetchAdoptDog={this.fetchAdoptDog}
           />
           
        }                  
        </div>         
      
        <div>
          <Link to="/adopted"> See who has already been adopted</Link> 
        </div>
      </div>
    );
  }
}

export default Adopt;
