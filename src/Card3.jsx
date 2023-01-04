
function Card3(props) {
  return (
    <div className="oneCardStyle">
      <div className="Head">{props.name}</div>
      <div className="cardBody">{props.discript}</div>
      <div className="bodySection1">{props.block1}</div>
      <div className="bodySection1">{props.block2}</div>
    </div>
  );
}

export default Card3;

