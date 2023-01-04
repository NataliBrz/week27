function Card2({ name, discript, block1, block2, isSelected }) {

  return (
    <div className={[
      "oneCardStyle",
      isSelected === true ? "bigger" : null
    ].join(' ')}>
      <div className="Head">{name}</div>
      <div className="cardBody">{discript}</div>
      <div className="bodySection1">{block1}</div>
      <div className="bodySection1">{block2}</div>
    </div>
  );
}

export default Card2;

