import React from "react";
import { render } from "react-dom";

class DogCard extends React.Component{

  state = {
    hasBeenClicked: false
  }
  
  handleClick = () => {
    console.log("clicked!")
    
    this.setState((prevState)=> ({hasBeenClicked: !prevState.hasBeenClicked}))
  }

  //common method is to use a helper for the if logic
  
  render() {
    const {cardObj} = this.props

    return (
      <div className="card">
        <span className="content">
          <h2 >{cardObj.name}</h2>
          <img alt="" src={cardObj.img} />
        </span>
        <span className="bark">
          <button onClick={this.handleClick}>Bark</button>
        </span>
        
        {this.state.hasBeenClicked ? <h2>"Bark"</h2> : null}
      
        
      </div>
    );
  }
}

export default DogCard;
