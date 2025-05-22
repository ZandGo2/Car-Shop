import Location from "../icons/Location";
import Link from "next/link";

const CarCard = ({
  name,
  model,
  year,
  distance,
  location,
  price,
  image,
  id,
}) => {
  return (
    <div>
      <Link href={`/cars/${id}`}>
        <img src={image} alt={name} />
        <p>{`${name} ${model}`}</p>
        <p>{`${year} ${distance} km`}</p>
        <div>
          <p>{`$ ${price}`}</p>
          <p>
            <Location /> {location}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CarCard;
