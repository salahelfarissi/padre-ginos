const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.decription}</p>
      <img src={props.image ?? "https://picsum.photos/300"} alt={props.name} />
    </div>
  );
};

export default Pizza;
