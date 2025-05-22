import Location from "../icons/Location";

const CarCard = ({ name, model, year, distance, location, price, image }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <p>{`${name} ${model}`}</p>
      <p>{`${year} ${distance} km`}</p>
      <div>
        <p>{`$ ${price}`}</p>
        <p>
          <Location /> {location}
        </p>
      </div>
    </div>
  );
};

export default CarCard;
