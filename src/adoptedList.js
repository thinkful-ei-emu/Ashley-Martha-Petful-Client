import React from 'react';
import config from './config'





class AdoptedList extends React.Component {
  state = {
   animals:{}
  }

  componentDidMount() {
    this.fetchAdoptedAnimals();
    
  }

 
  fetchAdoptedAnimals = () =>  {
    return fetch(`${config.API_ENDPOINT}/animals`, {
    }).then((animalsRes) => {
      if (!animalsRes.ok) {
        return animalsRes.json().then(e => Promise.reject(e));
      }
      
      return animalsRes.json()
    })
      .then((animals) => {
       
        console.log(animals)
        this.setState({animals});
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
    const { animals} = this.state;    
    return (
      <div className="adopted">
    
       
      <button onClick={this.goBack}>Back</button>
      </div>
    );
  }
}

export default AdoptedList;
