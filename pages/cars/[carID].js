import Location from "../../components/icons/Location";
import Money from "../../components/icons/Money";
import Road from "../../components/icons/Road";
import Calender from "../../components/icons/Calender";
import Company from "../../components/icons/Company";
import Model from "../../components/icons/Model";
import { useRouter } from "next/router";
import carsData from "../../data/carsData";

const DetailCar = () => {
  const Route = useRouter();
  const { carID } = Route.query;
  const data = carsData[carID - 1];

  if (!data) return <div>Car not found</div>;

  const {
    name,
    model,
    year,
    distance,
    location,
    price,
    image,
    description,
    category,
  } = data;

  return (
    <div>
      <img src={image} alt={name} />
      <p>{`${name} ${model}`}</p>
      <div>
        <div>
          <p>
            <Company /> Company
          </p>
          <p>{name}</p>
        </div>
        <div>
          <p>
            <Model /> Model
          </p>
          <p>{model}</p>
        </div>
        <div>
          <p>
            <Calender />
            First registration
          </p>
          <p>{year}</p>
        </div>
        <div>
          <p>
            <Road /> Kms driven
          </p>
          <p>{distance}</p>
        </div>
      </div>
      <div>
        <p>
          <Location /> Location
        </p>
        <p>{location}</p>
      </div>
      <div>
        <p>Extra Information</p>
        <p>{description}</p>
      </div>
      <div>
        <p>
          <Money /> Price :
        </p>
        <p>{`$ ${price}`}</p>
      </div>
      <button>Buy</button>
    </div>
  );
};

export default DetailCar;
