import React from "react";
import './App.css'

class Card4 extends React.Component {
  render() {
    const { aname, adiscript, ablock1, ablock2 } = this.props;
    return (
      <div className="oneCardStyle">
        <div className="Head">{aname}</div>
        <div className="cardBody">{adiscript}</div>
        <div className="bodySection1">{ablock1}</div>
        <div className="bodySection1">{ablock2}</div>
      </div>
    )
  }

}

export default Card4;







