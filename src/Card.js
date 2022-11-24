const Card = ({ animals, handleDelete }) => {
  // const animals = props.animals;

  return (
    <div className="col-3">
      {animals.map((animal) => (
        <div className="card" key={animal.id}>
          <img
            src={animal.image_link}
            alt={animal.latin_name}
            className="card-img-top"
          />
          <div className="card-body">
            <h3 className="card-title">{animal.name}</h3>
            <p>Habitat: {animal.habitat}</p>
            <button onClick={() => handleDelete(animal.id)}>
              Delete Animal
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
