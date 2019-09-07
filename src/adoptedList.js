import React from 'react';
import config from './config'
import Animal from './animal'

class AdoptedList extends React.Component {
  state = {
    animals: []
  }

  componentDidMount() {
    this.fetchAdoptedAnimals();

  }


  fetchAdoptedAnimals = () => {
    return fetch(`${config.API_ENDPOINT}/animals`, {
    }).then((animalsRes) => {
      if (!animalsRes.ok) {
        return animalsRes.json().then(e => Promise.reject(e));
      }

      return animalsRes.json()
    })
      .then((animals) => {
      
        this.setState({
           animals: animals
          });
      })
      .catch(error => {
        console.error({ error });
      });
  }

  goBack = e => {
    e.preventDefault();
    this.props.history.goBack();
  }



  render() {
    const { animals } = this.state;
    return (
      <div className="adopted">
        <ul>
      {animals.map((animal, index) => (        
        <li key={index}><Animal animal={animal}/> </li>   
       ))}
       </ul>
        <button onClick={this.goBack}>Back</button>
      </div>
    );
  }
}

export default AdoptedList;
