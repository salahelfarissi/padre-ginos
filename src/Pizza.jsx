const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.decription}</p>
    </div>
  );
};

export default Pizza;
