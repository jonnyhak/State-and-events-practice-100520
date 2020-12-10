import React, { Component } from "react";
import {apiResponse} from '../api.js'
import DogCard from '../Components/DogCard'

class DogsList extends Component {
  dogsArr = () => {
    return apiResponse.map(dogEl => <DogCard cardObj={dogEl} />)
  }


  render() {
    // return <div className="list">{/*list of dogs go here*/}</div>;
    return <div className="list">{this.dogsArr()}</div>;
  }
}

export default DogsList;
